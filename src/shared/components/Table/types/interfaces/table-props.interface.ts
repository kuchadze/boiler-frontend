import { AntColumnInterface } from '@/src/shared/components/Table/types/interfaces/ant-column.interface';

export interface TablePropsInterface<T> {
  dataSource: T;
  count: number;
  limit: number;
  columns: AntColumnInterface<T>[];
  resource: string;
}
