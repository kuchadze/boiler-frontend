import { JSX } from 'react';
import styles from './CreateDepartmentPage.module.scss';
import { DataInterface, get } from '@/app/Api/get-function';
import CreateDepartmentForm from '@/app/departments/create/components/CreateDepartmentForm';
import { DepartmentInterface } from '@/app/departments/interfaces/department.interface';

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
