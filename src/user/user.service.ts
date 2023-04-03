import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async getOneUser(userId: string): Promise<User> {
    return await User.findOneBy({ userId });
  }

  async getOneUserByEmail(email: string): Promise<User> {
    return await User.findOneBy({ email });
  }
}
