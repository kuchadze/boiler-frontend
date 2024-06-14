import { ResponseInterface } from '@/app/Api/interfaces/response.interface';

export type UpsertType = <T>(
  url: string,
  body: T,
  id?: number,
  subResource?: string,
) => Promise<ResponseInterface<T>>;
