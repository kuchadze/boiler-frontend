import { JSX } from 'react';
import styles from './ProjectsPage.module.scss';
import { DepartmentTableDataSourceInterface } from '@/src/app/departments/types/interfaces/department-table-data-source.interface';
import { DepartmentInterface } from '@/src/app/departments/types/interfaces/department.interface';
import { departmentTableColumns } from '@/src/app/departments/utils/department-table.columns';
import { DataInterface, get } from '@/src/shared/api/get-function';
import Table from '@/src/shared/components/Table/Table';

const DepartmentsPage = async (props: {
  searchParams: { [key: string]: string };
}): Promise<JSX.Element> => {
  const limit: number = parseInt(props.searchParams.limit || '5', 10);
  const offset: number = parseInt(props.searchParams.offset || '0', 10);

  const departments: DataInterface<DepartmentInterface[]> =
    await get<DepartmentInterface>({
      url: 'departments',
      queryParameters: {
        ...props.searchParams,
        limit,
        offset,
      },
    });

  const dataSource: DepartmentTableDataSourceInterface[] = departments.data.map(
    (department: DepartmentInterface) => ({
      id: department.id,
      name: department.name,
      location: department.location,
      manager: department.manager,
    }),
  );

  return (
    <div className={styles.container}>
      <Table
        resource={'departments'}
        dataSource={dataSource}
        count={departments.count}
        limit={5}
        columns={departmentTableColumns}
      />
    </div>
  );
};

export default DepartmentsPage;
