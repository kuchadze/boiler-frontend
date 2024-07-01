'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Form, Input } from 'antd';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { JSX, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { upsertApi } from '@/app/Api/crud-operations';
import { EmployeeSchemaInterface } from '@/app/employees/create/interfaces/employee-schema.interface';
import { EmployeeSchema } from '@/app/employees/create/schemas/employee.schema';
import { EmployeeInterface } from '@/app/employees/interfaces/employee.interface';

const CreateEmployeeForm = (props: {
  id: number;
  employee: EmployeeInterface;
}): JSX.Element => {
  const { control, handleSubmit, reset } = useForm<EmployeeSchema>({
    resolver: classValidatorResolver(EmployeeSchema),
  });
  const isUpdating: boolean = !!(props.employee && props.id);
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    if (isUpdating && props.employee) {
      reset(props.employee);
    }
  }, [isUpdating, props.employee, reset]);

  const onSubmit = async (data: EmployeeSchema): Promise<void> => {
    await upsertApi<EmployeeSchemaInterface>(
      'employees',
      data.toPlain(),
      props.id,
    );
    reset();
    router.replace('/departments');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item label={'სახელი'}>
        <Controller
          name={'firstName'}
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label={'გვარი'}>
        <Controller
          name={'lastName'}
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label={'მეილი'}>
        <Controller
          name={'email'}
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label={'ტელეფონის ნომერი'}>
        <Controller
          name={'phoneNumber'}
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label={'სამსახური'}>
        <Controller
          name={'jobTitle'}
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label={'ხელფასი'}>
        <Controller
          name={'salary'}
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Button htmlType={'submit'}>{props.id ? 'განახლება' : 'დამატება'}</Button>
    </form>
  );
};

export default CreateEmployeeForm;
