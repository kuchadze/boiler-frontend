'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Form, Input } from 'antd';
import { ComponentType } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { authAction } from '@/src/app/(auth)/actions/auth-action';
import { RegisterSchema } from '@/src/app/(auth)/register/forms/schemas/register.schema';

const RegisterForm: ComponentType = () => {
  const { control, handleSubmit } = useForm<RegisterSchema>({
    resolver: classValidatorResolver(RegisterSchema),
  });

  const onSubmit: (values: RegisterSchema) => Promise<void> = async (
    values: RegisterSchema,
  ) => {
    await authAction('/register', values.toPlain());
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item label={'სახელი'}>
        <Controller
          control={control}
          name={'firstName'}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label={'გვარი'}>
        <Controller
          control={control}
          name={'lastName'}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label={'მეილი'}>
        <Controller
          control={control}
          name={'email'}
          render={({ field }) => <Input {...field} type={'email'} />}
        />
      </Form.Item>
      <Form.Item label={'პაროლი'}>
        <Controller
          name={'password'}
          control={control}
          render={({ field }) => <Input.Password {...field} />}
        />
      </Form.Item>
      <Form.Item label={'გაიმეორე პაროლი'}>
        <Controller
          name={'confirmPassword'}
          control={control}
          render={({ field }) => <Input.Password {...field} />}
        />
      </Form.Item>
      <Button htmlType={'submit'}>გაგრძელება</Button>
    </form>
  );
};

export default RegisterForm;
