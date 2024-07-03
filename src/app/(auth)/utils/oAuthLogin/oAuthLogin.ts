import { oAuthConfig } from '@/src/shared/config/config';
import { OAuthTypeEnum } from '@/src/shared/types/enums/oauth-type.enum';

export const oAuthLogin = (type: OAuthTypeEnum): void => {
  const url: string = oAuthConfig[type];
  window.open(url, '_self');
};
