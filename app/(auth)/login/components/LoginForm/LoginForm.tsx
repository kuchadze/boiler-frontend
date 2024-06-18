'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Form, Input } from 'antd';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import { authAction } from '@/app/(auth)/actions/auth-action';
import { LoginSchema } from '@/app/(auth)/login/schemas/login.schema';
import { LoginSubmitType } from '@/app/(auth)/login/types/login-submit.type';
import { ComponentType } from '@/app/Types/component-type';
import GoogleIcon from '@/public/icons/google-login.png';

const LoginForm: ComponentType = () => {
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: classValidatorResolver(LoginSchema),
  });

  const onFinish: LoginSubmitType = async (values: LoginSchema) => {
    await authAction('/login', values.toPlain());
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onFinish)}>
        <Form.Item label={'მეილი'}>
          <Controller
            render={({ field }) => <Input type={'email'} {...field} />}
            name={'email'}
            control={control}
          />
        </Form.Item>
        <Form.Item label={'პაროლი'}>
          <Controller
            render={({ field }) => <Input.Password {...field} />}
            name={'password'}
            control={control}
          />
        </Form.Item>
        <Button htmlType={'submit'}>გაგრძელება</Button>
      </form>
      <Image
        onClick={() =>
          window.open('http://localhost:3001/auth/google', '_self')
        }
        src={GoogleIcon}
        alt={'google icon'}
        width={30}
        height={30}
        className={styles.image}
      />
    </div>
  );
};

export default LoginForm;
