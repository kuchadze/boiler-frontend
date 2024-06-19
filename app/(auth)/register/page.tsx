import styles from './Register.module.scss';
import RegisterForm from '@/app/(auth)/register/components/RegisterForm';
import OAuthLogin from '@/app/Components/OAuthLogin/OAuthLogin';
import { OAuthTypeEnum } from '@/app/Enums/oauth-type.enum';
import { ComponentType } from '@/app/Types/component-type';
import DiscordIcon from '@/public/icons/discord.png';
import GoogleIcon from '@/public/icons/google-login.png';

const RegisterPage: ComponentType = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
      <OAuthLogin type={OAuthTypeEnum.Google} image={GoogleIcon} />
      <OAuthLogin type={OAuthTypeEnum.Discord} image={DiscordIcon} />
    </div>
  );
};

export default RegisterPage;
