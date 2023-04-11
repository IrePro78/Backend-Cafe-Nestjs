import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { GetListUsersResponse } from 'types';

@Injectable()
export class UserService {
  async getOneUser(userId: string): Promise<User> {
    return await User.findOneBy({ userId });
  }

  async getUsers(): Promise<GetListUsersResponse> {
    return await User.find();
  }

  async getOneUserByEmail(email: string): Promise<User> {
    return await User.findOneBy({ email });
  }
}
