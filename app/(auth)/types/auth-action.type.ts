import { LoginInterface } from '@/app/(auth)/login/interfaces/login.interface';
import { RegisterInterface } from '@/app/(auth)/register/interfaces/register.interface';

export type AuthActionType = (
  endpoint: string,
  values: RegisterInterface | LoginInterface,
) => Promise<void>;
