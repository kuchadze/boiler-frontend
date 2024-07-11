import { ComponentType } from 'react';
import styles from './Register.module.scss';
import BnetIcon from '@/public/icons/bnet.png';
import DiscordIcon from '@/public/icons/discord.png';
import FacebookIcon from '@/public/icons/facebook-icon.png';
import GithubIcon from '@/public/icons/github.svg';
import GoogleIcon from '@/public/icons/google-login.png';
import RegisterForm from '@/src/app/(auth)/register/forms/RegisterForm/RegisterForm';
import OAuthLogin from '@/src/shared/components/OAuthLogin/OAuthLogin';
import { OAuthTypeEnum } from '@/src/shared/types/enums/oauth-type.enum';

const RegisterPage: ComponentType = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
      <OAuthLogin type={OAuthTypeEnum.Google} image={GoogleIcon} />
      <OAuthLogin type={OAuthTypeEnum.Discord} image={DiscordIcon} />
      <OAuthLogin type={OAuthTypeEnum.Facebook} image={FacebookIcon} />
      <OAuthLogin type={OAuthTypeEnum.Github} image={GithubIcon} />
      <OAuthLogin type={OAuthTypeEnum.Bnet} image={BnetIcon} />
    </div>
  );
};

export default RegisterPage;
