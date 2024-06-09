import * as qs from 'qs';
import { GenerateUrlArguments } from '@/api/interfaces/generate-url-arguments.interface';
import { BaseFetchType } from '@/api/types/base-fetch.type';
import { GenerateUrlType } from '@/api/types/generate-url.type';

export const baseFetch: BaseFetchType = async (
  url: string,
  data: RequestInit,
) => {
  return await fetch(`http://localhost:3001/${url}`, {
    ...data,
    headers: {
      ...data.headers,
      'Content-Type': 'application/json',
    },
  });
};

export const generateUrl: GenerateUrlType = <T>(
  data: GenerateUrlArguments<T>,
): string => {
  const { url, subResource, id, queryParameters } = data;
  const urlWithId: string = `${url}${id ? `/${id}` : ''}${subResource ? `/${subResource}` : ''}`;

  if (queryParameters) {
    const queryString: string = qs.stringify(data.queryParameters, {
      arrayFormat: 'comma',
      encode: false,
    });
    return `${urlWithId}?${queryString}`;
  }

  return urlWithId;
};
