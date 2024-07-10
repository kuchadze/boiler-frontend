import * as dotenv from 'dotenv';
import { ApiConfigInterface } from '@/src/shared/config/types/interfaces/api-config.interface';
import { OAuthConfigInterface } from '@/src/shared/config/types/oauth.type';
import { OAuthTypeEnum } from '@/src/shared/types/enums/oauth-type.enum';

dotenv.config();

export const apiConfig: ApiConfigInterface = {
  rootApiUrl: process.env.NEXT_PUBLIC_API_ROOT ?? '',
};

export const oAuthConfig: OAuthConfigInterface = {
  [OAuthTypeEnum.Google]:
    process.env.NEXT_PUBLIC_GOOGLE_AUTH_REDIRECT_URL ?? '',
  [OAuthTypeEnum.Discord]:
    process.env.NEXT_PUBLIC_DISCORD_AUTH_REDIRECT_URL ?? '',
  [OAuthTypeEnum.Facebook]:
    process.env.NEXT_PUBLIC_FACEBOOK_AUTH_REDIRECT_URL ?? '',
};
