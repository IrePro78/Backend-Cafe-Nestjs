import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class LoginUserDto {
  email: string;
  password: string;
}

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsPhoneNumber('PL')
  contactNumber: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsEmpty()
  role: string;
}
