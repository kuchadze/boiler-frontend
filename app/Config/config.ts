import * as dotenv from 'dotenv';
import { ApiConfigInterface } from '@/app/Config/interfaces/api-config.interface';
import { OAuthConfigInterface } from '@/app/Config/types/oauth.type';
import { OAuthTypeEnum } from '@/app/Enums/oauth-type.enum';

dotenv.config();

export const apiConfig: ApiConfigInterface = {
  rootApiUrl: process.env.NEXT_PUBLIC_API_ROOT ?? '',
};

export const oAuthConfig: OAuthConfigInterface = {
  [OAuthTypeEnum.Google]:
    process.env.NEXT_PUBLIC_GOOGLE_AUTH_REDIRECT_URL ?? '',
  [OAuthTypeEnum.Discord]:
    process.env.NEXT_PUBLIC_DISCORD_AUTH_REDIRECT_URl ?? '',
};
