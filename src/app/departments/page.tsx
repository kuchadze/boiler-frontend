import { DepartmentModel } from '@novatoriteam/validators';
import { FC } from 'react';
import styles from './DepartmentsPage.module.scss';
import { departmentTableColumns } from '@/src/app/departments/utils/department-table.columns';
import { get } from '@/src/shared/api/get-function';
import Table from '@/src/shared/components/Table/Table';
import { SearchParamsInterface } from '@/src/shared/types/interfaces/search-params.interface';

const DepartmentsPage: FC<SearchParamsInterface> = async (
  props: SearchParamsInterface,
) => {
  const departments = await get<DepartmentModel[]>({
    url: 'departments',
    queryParameters: {
      limit: 5,
      offset: 0,
      ...props.searchParams,
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
