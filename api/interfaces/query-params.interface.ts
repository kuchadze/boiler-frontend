import { SortDirectionEnum } from "@/enums/sort-direction.enum";

export interface QueriesInterface<T, TKeys = keyof T> {
  sort?: Partial<{ [key in keyof T]: SortDirectionEnum }>;
  filter?: Partial<T>;
  relations?: Array<TKeys>;
  [key: string]: any;
}
