import { TablePaginationConfig } from "antd";

export const usePagination = () => {
  const applyParamsForPagination = (
    pagination: TablePaginationConfig,
    params: URLSearchParams,
    limit: number,
  ) => {
    if (pagination) {
      params.set("limit", String(pagination.pageSize));
      params.set("offset", String(((pagination?.current ?? 1) - 1) * limit));
    } else {
      params.delete("limit");
      params.delete("offset");
    }
  };

  return { applyParamsForPagination };
};
