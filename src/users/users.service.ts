import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { RegisterUserResponse } from './interfaces/user.interface';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  async register(newUser: RegisterUserDto): Promise<RegisterUserResponse> {
    const user = new User();

    user.name = newUser.name;
    user.email = newUser.email;
    user.contactNumber = newUser.contactNumber;
    user.password = newUser.password;
    user.role = newUser.role;

    await user.save();
    return user;
  }

  async getOneUser(email: string): Promise<User> {
    return await User.findOneByOrFail({ email });
  }
}
