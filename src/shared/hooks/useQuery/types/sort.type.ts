import { SortDirectionEnum } from '@/src/shared/types/enums/sort-direction.enum';

export type SortType<TKeys> = (key: TKeys, value?: SortDirectionEnum) => void;
