export interface FilterDropDownInterface {
  setSelectedKeys: (values: string[] | string) => void;
  selectedKeys: string[];
  confirm: () => void;
  clearFilters: () => void;
}
