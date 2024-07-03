import { AntColumnInterface } from '@/src/shared/components/Table/types/interfaces/ant-column.interface';

export type ApplySearchForColumnsType<T> = (
  columns: AntColumnInterface<T>[],
) => {
  search: boolean;
  sorter: boolean;
  dataIndex: string;
  title: string;
  key: string | number;
}[];
