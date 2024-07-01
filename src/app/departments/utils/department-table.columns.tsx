'use client';

import { DepartmentTableDataSourceInterface } from '@/src/app/departments/interfaces/department-table-data-source.interface';
import { AntColumnInterface } from '@/src/shared/components/Table/types/interfaces/ant-column.interface';

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
