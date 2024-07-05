import { JSX } from 'react';
import styles from './CreateDepartmentPage.module.scss';
import CreateDepartmentForm from '@/src/app/departments/create/forms/CreateDepartmentForm/CreateDepartmentForm';
import { DepartmentInterface } from '@/src/app/departments/types/interfaces/department.interface';
import { DataInterface, get } from '@/src/shared/api/get-function';

const CreateEmployeePage = async (props: {
  searchParams: { id: number };
}): Promise<JSX.Element> => {
  const department: DataInterface<DepartmentInterface> =
    await get<DepartmentInterface>(
      {
        url: 'departments',
      },
      props.searchParams.id,
    );

  return (
    <div className={styles.container}>
      <CreateDepartmentForm
        department={department.data}
        id={props.searchParams.id}
      />
    </div>
  );
};

export default CreateEmployeePage;
