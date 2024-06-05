import { useRouter, useSearchParams } from "next/navigation";
import { SortDirectionEnum } from "@/enums/sort-direction.enum";

export const useQuery = <T, TKeys = keyof T>() => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sort = (key: TKeys, value?: SortDirectionEnum) => {
    const doesKeyExistsInSearchParams = searchParams.get(String(key));
    const params = new URLSearchParams(searchParams.toString());
    if (key && value && !doesKeyExistsInSearchParams) {
      params.set(`sort[${String(key)}]`, value);
    } else {
      params.delete(`sort[${String(key)}]`, value);
    }
    router.push(`?${params.toString()}`);
  };

  const search = (key: TKeys, value?: string) => {
    const doesKeyExistsInSearchParams = searchParams.get(String(key));
    const params = new URLSearchParams(searchParams.toString());
    if (key && value && !doesKeyExistsInSearchParams) {
      params.set(`search[${String(key)}]`, value);
    } else {
      params.delete(`search[${String(key)}]`, value);
    }
    router.push(`?${params.toString()}`);
  };

  const filter = (key: TKeys, value?: string) => {
    const doesKeyExistsInSearchParams = searchParams.get(String(key));
    const params = new URLSearchParams(searchParams.toString());
    if (key && value && !doesKeyExistsInSearchParams) {
      params.set(`filter[${String(key)}]`, value);
    } else {
      params.delete(`filter[${String(key)}]`, value);
    }
    router.push(`?${params.toString()}`);
  };

  const paginate = (limit: number, page?: number) => {
    const params = new URLSearchParams(searchParams.toString());
    console.log(searchParams.toString(), 'params');
    const offSet = ((page ?? 1) - 1) * limit;

    params.set("limit", String(limit));
    params.set("offset", String(offSet));

    router.push(`?${params.toString()}`);
  };

  return { paginate, sort, search, filter };
};
