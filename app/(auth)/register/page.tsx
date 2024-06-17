'use client';
import styles from './Register.module.scss';
import RegisterForm from '@/app/(auth)/register/components/RegisterForm';
import { ComponentType } from '@/app/Types/component-type';

const RegisterPage: ComponentType = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
