import { ResponseInterface } from '@/app/Api/interfaces/response.interface';

export type UpdateType = <T>(
  id: number,
  body: T,
  url: string,
  subResource?: string,
) => Promise<ResponseInterface<T>>;
