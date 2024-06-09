'use server';
import { revalidateTag } from 'next/cache';
import { baseFetch, generateUrl } from '@/api/base/base-fetch';

export const create: <T>(
  url: string,
  body: T,
  subResource?: string,
) => Promise<{ body: T; status: number; ok: boolean }> = async <T>(
  url: string,
  body: T,
  subResource?: string,
) => {
  try {
    const response: Response = await baseFetch(
      generateUrl({ url, subResource }),
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
    );

    revalidateTag(url);
    return {
      body: await response.json(),
      status: response.status,
      ok: response.ok,
    };
  } catch (err) {
    throw err;
  }
};

export const update: <T>(
  id: number,
  body: T,
  url: string,
  subResource?: string,
) => Promise<{ body: T; status: number; ok: boolean }> = async <T>(
  id: number,
  body: T,
  url: string,
  subResource?: string,
) => {
  try {
    const response: Response = await baseFetch(
      generateUrl({ url, id, subResource }),
      {
        method: 'PUT',
        body: JSON.stringify(body),
      },
    );

    revalidateTag(url);
    return {
      body: await response.json(),
      status: response.status,
      ok: response.ok,
    };
  } catch (err) {
    throw err;
  }
};

export const remove: (url: string, id: number) => Promise<unknown> = async (
  url: string,
  id: number,
) => {
  try {
    const response: Response = await baseFetch(generateUrl({ url, id }), {
      method: 'DELETE',
    });

    revalidateTag(url);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const upsert: <T>(
  url: string,
  body: T,
  id?: number,
  subResource?: string,
) => Promise<{
  body: T;
  status: number;
  ok: boolean;
}> = async <T>(url: string, body: T, id?: number, subResource?: string) => {
  try {
    const method: 'POST' | 'PUT' = id ? 'PUT' : 'POST';
    const response: Response = await baseFetch(
      generateUrl({ url, id, subResource }),
      {
        method,
        body: JSON.stringify(body),
      },
    );

    revalidateTag(url);
    return {
      body: await response.json(),
      status: response.status,
      ok: response.ok,
    };
  } catch (err) {
    throw err;
  }
};
