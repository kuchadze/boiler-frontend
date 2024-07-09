import { baseFetch, generateUrl } from '@/src/shared/api/base/base-fetch';
import { DataInterface } from '@/src/shared/api/types/interfaces/data.interface';
import { GetDataArgumentsInterface } from '@/src/shared/api/types/interfaces/get-data-arguments.interface';

export async function get<T>(
  data: GetDataArgumentsInterface<T>,
): Promise<DataInterface<T>> {
  const { url, subResource, queryParameters, id } = data;
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
