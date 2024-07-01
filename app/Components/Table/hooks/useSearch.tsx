'use client';
import { SearchOutlined } from '@ant-design/icons';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import ColumnSearch from '@/app/Components/Table/ColumnSearch';
import { AntColumnInterface } from '@/app/Components/Table/interfaces/ant-column.interface';
import { FilterDropDownInterface } from '@/app/Components/Table/interfaces/filter-drop-down.interface';
import { UseSearchReturnType } from '@/app/Components/Table/types/use-search-return.type';

export function useSearch<T>(
  columns: AntColumnInterface<T>[],
): UseSearchReturnType<T> {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const handleSearch = (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: string,
    value: string | null,
  ): void => {
    confirm();
    const params: URLSearchParams = new URLSearchParams(
      searchParams.toString(),
    );
    const searchDataIndex: string = `search[${dataIndex}]`;
    const paramAlreadyExistsInUrl: boolean = params.has(searchDataIndex);

    if (paramAlreadyExistsInUrl) {
      params.delete(searchDataIndex);
    }

    if (selectedKeys[0] || value) {
      params.set(searchDataIndex, selectedKeys[0]);
    } else {
      params.delete(searchDataIndex);
    }
    router.push(`?${params.toString()}`);
  };

  const handleReset = (clearFilters: () => void, dataIndex: string): void => {
    clearFilters();
    const params: URLSearchParams = new URLSearchParams(
      searchParams.toString(),
    );
    params.delete(`search[${dataIndex}]`);
    router.push(`?${params.toString()}`);
  };

  const applySearchForColumns = (): AntColumnInterface<T>[] => {
    return columns.map((column) => {
      const params: URLSearchParams = new URLSearchParams(
        searchParams.toString(),
      );

      if (column.search) {
        const value: string | null = params.get(`search[${column.dataIndex}]`);
        Object.assign(column, {
          filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
          }: FilterDropDownInterface) => (
            <ColumnSearch
              dataIndex={column.dataIndex as string}
              selectedKeys={selectedKeys}
              setSelectedKeys={setSelectedKeys}
              handleReset={handleReset}
              clearFilters={clearFilters}
              confirm={confirm}
              handleSearch={handleSearch}
              value={value}
            />
          ),
          filterIcon: (filtered: boolean) => (
            <SearchOutlined
              style={{ color: filtered || value ? '#1890ff' : undefined }}
            />
          ),
        });
      }

      return column;
    });
  };

  const applyGlobalSearch = (search: string): void => {
    const params: URLSearchParams = new URLSearchParams(
      searchParams.toString(),
    );

    for (const item of columns) {
      const dataIndex: string = `search[${item.dataIndex}]`;
      const isItemGlobalSearchable: boolean = !!item.globalSearch;
      const paramAlreadyExistsInUrl: boolean = params.has(dataIndex);

      if (!isItemGlobalSearchable) {
        continue;
      }

      if (paramAlreadyExistsInUrl) {
        params.delete(dataIndex);
      }

      if (search) {
        params.append(dataIndex, search);
      } else {
        params.delete(dataIndex);
      }
    }
    router.push(`?${params.toString()}`);
  };

  return { applySearchForColumns, applyGlobalSearch };
}
