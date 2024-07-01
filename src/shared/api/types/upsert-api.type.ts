import { ResponseInterface } from '@/src/shared/api/types/interfaces/response.interface';

export type UpsertApiType = <T>(
  url: string,
  body: T,
  id?: number,
  subResource?: string,
) => Promise<ResponseInterface<T>>;
