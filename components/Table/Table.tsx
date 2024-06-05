"use client";
import { Button, Form, Input, Table as AntdTable, TableProps } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSearch } from "@/components/Table/hooks/useSearch";
import { AntColumnInterface } from "@/components/Table/interfaces/ant-column.interface";
import { useQuery } from "@/hooks/useQuery";
import { sortObjectMaps } from "@/components/Table/utils/sort-objects.map";
import {ProductInterface} from "@/app/products/page";

interface Props {
  dataSource: any;
  count: number;
  limit: number;
  columns: AntColumnInterface[];
}

export default function Table<T>(props: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { applySearchForColumns } = useSearch();
  const { sort, paginate } = useQuery<T>();

  const columns = applySearchForColumns(props.columns);

  const onFinish = ({ search }: { search: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    for (const item of columns) {
      if (search) {
        params.append(item.dataIndex, search);
      } else {
        params.delete(item.dataIndex);
      }
    }
    router.push(`?${params.toString()}`);
  };

  const onChange: TableProps["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    const { order, field } = sorter as {
      order: "ascend" | "descend";
      field: string;
    };
    const { pageSize } = pagination;
    sort(field as keyof T, sortObjectMaps[order]);
    paginate(pageSize ?? props.limit, pagination.current);
  };

  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item name={"search"}>
          <Input />
        </Form.Item>
        <Button htmlType={"submit"}>Submit</Button>
      </Form>
      <AntdTable
        columns={columns}
        dataSource={props.dataSource}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={{
          defaultPageSize: props.limit,
          total: props.count,
          current:
            parseInt(searchParams.get("offset") ?? "0") / props.limit + 1,
        }}
      />
    </div>
  );
}
