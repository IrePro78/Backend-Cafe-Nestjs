import { Body, Controller, forwardRef, Inject, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserResponse } from './interfaces/user.interface';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {}

  @Post('/register')
  async register(@Body() user: RegisterUserDto): Promise<RegisterUserResponse> {
    return await this.usersService.register(user);
  }
}
