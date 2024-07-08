import { EmployeeModel } from '@novatoriteam/validators';
import { JSX } from 'react';
import styles from './EmployeesPage.module.scss';
import { employeeTableColumns } from '@/src/app/employees/utils/employee-table.columns';
import { get } from '@/src/shared/api/get-function';
import Table from '@/src/shared/components/Table/Table';

const EmployeesPage = async (props: {
  searchParams: { [key: string]: string };
}): Promise<JSX.Element> => {
  const employees = await get<EmployeeModel[]>({
    url: 'employees',
    queryParameters: {
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
