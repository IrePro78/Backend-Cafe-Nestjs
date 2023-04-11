import {
  Controller,
  forwardRef,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '../common/decorators';
import { GetListUsersResponse, GetOneUserResponse } from 'types';

@Controller('user')
export class UserController {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}

  // @Public()
  @Get('getUsers')
  @HttpCode(HttpStatus.OK)
  getUsers(): Promise<GetListUsersResponse> {
    return this.userService.getUsers();
  }

  // @Public()
  @Get('getOneUser/:id')
  @HttpCode(HttpStatus.OK)
  getOneUser(@Param('id') userId): Promise<GetOneUserResponse> {
    return this.userService.getOneUser(userId);
  }
}
