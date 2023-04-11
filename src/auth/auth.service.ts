import {
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserDto, RegisterUserDto } from './dto';
import { User } from '../user/user.entity';
import { Tokens } from 'types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async hashData(data: string): Promise<string> {
    return bcrypt.hash(data, 10);
  }

  async register(newUser: RegisterUserDto): Promise<Tokens> {
    const user = new User();

    user.username = newUser.username;
    user.email = newUser.email;
    user.contactNumber = newUser.contactNumber;
    user.password = await this.hashData(newUser.password);
    // user.role = newUser.role;

    const checkUser = await this.userService.getOneUserByEmail(newUser.email);
    if (checkUser) throw new ConflictException('Email already exist !');

    await user.save();

    const tokens = await this.getTokens(user.userId, user.email, user.role);
    await this.updateRtHash(user.userId, tokens.refresh_token);
    return tokens;
  }

  async updateRtHash(userId: string, rt: string): Promise<void> {
    const user = await this.userService.getOneUser(userId);
    user.refreshToken = await this.hashData(rt);
    await user.save();
  }

  async getTokens(
    userId: string,
    email: string,
    role: string,
  ): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { userId, email, role },
        {
          secret: 'guards-secret',
          expiresIn: 15,
        },
      ),
      this.jwtService.signAsync(
        { userId, email, role },
        {
          secret: 'rt-secret',
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);
    return { role, access_token: at, refresh_token: rt };
  }

  async login(login: LoginUserDto): Promise<Tokens> {
    const user = await this.userService.getOneUserByEmail(login.email);

    if (!user) throw new UnauthorizedException('Access Denied');

    const passwordMatches = await bcrypt.compare(login.password, user.password);

    if (!passwordMatches) throw new UnauthorizedException('Access Denied');

    const tokens = await this.getTokens(user.userId, user.email, user.role);
    await this.updateRtHash(user.userId, tokens.refresh_token);
    return tokens;
  }

  async logout(userId: string) {
    const user = await this.userService.getOneUser(userId);
    if (!user) throw new ForbiddenException('Access Denied');
    user.refreshToken = null;
    await user.save();
  }

  async refreshTokens(userId: string, rt: string) {
    const user = await this.userService.getOneUser(userId);
    if (!user || !user.refreshToken)
      throw new ForbiddenException('Access Denied');

    const rtMatches = await bcrypt.compare(rt, user.refreshToken);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.userId, user.email, user.role);
    await this.updateRtHash(user.userId, tokens.refresh_token);
    return tokens;
  }
}
