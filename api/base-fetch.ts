import {queryParamsBuilder} from "@/api/query-params-builder";
import {QueriesInterface} from "@/api/interfaces/query-params.interface";

interface GenerateUrlArguments<T> {
  id?: number;
  subResource?: string;
  url: string;
  queryParameters?: QueriesInterface<T>;
}

export const baseFetch = async (
  url: string,
  data: RequestInit,
): Promise<Response> => {
  console.log(url)
  return await fetch(`http://localhost:3001/${url}`, {
    ...data,
    headers: {
      ...data.headers,
      "Content-Type": "application/json",
    },
  });
};

export const generateUrl = <T>(
  data: GenerateUrlArguments<T>,
) => {
  const { url, subResource, id, queryParameters } = data;
  const urlWithId = `${url}${id ? `/${id}` : ""}${subResource ? `/${subResource}` : ""}`;

  if (queryParameters) {
    return queryParamsBuilder(queryParameters, urlWithId);
  }

  return urlWithId;
};



