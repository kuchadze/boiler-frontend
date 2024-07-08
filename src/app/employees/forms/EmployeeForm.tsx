'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import {
  CreateEmployeeDto,
  EmployeeModel,
  UpdateEmployeeDto,
} from '@novatoriteam/validators';
import { Button, Form } from 'antd';
import { instanceToPlain } from 'class-transformer';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import { useForm } from 'react-hook-form';
import styles from './EmployeeForm.module.scss';
import { EmployeeFormType } from '@/src/app/employees/forms/types/employee-form.type';
import { upsertApi } from '@/src/shared/api/crud-operations';
import ControlledInput from '@/src/shared/components/ControlledInput/ControlledInput';

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
          <ControlledInput name="firstName" control={control} type={'text'} />
        </Form.Item>
        <Form.Item label={'გვარი'}>
          <ControlledInput name="lastName" control={control} type={'text'} />
        </Form.Item>
        <Form.Item label={'მეილი'}>
          <ControlledInput name="email" control={control} type={'email'} />
        </Form.Item>
        <Form.Item label={'ტელეფონის ნომერი'}>
          <ControlledInput name="phoneNumber" control={control} type={'text'} />
        </Form.Item>
        <Form.Item label={'სამსახური'}>
          <ControlledInput name="jobTitle" control={control} type={'text'} />
        </Form.Item>
        <Form.Item label={'ხელფასი'}>
          <ControlledInput name="salary" control={control} type={'text'} />
        </Form.Item>
        <Button htmlType={'submit'}>
          {props.employee ? 'განახლება' : 'დამატება'}
        </Button>
      </form>
    </div>
  );
};

export default EmployeeForm;
