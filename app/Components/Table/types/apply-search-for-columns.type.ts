import { AntColumnInterface } from '@/app/Components/Table/interfaces/ant-column.interface';

export type ApplySearchForColumnsType = (columns: AntColumnInterface[]) => {
  search: boolean;
  sorter: boolean;
  dataIndex: string;
  title: string;
  key: string | number;
}[];