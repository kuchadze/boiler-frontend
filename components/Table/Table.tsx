'use client';

import { Table as AntdTable, Button, Form, Input, TableProps } from 'antd';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { JSX } from 'react';
import { useSearch } from '@/components/Table/hooks/useSearch';
import { AntColumnInterface } from '@/components/Table/interfaces/ant-column.interface';
import { sortObjectMaps } from '@/components/Table/utils/sort-objects.map';
import { useQuery } from '@/hooks/useQuery/useQuery';

interface Props<T> {
  dataSource: T;
  count: number;
  limit: number;
  columns: AntColumnInterface[];
}

export default function Table<T>(props: Props<T>): JSX.Element {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const { applySearchForColumns } = useSearch();
  const { sort, paginate } = useQuery<T>();

  const columns: AntColumnInterface[] = applySearchForColumns(props.columns);

  const onFinish: ({ search }: { search: string }) => void = ({
    search,
  }: {
    search: string;
  }) => {
    const params: URLSearchParams = new URLSearchParams(
      searchParams.toString(),
    );
    for (const item of columns) {
      if (search) {
        params.append(item.dataIndex, search);
      } else {
        params.delete(item.dataIndex);
      }
    }
    router.push(`?${params.toString()}`);
  };

  const onChange: TableProps['onChange'] = (pagination, filters, sorter) => {
    const { order, field } = sorter as {
      order: 'ascend' | 'descend';
      field: string;
    };
    const { pageSize } = pagination;
    sort(field as keyof T, sortObjectMaps[order]);
    paginate(pageSize ?? props.limit, pagination.current);
  };

  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item name={'search'}>
          <Input />
        </Form.Item>
        <Button htmlType={'submit'}>Submit</Button>
      </Form>
      <AntdTable
        columns={columns}
        dataSource={props.dataSource as []}
        onChange={onChange}
        showSorterTooltip={{ target: 'sorter-icon' }}
        pagination={{
          defaultPageSize: props.limit,
          total: props.count,
          current:
            parseInt(searchParams.get('offset') ?? '0') / props.limit + 1,
        }}
      />
    </div>
  );
}
