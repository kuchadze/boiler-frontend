import { oAuthConfig } from '@/app/Config/config';
import { OAuthTypeEnum } from '@/app/Enums/oauth-type.enum';

export const oAuthLogin = (type: OAuthTypeEnum): void => {
  const url: string = oAuthConfig[type];
  window.open(url, '_self');
};
