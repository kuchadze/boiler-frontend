import { IsEmail, IsString, Validate } from 'class-validator';
import { RegisterInterface } from '@/app/(auth)/register/interfaces/register.interface';

export class RegisterSchema implements RegisterInterface {
  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsString()
  @Validate(
    (data: RegisterSchema) => {
      return data.password === data.confirmPassword;
    },
    { message: 'password do not much' },
  )
  confirmPassword!: string;

  toPlain(): RegisterInterface {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };
  }
}
