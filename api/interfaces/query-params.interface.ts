export type QueriesType<T, TKeys extends string | number | symbol = keyof T> =
  | {
      [key in TKeys]: string;
    }
  | Array<TKeys>;
