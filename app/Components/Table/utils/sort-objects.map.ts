import { AntSortDirectionEnum } from '@/app/Components/Table/enums/ant-sort-direction.enum';
import { SortDirectionEnum } from '@/app/Enums/sort-direction.enum';

type SortObjectsMap = { [key: string]: SortDirectionEnum };

export const sortObjectMaps: SortObjectsMap = {
  [AntSortDirectionEnum.Ascend]: SortDirectionEnum.ASC,
  [AntSortDirectionEnum.Descend]: SortDirectionEnum.DESC,
};
