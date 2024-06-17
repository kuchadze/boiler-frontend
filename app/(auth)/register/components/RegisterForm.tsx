import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { register } from '@/app/(auth)/register/actions/register.action';
import { RegisterSchema } from '@/app/(auth)/register/schemas/register.schema';
import { ComponentType } from '@/app/Types/component-type';

const RegisterForm: ComponentType = () => {
  const { control, handleSubmit } = useForm<RegisterSchema>({
    resolver: classValidatorResolver(RegisterSchema),
  });

  const onSubmit: (values: RegisterSchema) => Promise<void> = async (
    values: RegisterSchema,
  ) => {
    await register(values.toPlain());
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
          render={({ field }) => <Input.Password {...field} type={'email'} />}
        />
      </Form.Item>
      <Button htmlType={'submit'}>გაგრძელება</Button>
    </form>
  );
};

export default RegisterForm;
