import { LoginInterface } from '@/src/app/(auth)/login/types/interfaces/login.interface';
import { RegisterInterface } from '@/src/app/(auth)/register/types/interfaces/register.interface';

export type AuthActionType = (
  endpoint: string,
  values: RegisterInterface | LoginInterface,
) => Promise<void>;
