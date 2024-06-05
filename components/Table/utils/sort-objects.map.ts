import { SortDirectionEnum } from "@/enums/sort-direction.enum";
import { AntSortDirectionEnum } from "@/components/Table/enums/ant-sort-direction.enum";

type SortObjectsMap = { [key: string]: SortDirectionEnum };

export const sortObjectMaps: SortObjectsMap = {
  [AntSortDirectionEnum.Ascend]: SortDirectionEnum.ASC,
  [AntSortDirectionEnum.Descend]: SortDirectionEnum.DESC,
};
