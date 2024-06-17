import { ResponseInterface } from '@/app/Api/interfaces/response.interface';

export type CreateType = <T, D>(
  url: string,
  body: T,
  subResource?: string,
) => Promise<ResponseInterface<D>>;
