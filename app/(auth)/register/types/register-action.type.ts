import { RegisterInterface } from '@/app/(auth)/register/interfaces/register.interface';

export type RegisterActionType = (values: RegisterInterface) => Promise<void>;
