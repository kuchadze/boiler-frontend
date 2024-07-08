'use client';
import { EmployeeModel } from '@novatoriteam/validators';
import { AntColumnInterface } from '@/src/shared/components/Table/types/interfaces/ant-column.interface';

export const employeeTableColumns: AntColumnInterface<EmployeeModel[]>[] = [
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
