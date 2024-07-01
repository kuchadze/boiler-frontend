import { DataInterface } from '@/src/shared/api/get-function';

export interface ResponseInterface<T> {
  body: DataInterface<T>;
  status: number;
  ok: boolean;
}
