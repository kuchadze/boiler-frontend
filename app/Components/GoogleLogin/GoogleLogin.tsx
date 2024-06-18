'use client';
import Image from 'next/image';
import styles from './GoogleLogin.module.scss';
import { ComponentType } from '@/app/Types/component-type';
import GoogleIcon from '@/public/icons/google-login.png';

const GoogleLogin: ComponentType = () => {
  return (
    <Image
      onClick={() => window.open('http://localhost:3001/auth/google', '_self')}
      src={GoogleIcon}
      alt={'google icon'}
      width={30}
      height={30}
      className={styles.image}
    />
  );
};

export default GoogleLogin;
