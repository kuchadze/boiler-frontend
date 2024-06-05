import { QueriesInterface } from "@/api/interfaces/query-params.interface";
import * as qs from "qs";

export const queryParamsBuilder = <T>(
  data: QueriesInterface<T>,
  url: string,
) => {
  const queries = qs.parse(data) as QueriesInterface<T>;
  const queryParameters = new URLSearchParams();
  const { sort, filter, relations, search, ...rest } = queries;

  if (sort) {
    for (const key in sort) {
      queryParameters.append(`sort[${key}]`, String(sort[key]));
    }
  }

  if (filter) {
    for (const key in filter) {
      queryParameters.append(`filter[${key}]`, String(filter[key]));
    }
  }

  if (search) {
    for (const key in search) {
      queryParameters.append(`search[${key}]`, String(search[key]));
    }
  }

  if (relations) {
    queryParameters.append(`relation`, relations.join(","));
  }

  if (rest) {
    for (const key in rest) {
      queryParameters.append(`${key}`, String(rest[key]));
    }
  }

  return `${url}?${queryParameters.toString()}`;
};
