import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './dto';
import { Tokens } from './types';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() user: RegisterUserDto): Promise<Tokens> {
    return await this.authService.register(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() login: LoginUserDto): Promise<Tokens> {
    return this.authService.login(login);
  }

  @UseGuards(AuthGuard('jwt-access'))
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Req() req: Request) {
    const user = req.user;
    return this.authService.logout(user['userId']);
  }

  // @UseGuards(AuthGuard('jwt-refresh'))
  // @Post('refresh')
  // @HttpCode(HttpStatus.OK)
  // refreshTokens() {}

  // @UseGuards(AuthGuard)
  // @HttpCode(HttpStatus.OK)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
