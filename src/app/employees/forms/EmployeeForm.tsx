'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import {
  CreateEmployeeDto,
  EmployeeModel,
  UpdateEmployeeDto,
} from '@novatoriteam/validators';
import { Button, Form, Input } from 'antd';
import { instanceToPlain } from 'class-transformer';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './EmployeeForm.module.scss';
import { EmployeeFormType } from '@/src/app/employees/forms/types/employee-form.type';
import { upsertApi } from '@/src/shared/api/crud-operations';

const EmployeeForm = (props: { employee?: EmployeeModel }): JSX.Element => {
  const router: AppRouterInstance = useRouter();
  const isUpdating = !!props.employee;
  const resolverSchema = isUpdating ? UpdateEmployeeDto : CreateEmployeeDto;

  const { control, handleSubmit, reset } = useForm<EmployeeFormType>({
    resolver: classValidatorResolver(resolverSchema),
    defaultValues: props.employee as EmployeeFormType,
  });

  const onSubmit = async (data: EmployeeFormType): Promise<void> => {
    await upsertApi<EmployeeFormType>(
      'employees',
      instanceToPlain(data) as EmployeeFormType,
      props.employee?.id,
    );
    reset();
    router.replace('/employees');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Item label={'სახელი'}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label={'გვარი'}>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label={'მეილი'}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label={'ტელეფონის ნომერი'}>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label={'სამსახური'}>
          <Controller
            name="jobTitle"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label={'ხელფასი'}>
          <Controller
            name="salary"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Button htmlType={'submit'}>
          {props.employee ? 'განახლება' : 'დამატება'}
        </Button>
      </form>
    </div>
  );
};

export default EmployeeForm;
