import { AntColumnInterface } from '@/app/Components/Table/interfaces/ant-column.interface';

export type UseSearchReturnType<T> = {
  applyGlobalSearch: (search: string) => void;
  applySearchForColumns: () => AntColumnInterface<T>[];
};
