'use client';

import { SearchOutlined } from '@ant-design/icons';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import ColumnSearch from '@/components/Table/ColumnSearch';
import { AntColumnInterface } from '@/components/Table/interfaces/ant-column.interface';
import { FilterDropDownInterface } from '@/components/Table/interfaces/filter-drop-down.interface';

export const useSearch: () => {
  applySearchForColumns: (columns: AntColumnInterface[]) => {
    search: boolean;
    sorter: boolean;
    dataIndex: string;
    title: string;
    key: string | number;
  }[];
} = () => {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const handleSearch: (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: string,
  ) => void = (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: string,
  ) => {
    confirm();
    const params: URLSearchParams = new URLSearchParams(
      searchParams.toString(),
    );
    if (selectedKeys[0]) {
      params.set(`search[${dataIndex}]`, selectedKeys[0]);
    } else {
      params.delete(`search[${dataIndex}]`);
    }
    router.push(`?${params.toString()}`);
  };

  const handleReset: (clearFilters: () => void, dataIndex: string) => void = (
    clearFilters: () => void,
    dataIndex: string,
  ) => {
    clearFilters();
    const params: URLSearchParams = new URLSearchParams(
      searchParams.toString(),
    );
    params.delete(`search[${dataIndex}]`);
    router.push(`?${params.toString()}`);
  };

  function applySearchForColumns(columns: AntColumnInterface[]): {
    title: string;
    dataIndex: string;
    search: boolean;
    key: string | number;
    sorter: boolean;
  }[] {
    const updatedColumns: AntColumnInterface[] = columns?.map((column) => {
      const data: AntColumnInterface = { ...column };

      if (column.search) {
        Object.assign(data, {
          filterDropDown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
          }: FilterDropDownInterface) => (
            <ColumnSearch
              dataIndex={data.dataIndex}
              selectedKeys={selectedKeys}
              setSelectedKeys={setSelectedKeys}
              handleReset={handleReset}
              clearFilters={clearFilters}
              confirm={confirm}
              handleSearch={handleSearch}
            />
          ),
          filterIcon: (filtered: boolean) => (
            <SearchOutlined
              style={{ color: filtered ? '#1890ff' : undefined }}
            />
          ),
        });
      }

      return data;
    });

    return updatedColumns;
  }

  return { applySearchForColumns };
};
