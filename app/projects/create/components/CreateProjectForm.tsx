'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Form, Input } from 'antd';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { JSX, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { upsertApi } from '@/app/Api/crud-operations';
import { ProjectSchemaInterface } from '@/app/projects/create/interfaces/project-schema.interface';
import { ProjectSchema } from '@/app/projects/create/schemas/project.schema';
import { ProjectInterface } from '@/app/projects/interfaces/project.interface';

const CreateProjectForm = (props: {
  id: number;
  project: ProjectInterface;
}): JSX.Element => {
  const { control, handleSubmit, reset } = useForm<ProjectSchema>({
    resolver: classValidatorResolver(ProjectSchema),
  });
  const isUpdating: boolean = !!(props.project && props.id);
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    if (isUpdating && props.project) {
      reset(props.project);
    }
  }, [isUpdating, props.project, reset]);

  const onSubmit = async (data: ProjectSchema): Promise<void> => {
    await upsertApi<ProjectSchemaInterface>(
      'projects',
      data.toPlain(),
      props.id,
    );
    reset();
    router.replace('/projects');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item label={'სახელი'}>
        <Controller
          name={'name'}
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label={'აღწერა'}>
        <Controller
          name={'description'}
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label={'ბიუჯეტი'}>
        <Controller
          name={'budget'}
          control={control}
          render={({ field }) => <Input type={'number'} {...field} />}
        />
      </Form.Item>
      <Form.Item label={'სტატუსი'}>
        <Controller
          name={'status'}
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Button htmlType={'submit'}>{props.id ? 'განახლება' : 'დამატება'}</Button>
    </form>
  );
};

export default CreateProjectForm;
