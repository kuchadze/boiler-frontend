import { OAuthTypeEnum } from '@/src/shared/types/enums/oauth-type.enum';

export type OAuthConfigInterface = {
  [key in OAuthTypeEnum]: string;
};
