import { LoginSchema } from '@/app/(auth)/login/schemas/login.schema';

export type LoginSubmitType = (values: LoginSchema) => void;
