'use client';
import { AntColumnInterface } from '@/app/Components/Table/interfaces/ant-column.interface';
import { ProjectTableDataSourceInterface } from '@/app/projects/interfaces/project-table-data-source.interface';

export const projectTableColumns: AntColumnInterface<
  ProjectTableDataSourceInterface[]
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
    title: 'აღწერა',
    dataIndex: 'description',
    key: 'description',
    search: true,
    sorter: true,
    globalSearch: true,
  },
  {
    title: 'ბიუჯეტი',
    dataIndex: 'budget',
    key: 'budget',
    search: false,
    sorter: true,
    globalSearch: false,
  },
  {
    title: 'სტატუსი',
    dataIndex: 'status',
    key: 'status',
    search: true,
    sorter: true,
    globalSearch: true,
  },
];
