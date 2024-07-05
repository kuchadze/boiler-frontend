import { ColumnType } from 'antd/es/table';

export interface AntColumnInterface<T> extends ColumnType<T> {
  search?: boolean;
  sorter?: boolean;
  globalSearch?: boolean;
  dataIndex?: string;
}
