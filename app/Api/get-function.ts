import { baseFetch, generateUrl } from '@/app/Api/base/base-fetch';
import { QueriesType } from '@/app/Api/interfaces/query-params.interface';

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
  // eslint-disable-next-line no-useless-catch
  try {
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

    if (id) return await ((await response.json()) as Promise<DataInterface<T>>);
    else return await ((await response.json()) as Promise<DataInterface<T[]>>);
  } catch (err) {
    throw err;
  }
}