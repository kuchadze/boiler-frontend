'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Form } from 'antd';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './OtpPage.module.scss';
import { verifyOtpAction } from '@/src/app/(auth)/actions/auth-action';
import { OtpSchema } from '@/src/app/(auth)/otp/schemas/otp.schema';
import ControlledInput from '@/src/shared/components/ControlledInput/ControlledInput';

const OtpPage: FC = () => {
  const { control, handleSubmit } = useForm<OtpSchema>({
    resolver: classValidatorResolver(OtpSchema),
  });
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('phone')) router.push('/phone');
  }, [router]);

  const onSubmit = async (data: OtpSchema): Promise<void> => {
    await verifyOtpAction(localStorage.getItem('phone') ?? '', data.otp);
    localStorage.removeItem('phone');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Item label={'კოდი'}>
          <ControlledInput name={'otp'} type={'text'} control={control} />
        </Form.Item>
        <Button htmlType={'submit'}>გაგრძელება</Button>
      </form>
    </div>
  );
};

export default OtpPage;
