import { FilterDropDownInterface } from '@/components/Table/interfaces/filter-drop-down.interface';

export interface ColumnSearchPropsInterface extends FilterDropDownInterface {
  dataIndex: string;
  handleReset: (clearFilters: () => void, dataIndex: string) => void;
  handleSearch: (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: string,
  ) => void;
}
