"use client";
import { Button, Input, TableProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter, useSearchParams } from "next/navigation";
import {AntColumnInterface} from "@/components/Table/interfaces/ant-column.interface";

export const useSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: string,
  ) => {
    confirm();
    const params = new URLSearchParams(searchParams.toString());
    if (selectedKeys[0]) {
      params.set(`search[${dataIndex}]`, selectedKeys[0]);
    } else {
      params.delete(`search[${dataIndex}]`);
    }
    router.push(`?${params.toString()}`);
  };

  const handleReset = (clearFilters: () => void, dataIndex: string) => {
    clearFilters();
    const params = new URLSearchParams(searchParams.toString());
    params.delete(`search[${dataIndex}]`);
    router.push(`?${params.toString()}`);
  };

  const getColumnSearchProps = (dataIndex: string): any => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters, dataIndex)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
  });

  const getSearchParams = () => {};

  function applySearchForColumns<T>(columns: AntColumnInterface[]) {
    const updatedColumns = columns?.map((column) => {
      const data = { ...column };

      if (column.search) {
        Object.assign(data, { ...getColumnSearchProps(column?.dataIndex) });
      }

      return data;
    });

    return updatedColumns;
  }

  return { applySearchForColumns };
};
