'use client';
import { ProjectModel } from '@novatoriteam/validators';
import { AntColumnInterface } from '@/src/shared/components/Table/types/interfaces/ant-column.interface';

export const projectTableColumns: AntColumnInterface<ProjectModel[]>[] = [
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
