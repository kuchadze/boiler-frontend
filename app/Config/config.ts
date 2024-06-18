import * as dotenv from 'dotenv';
import { ApiConfigInterface } from '@/app/Config/interfaces/api-config.interface';
import { GoogleOAuthConfigInterface } from '@/app/Config/interfaces/google-oauth-config.interface';

dotenv.config();

export const apiConfig: ApiConfigInterface = {
  rootApiUrl: process.env.NEXT_PUBLIC_API_ROOT ?? '',
};

export const googleOAuthConfig: GoogleOAuthConfigInterface = {
  redirectUrl: process.env.GOOGLE_AUTH_REDIRECT_URL ?? '',
};
