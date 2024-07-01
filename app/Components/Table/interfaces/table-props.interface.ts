import { AntColumnInterface } from '@/app/Components/Table/interfaces/ant-column.interface';

export interface TablePropsInterface<T> {
  dataSource: T;
  count: number;
  limit: number;
  columns: AntColumnInterface<T>[];
  resource: string;
}
