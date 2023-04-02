import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  async getOneUser(userId: string): Promise<User> {
    return await User.findOneByOrFail({ userId });
  }

  async getOneUserByEmail(email: string): Promise<User> {
    return await User.findOneByOrFail({ email });
  }
}
