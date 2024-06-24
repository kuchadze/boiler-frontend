import styles from './Login.module.scss';
import LoginForm from '@/app/(auth)/login/components/LoginForm/LoginForm';
import OAuthLogin from '@/app/Components/OAuthLogin/OAuthLogin';
import { OAuthTypeEnum } from '@/app/Enums/oauth-type.enum';
import { ComponentType } from '@/app/Types/component-type';
import DiscordIcon from '@/public/icons/discord.png';
import FacebookIcon from '@/public/icons/facebook-icon.png';
import GoogleIcon from '@/public/icons/google-login.png';

const LoginPage: ComponentType = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <div className={styles.oauthWrapper}>
        <OAuthLogin type={OAuthTypeEnum.Google} image={GoogleIcon} />
        <OAuthLogin type={OAuthTypeEnum.Discord} image={DiscordIcon} />
        <OAuthLogin type={OAuthTypeEnum.Facebook} image={FacebookIcon} />
      </div>
    </div>
  );
};

export default LoginPage;
