import styles from './Login.module.scss';
import LoginForm from '@/app/(auth)/login/components/LoginForm/LoginForm';
import GoogleLogin from '@/app/Components/GoogleLogin/GoogleLogin';
import { ComponentType } from '@/app/Types/component-type';

const LoginPage: ComponentType = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <GoogleLogin />
    </div>
  );
};

export default LoginPage;
