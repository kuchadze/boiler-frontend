import { ComponentType } from 'react';
import styles from './Login.module.scss';
import DiscordIcon from '@/public/icons/discord.png';
import GoogleIcon from '@/public/icons/google-login.png';
import LoginForm from '@/src/app/(auth)/login/forms/LoginForm/LoginForm';
import OAuthLogin from '@/src/shared/components/OAuthLogin/OAuthLogin';
import { OAuthTypeEnum } from '@/src/shared/types/enums/oauth-type.enum';

const LoginPage: ComponentType = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <div className={styles.oauthWrapper}>
        <OAuthLogin type={OAuthTypeEnum.Google} image={GoogleIcon} />
        <OAuthLogin type={OAuthTypeEnum.Discord} image={DiscordIcon} />
      </div>
    </div>
  );
};

export default LoginPage;
