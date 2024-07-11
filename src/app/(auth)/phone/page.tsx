'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { PhoneDto } from '@novatoriteam/validators';
import { Button, Form } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import styles from './PhonePage.module.scss';
import { phoneAction } from '@/src/app/(auth)/actions/auth-action';
import ControlledInput from '@/src/shared/components/ControlledInput/ControlledInput';

const PhonePage: FC = () => {
  const { control, handleSubmit } = useForm<PhoneDto>({
    resolver: classValidatorResolver(PhoneDto),
  });

  const onSubmit = async (data: PhoneDto): Promise<void> => {
    localStorage.setItem('phone', data.phone);
    await phoneAction(data.phone);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Item label={'ტელეფონის ნომერი'}>
          <ControlledInput control={control} name={'phone'} type={'text'} />
        </Form.Item>
        <Button htmlType={'submit'}>გაგრძელება</Button>
      </form>
    </div>
  );
};

export default PhonePage;
