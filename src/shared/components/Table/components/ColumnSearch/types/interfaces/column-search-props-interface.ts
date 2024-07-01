import { FilterDropDownInterface } from '@/src/shared/components/Table/types/interfaces/filter-drop-down.interface';

export interface ColumnSearchPropsInterface extends FilterDropDownInterface {
  dataIndex: string;
  handleReset: (clearFilters: () => void, dataIndex: string) => void;
  handleSearch: (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: string,
    value: string | null,
  ) => void;
  value: string | null;
}
