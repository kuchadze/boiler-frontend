import { cookies } from 'next/headers';
import * as qs from 'qs';
import { BaseFetchType } from '@/src/shared/api/types/base-fetch.type';
import { GenerateUrlType } from '@/src/shared/api/types/generate-url.type';
import { GenerateUrlArguments } from '@/src/shared/api/types/interfaces/generate-url-arguments.interface';
import { apiConfig } from '@/src/shared/config/config';

export const baseFetch: BaseFetchType = async (
  url: string,
  data: RequestInit,
) => {
  const accessToken: string | undefined = cookies().get('accessToken')?.value;
  const refreshToken: string | undefined = cookies().get('refreshToken')?.value;

  const tokens = `accessToken=${accessToken}; refreshToken=${refreshToken}`;

  return await fetch(`${apiConfig.rootApiUrl}/${url}`, {
    ...data,
    headers: {
      ...data.headers,
      'Content-Type': 'application/json',
      Cookie: tokens,
    },
  });
};

export const generateUrl: GenerateUrlType = <T>(
  data: GenerateUrlArguments<T>,
): string => {
  const { url, subResource, id, queryParameters } = data;
  const urlWithId = `${url}${id ? `/${id}` : ''}${subResource ? `/${subResource}` : ''}`;

  if (queryParameters) {
    const queryString: string = qs.stringify(data.queryParameters, {
      arrayFormat: 'comma',
      encode: false,
    });
    return `${urlWithId}?${queryString}`;
  }

  return urlWithId;
};
