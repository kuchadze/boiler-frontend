import { LoginSchema } from '@/src/app/(auth)/login/forms/schemas/login.schema';

export type LoginSubmitType = (values: LoginSchema) => void;
