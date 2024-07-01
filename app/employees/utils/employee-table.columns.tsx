'use client';

import { AntColumnInterface } from '../../Components/Table/interfaces/ant-column.interface';
import { EmployeeTableDataSourceInterface } from '../interfaces/employee-table-data-source.interface';

export const employeeTableColumns: AntColumnInterface<
  EmployeeTableDataSourceInterface[]
>[] = [
  {
    title: 'სახელი',
    dataIndex: 'firstName',
    key: 'firstName',
    search: true,
    sorter: true,
    globalSearch: true,
  },
  {
    title: 'გვარი',
    dataIndex: 'lastName',
    key: 'lastName',
    search: true,
    sorter: true,
    globalSearch: true,
  },
  {
    title: 'მეილი',
    dataIndex: 'email',
    key: 'email',
    search: true,
    sorter: true,
    globalSearch: true,
  },
  {
    title: 'ტელეფონის ნომერი',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'სამსახური',
    dataIndex: 'jobTitle',
    key: 'jobTitle',
  },
  {
    title: 'ხელფასი',
    dataIndex: 'salary',
    key: 'salary',
  },
];
