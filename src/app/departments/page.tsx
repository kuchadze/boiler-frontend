import { DepartmentModel } from '@novatoriteam/validators';
import { JSX } from 'react';
import styles from './DepartmentsPage.module.scss';
import { departmentTableColumns } from '@/src/app/departments/utils/department-table.columns';
import { get } from '@/src/shared/api/get-function';
import Table from '@/src/shared/components/Table/Table';

const DepartmentsPage = async (props: {
  searchParams: { [key: string]: string };
}): Promise<JSX.Element> => {
  const limit: number = parseInt(props.searchParams.limit || '5', 10);
  const offset: number = parseInt(props.searchParams.offset || '0', 10);

  const departments = await get<DepartmentModel[]>({
    url: 'departments',
    queryParameters: {
      ...props.searchParams,
      limit,
      offset,
    },
  });

  return (
    <div className={styles.container}>
      <Table<DepartmentModel[]>
        resource={'departments'}
        dataSource={departments.data}
        count={departments.count}
        limit={5}
        columns={departmentTableColumns}
      />
    </div>
  );
};

export default DepartmentsPage;
