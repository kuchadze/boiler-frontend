'use client';
import { Button, Form, Input } from 'antd';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import styles from './ProductForm.module.css';
import { upsertApi } from '@/app/Api/crud-operations';
import { ResponseInterface } from '@/app/Api/interfaces/response.interface';

export default function ProductForm(props: { id?: number }): JSX.Element {
  const router: AppRouterInstance = useRouter();

  const onSubmit: (values: { name: string }) => Promise<void> = async (values: {
    name: string;
  }) => {
    const response: ResponseInterface<{ userId: number; name: string }> =
      await upsertApi(
        'products',
        {
          ...values,
          userId: 1,
        },
        props.id,
      );

    if (response.ok) {
      router.push('/products');
    }
  };

  return (
    <div className={styles.main}>
      <Form onFinish={async (values) => await onSubmit(values)}>
        <Form.Item name={'name'} label={'სახელი'}>
          <Input />
        </Form.Item>
        <Button htmlType={'submit'}>{props.id ? 'განახლება' : 'შექმნა'}</Button>
      </Form>
    </div>
  );
}
