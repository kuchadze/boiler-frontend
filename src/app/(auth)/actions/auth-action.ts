'use server';
import { AuthResponseDto, VerifyOtpDto } from '@novatoriteam/validators';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { LoginInterface } from '@/src/app/(auth)/login/types/interfaces/login.interface';
import { RegisterInterface } from '@/src/app/(auth)/register/types/interfaces/register.interface';
import { AuthActionType } from '@/src/app/(auth)/types/auth-action.type';
import { AuthResponseInterface } from '@/src/app/(auth)/types/interfaces/auth-response.interface';
import {
  getAccessTokenExpirationTime,
  getRefreshTokenExpirationTime,
} from '@/src/app/(auth)/utils/getTokenExpiration/get-token-expiration.utils';
import { createApi } from '@/src/shared/api/crud-operations';
import { ResponseInterface } from '@/src/shared/api/types/interfaces/response.interface';

export const authAction: AuthActionType = async (
  endpoint: string,
  values: RegisterInterface | LoginInterface,
) => {
  const response: ResponseInterface<AuthResponseInterface> = await createApi(
    'auth' + endpoint,
    values,
  );

  if (response.ok) {
    const { accessToken, refreshToken } = response.body.data;
    handleAuthentication(accessToken, refreshToken);
  }
};

export const phoneAction = async (phone: string): Promise<void> => {
  const response = await createApi<{ phone: string }, void>('auth/otp', {
    phone,
  });

  if (response.ok) {
    redirect('/otp');
  }
};

export const verifyOtpAction = async (
  phone: string,
  otp: string,
): Promise<void> => {
  const response = await createApi<VerifyOtpDto, AuthResponseDto>(
    'auth/verify-otp',
    { phone, otp: String(otp) },
  );

  if (response.ok) {
    const { accessToken, refreshToken } = response.body.data;
    handleAuthentication(accessToken, refreshToken);
  }
};

const handleAuthentication = (
  accessToken: string,
  refreshToken: string,
): void => {
  cookies().set('accessToken', accessToken, {
    httpOnly: true,
    expires: getAccessTokenExpirationTime(),
  });
  cookies().set('refreshToken', refreshToken, {
    httpOnly: true,
    expires: getRefreshTokenExpirationTime(),
  });

  redirect('/');
};
