import { SortDirectionEnum } from '@/enums/sort-direction.enum';

export type SortType<TKeys> = (key: TKeys, value?: SortDirectionEnum) => void;
