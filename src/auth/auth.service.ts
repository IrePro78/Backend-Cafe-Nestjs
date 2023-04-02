import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto';
import { User } from '../users/user.entity';
import { Tokens } from './types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async register(newUser: RegisterUserDto): Promise<Tokens> {
    const user = new User();

    user.username = newUser.username;
    user.email = newUser.email;
    user.contactNumber = newUser.contactNumber;
    user.password = await this.hashData(newUser.password);
    user.role = newUser.role;

    await user.save();

    const tokens = await this.getTokens(user.userId, user.email);
    await this.updateRtHash(user.userId, tokens.refresh_token);
    return tokens;
  }

  async updateRtHash(userId: string, rt: string) {
    const user = await this.userService.getOneUser(userId);
    user.refreshToken = await this.hashData(rt);
    await user.save();
  }

  async getTokens(userId: string, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { userId, email },
        {
          secret: 'at-secret',
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        { userId, email },
        {
          secret: 'rt-secret',
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);
    return { access_token: at, refresh_token: rt };
  }

  async login(email: string, pass: string): Promise<any> {
    const user = await this.userService.getOneUser(email);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
