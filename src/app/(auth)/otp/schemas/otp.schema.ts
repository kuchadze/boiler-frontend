import { IsNumberString } from 'class-validator';

export class OtpSchema {
  @IsNumberString()
  otp!: string;
}
