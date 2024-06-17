'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Form, Input } from 'antd';
import { JSX } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { login } from '@/app/(auth)/login/actions/login.action';
import { LoginSchema } from '@/app/(auth)/login/schemas/login.schema';

const LoginForm: () => JSX.Element = () => {
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: classValidatorResolver(LoginSchema),
  });

  const onFinish: (values: LoginSchema) => void = async (
    values: LoginSchema,
  ) => {
    login(values.toPlain());
  };

  return (
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
  );
};

export default LoginForm;
