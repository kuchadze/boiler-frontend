"use server";

import { revalidateTag } from "next/cache";
import { baseFetch, generateUrl } from "@/api/base-fetch";

export const create = async <T>(url: string, body: T, subResource?: string) => {
  try {
    const response = await baseFetch(generateUrl({ url, subResource }), {
      method: "POST",
      body: JSON.stringify(body),
    });

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

export const update = async <T>(
  id: number,
  body: T,
  url: string,
  subResource?: string,
) => {
  try {
    const response = await baseFetch(generateUrl({ url, id, subResource }), {
      method: "PUT",
      body: JSON.stringify(body),
    });

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

export const remove = async (url: string, id: number) => {
  try {
    const response = await baseFetch(generateUrl({ url, id }), {
      method: "DELETE",
    });

    revalidateTag(url);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const upsert = async <T>(
  url: string,
  body: T,
  id?: number,
  subResource?: string,
) => {
  try {
    const method = id ? "PUT" : "POST";
    const response = await baseFetch(generateUrl({ url, id, subResource }), {
      method,
      body: JSON.stringify(body),
    });

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
