import { DataInterface } from '@/src/shared/api/types/interfaces/data.interface';

export interface ResponseInterface<T> {
  body: DataInterface<T>;
  status: number;
  ok: boolean;
}
