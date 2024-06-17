'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthResponseInterface } from '@/app/(auth)/interfaces/auth-response.interface';
import { RegisterInterface } from '@/app/(auth)/register/interfaces/register.interface';
import { create } from '@/app/Api/crud-operations';
import { ResponseInterface } from '@/app/Api/interfaces/response.interface';

type RegisterActionType = (values: RegisterInterface) => Promise<void>;

export const register: RegisterActionType = async (
  values: RegisterInterface,
) => {
  const response: ResponseInterface<AuthResponseInterface> = await create<
    RegisterInterface,
    AuthResponseInterface
  >('auth/register', values);

  if (response.ok) {
    const { accessToken, refreshToken } = response.body.data;
    cookies().set('accessToken', accessToken);
    cookies().set('refreshToken', refreshToken);
    redirect('/');
  }
};
