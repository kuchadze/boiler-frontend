import { SortOrder } from "antd/es/table/interface";
import { sortObjectMaps } from "@/components/Table/utils/sort-objects.map";

export const useSort = () => {
  const applyParamsForSort = (
    order: SortOrder,
    field: string,
    params: URLSearchParams,
  ) => {

    if (order) {
      params.set(`sort[${field}]`, sortObjectMaps[order]);
    } else {
      params.delete(`sort[${field}]`);
    }
  };

  return { applyParamsForSort };
};
