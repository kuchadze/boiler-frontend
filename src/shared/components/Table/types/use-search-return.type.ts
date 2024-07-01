import { AntColumnInterface } from '@/src/shared/components/Table/types/interfaces/ant-column.interface';

export type UseSearchReturnType<T> = {
  applyGlobalSearch: (search: string) => void;
  applySearchForColumns: () => AntColumnInterface<T>[];
};
