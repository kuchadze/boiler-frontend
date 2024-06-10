import { SortDirectionEnum } from '@/app/Enums/sort-direction.enum';

export type SortType<TKeys> = (key: TKeys, value?: SortDirectionEnum) => void;
