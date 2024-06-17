'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthResponseInterface } from '@/app/(auth)/interfaces/auth-response.interface';
import { RegisterInterface } from '@/app/(auth)/register/interfaces/register.interface';
import { RegisterActionType } from '@/app/(auth)/register/types/register-action.type';
import {
  getAccessTokenExpirationTime,
  getRefreshTokenExpirationTime,
} from '@/app/(auth)/utils/getTokenExpiration/get-token-expiration.utils';
import { create } from '@/app/Api/crud-operations';
import { ResponseInterface } from '@/app/Api/interfaces/response.interface';

export const register: RegisterActionType = async (
  values: RegisterInterface,
) => {
  const response: ResponseInterface<AuthResponseInterface> = await create<
    RegisterInterface,
    AuthResponseInterface
  >('auth/register', values);

  if (response.ok) {
    const { accessToken, refreshToken } = response.body.data;
    cookies().set('accessToken', accessToken, {
      httpOnly: true,
      expires: getAccessTokenExpirationTime(),
    });
    cookies().set('refreshToken', refreshToken, {
      httpOnly: true,
      expires: getRefreshTokenExpirationTime(),
    });
    redirect('/');
  }
};
