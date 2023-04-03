import { Body, Controller, forwardRef, Inject, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    @Inject(forwardRef(() => UserService))
    private usersService: UserService,
  ) {}
}
