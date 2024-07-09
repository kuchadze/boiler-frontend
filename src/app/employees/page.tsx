import { EmployeeModel } from '@novatoriteam/validators';
import { FC } from 'react';
import styles from './EmployeesPage.module.scss';
import { employeeTableColumns } from '@/src/app/employees/utils/employee-table.columns';
import { get } from '@/src/shared/api/get-function';
import Table from '@/src/shared/components/Table/Table';
import { SearchParamsInterface } from '@/src/shared/types/interfaces/search-params.interface';

const EmployeesPage: FC<SearchParamsInterface> = async (
  props: SearchParamsInterface,
) => {
  const employees = await get<EmployeeModel[]>({
    url: 'employees',
    queryParameters: {
      limit: 5,
      offset: 0,
      ...props.searchParams,
    },
  });

  return (
    <div className={styles.container}>
      <Table<EmployeeModel[]>
        resource={'departments'}
        dataSource={employees.data}
        count={employees.count}
        limit={5}
        columns={employeeTableColumns}
      />
    </div>
  );
};

export default EmployeesPage;
