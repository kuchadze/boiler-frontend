import { OAuthTypeEnum } from '@/app/Enums/oauth-type.enum';

export type OAuthConfigInterface = {
  [key in OAuthTypeEnum]: string;
};
