'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import {
  CreateDepartmentDto,
  UpdateDepartmentDto,
} from '@novatoriteam/validators';
import { Button, Form } from 'antd';
import { instanceToPlain } from 'class-transformer';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import styles from './DepartmentForm.module.scss';
import { DepartmentFormType } from '@/src/app/departments/types/department-form.type';
import { DepartmentFormPropsInterface } from '@/src/app/departments/types/interfaces/department-props.interface';
import { upsertApi } from '@/src/shared/api/crud-operations';
import ControlledInput from '@/src/shared/components/ControlledInput/ControlledInput';

const DepartmentForm: FC<DepartmentFormPropsInterface> = (
  props: DepartmentFormPropsInterface,
) => {
  const router: AppRouterInstance = useRouter();
  const isUpdating = !!props.department;
  const validationSchema = isUpdating
    ? UpdateDepartmentDto
    : CreateDepartmentDto;
  const { control, handleSubmit, reset } = useForm<DepartmentFormType>({
    resolver: classValidatorResolver(validationSchema),
    defaultValues: props.department,
  });

  const onSubmit = async (data: DepartmentFormType): Promise<void> => {
    await upsertApi<DepartmentFormType>(
      'departments',
      instanceToPlain(data) as DepartmentFormType,
      props.department?.id,
    );
    reset();
    router.replace('/departments');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Item label={'სახელი'}>
          <ControlledInput name={'name'} type={'text'} control={control} />
        </Form.Item>
        <Form.Item label={'მენეჯერი'}>
          <ControlledInput name={'manager'} type={'text'} control={control} />
        </Form.Item>
        <Form.Item label={'ლოკაცია'}>
          <ControlledInput name={'location'} type={'text'} control={control} />
        </Form.Item>
        <Button htmlType={'submit'}>
          {isUpdating ? 'განახლება' : 'დამატება'}
        </Button>
      </form>
    </div>
  );
};

export default DepartmentForm;
