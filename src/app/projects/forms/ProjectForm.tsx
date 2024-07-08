'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { CreateProjectDto, UpdateProjectDto } from '@novatoriteam/validators';
import { Button, Form, Input } from 'antd';
import { instanceToPlain } from 'class-transformer';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './ProjectForm.module.scss';
import { ProjectFormPropsInterface } from '@/src/app/projects/types/interfaces/project-form-props.interface';
import { ProjectFormType } from '@/src/app/projects/types/project-form.type';
import { upsertApi } from '@/src/shared/api/crud-operations';

const ProjectForm = (props: ProjectFormPropsInterface): JSX.Element => {
  const router: AppRouterInstance = useRouter();
  const isUpdating = !!props.project;
  const validationSchema = isUpdating ? UpdateProjectDto : CreateProjectDto;
  const { control, handleSubmit, reset } = useForm<ProjectFormType>({
    resolver: classValidatorResolver(validationSchema),
    defaultValues: props.project as ProjectFormType,
  });

  const onSubmit = async (data: ProjectFormType): Promise<void> => {
    await upsertApi<ProjectFormType>(
      'projects',
      instanceToPlain(data) as ProjectFormType,
      props.project?.id,
    );
    reset();
    router.replace('/projects');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Item label={'სახელი'}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label={'აღწერა'}>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label={'ბიუჯეტი'}>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => <Input type={'number'} {...field} />}
          />
        </Form.Item>
        <Form.Item label={'სტატუსი'}>
          <Controller
            name="status"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Button htmlType={'submit'}>
          {isUpdating ? 'განახლება' : 'დამატება'}
        </Button>
      </form>
    </div>
  );
};

export default ProjectForm;
