import { ResponseInterface } from '@/app/Api/interfaces/response.interface';

export type CreateType = <T>(
  url: string,
  body: T,
  subResource?: string,
) => Promise<ResponseInterface<T>>;
