import { baseFetch, generateUrl } from "@/api/base-fetch";
import { QueriesInterface } from "@/api/interfaces/query-params.interface";

export interface DataInterface<T> {
  status: number;
  data: T;
  count: T extends Array<any> ? number : never;
}

export interface GetDataArguments<T> {
  url: string;
  id?: number;
  queryParameters?: QueriesInterface<T>;
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
  try {
    const { url, subResource, queryParameters } = data;
    const response = await baseFetch(
      generateUrl({ url, id, subResource, queryParameters }),
      {
        method: "GET",
        next: {
          tags: [url],
        },
      },
    );

    if (id) return (await response.json()) as Promise<DataInterface<T>>;
    else return (await response.json()) as Promise<DataInterface<T[]>>;
  } catch (err) {
    throw err;
  }
}
