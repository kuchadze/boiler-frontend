import { JSX } from 'react';
import styles from './EmployeesPage.module.scss';
import { EmployeeTableDataSourceInterface } from '@/src/app/employees/types/interfaces/employee-table-data-source.interface';
import { EmployeeInterface } from '@/src/app/employees/types/interfaces/employee.interface';
import { employeeTableColumns } from '@/src/app/employees/utils/employee-table.columns';
import { DataInterface, get } from '@/src/shared/api/get-function';
import Table from '@/src/shared/components/Table/Table';

const EmployeesPage = async (props: {
  searchParams: { [key: string]: string };
}): Promise<JSX.Element> => {
  const limit: number = parseInt(props.searchParams.limit || '5', 10);
  const offset: number = parseInt(props.searchParams.offset || '0', 10);

  const employees: DataInterface<EmployeeInterface[]> =
    await get<EmployeeInterface>({
      url: 'employees',
      queryParameters: {
        ...props.searchParams,
        limit,
        offset,
      },
    });

  const dataSource: EmployeeTableDataSourceInterface[] = employees.data.map(
    (employees: EmployeeInterface) => ({
      id: employees.id,
      firstName: employees.firstName,
      lastName: employees.lastName,
      phoneNumber: employees.phoneNumber,
      email: employees.email,
      jobTitle: employees.jobTitle,
      salary: employees.salary,
      departmentId: employees.departmentId,
    }),
  );

  return (
    <div className={styles.container}>
      <Table
        resource={'departments'}
        dataSource={dataSource}
        count={employees.count}
        limit={5}
        columns={employeeTableColumns}
      />
    </div>
  );
};

export default EmployeesPage;
