import { IsEmail, IsString } from 'class-validator';
import { LoginInterface } from '@/app/(auth)/login/interfaces/login.interface';

export class LoginSchema implements LoginInterface {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  toPlain(): LoginInterface {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
