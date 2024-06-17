'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthResponseInterface } from '@/app/(auth)/interfaces/auth-response.interface';
import { LoginInterface } from '@/app/(auth)/login/interfaces/login.interface';
import { create } from '@/app/Api/crud-operations';
import { ResponseInterface } from '@/app/Api/interfaces/response.interface';

export const login: (values: LoginInterface) => void = async (
  values: LoginInterface,
) => {
  const response: ResponseInterface<AuthResponseInterface> = await create<
    LoginInterface,
    AuthResponseInterface
  >('auth/login', values);

  if (response.ok) {
    const { accessToken, refreshToken } = response.body.data;

    console.log(response.body);

    cookies().set('accessToken', accessToken, {
      httpOnly: true,
      expires: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
    });
    cookies().set('refreshToken', refreshToken, {
      httpOnly: true,
      expires: new Date().getTime() + 60 * 24 * 60 * 60 * 1000,
    });

    redirect('/');
  }
};
