'use client';
import { DepartmentModel } from '@novatoriteam/validators';
import { AntColumnInterface } from '@/src/shared/components/Table/types/interfaces/ant-column.interface';

export const departmentTableColumns: AntColumnInterface<DepartmentModel[]>[] = [
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
