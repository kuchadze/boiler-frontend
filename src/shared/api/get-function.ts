import { baseFetch, generateUrl } from '@/src/shared/api/base/base-fetch';
import { QueriesType } from '@/src/shared/api/types/interfaces/query-params.interface';

export interface DataInterface<T> {
  status: number;
  data: T;
  count: T extends [] ? number : never;
}

export interface GetDataArguments<T> {
  url: string;
  id?: number;
  queryParameters?: QueriesType<T>;
  subResource?: string;
}

export async function get<T>(
  data: GetDataArguments<T>,
): Promise<DataInterface<T[]>>;
export async function get<T>(
  data: GetDataArguments<T>,
  id?: number,
): Promise<DataInterface<T>>;

export async function get<T>(
  data: GetDataArguments<T>,
  id?: number,
): Promise<DataInterface<T> | DataInterface<T[]>> {
  const { url, subResource, queryParameters } = data;
  const response: Response = await baseFetch(
    generateUrl({ url, id, subResource, queryParameters }),
    {
      method: 'GET',
      next: {
        tags: [url],
      },
    },
  );

  return await response.json();
}
