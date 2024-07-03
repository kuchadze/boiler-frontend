import { AntSortDirectionEnum } from '@/src/shared/components/Table/types/enums/ant-sort-direction.enum';
import { SortDirectionEnum } from '@/src/shared/types/enums/sort-direction.enum';

type SortObjectsMap = { [key: string]: SortDirectionEnum };

export const sortObjectMaps: SortObjectsMap = {
  [AntSortDirectionEnum.Ascend]: SortDirectionEnum.ASC,
  [AntSortDirectionEnum.Descend]: SortDirectionEnum.DESC,
};
