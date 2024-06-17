import { DataInterface } from '@/app/Api/get-function';

export interface ResponseInterface<T> {
  body: DataInterface<T>;
  status: number;
  ok: boolean;
}
