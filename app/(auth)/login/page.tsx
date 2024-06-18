import styles from './Login.module.scss';
import LoginForm from '@/app/(auth)/login/components/LoginForm/LoginForm';
import { ComponentType } from '@/app/Types/component-type';

const LoginPage: ComponentType = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
