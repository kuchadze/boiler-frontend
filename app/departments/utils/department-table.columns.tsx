'use client';
import { AntColumnInterface } from '@/app/Components/Table/interfaces/ant-column.interface';
import { DepartmentTableDataSourceInterface } from '@/app/departments/interfaces/department-table-data-source.interface';

export const departmentTableColumns: AntColumnInterface<
  DepartmentTableDataSourceInterface[]
>[] = [
  {
    title: 'სახელი',
    dataIndex: 'name',
    key: 'name',
    search: true,
    sorter: true,
    globalSearch: true,
  },
  {
    title: 'მენეჯერი',
    dataIndex: 'manager',
    key: 'manager',
    search: true,
    sorter: true,
    globalSearch: true,
  },
  {
    title: 'ლოკაცია',
    dataIndex: 'location',
    key: 'location',
    search: true,
    sorter: true,
    globalSearch: true,
  },
];
