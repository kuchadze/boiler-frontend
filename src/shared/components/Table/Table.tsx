'use client';
import {
  Button,
  Form,
  Input,
  Table as AntdTable,
  TablePaginationConfig,
  TableProps,
} from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ColumnsType } from 'antd/es/table';
import { SorterResult } from 'antd/lib/table/interface';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { JSX } from 'react';
import { useSearch } from '@/src/shared/components/Table/hooks/useSearch';
import { AntColumnInterface } from '@/src/shared/components/Table/types/interfaces/ant-column.interface';
import { TablePropsInterface } from '@/src/shared/components/Table/types/interfaces/table-props.interface';
import { sortObjectMaps } from '@/src/shared/components/Table/utils/sort-objects.map';
import { useQuery } from '@/src/shared/hooks/useQuery/useQuery';

export default function Table<T>(props: TablePropsInterface<T>): JSX.Element {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const { applySearchForColumns, applyGlobalSearch } = useSearch<T>(
    props.columns,
  );
  const { sort, paginate } = useQuery<T>();
  const columns: AntColumnInterface<T>[] = applySearchForColumns();

  const onFinish = (data: { search: string }): void => {
    applyGlobalSearch(data.search);
  };

  const onChange: TableProps['onChange'] = (pagination, filters, sorter) => {
    const { order, field } = sorter as SorterResult<T>;
    const { pageSize } = pagination;
    sort(field as keyof T, sortObjectMaps[order as string]);
    paginate(pageSize ?? props.limit, pagination['current']);
  };

  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item name="search">
          <Input />
        </Form.Item>
        <Button htmlType={'submit'}>Submit</Button>
      </Form>
      <AntdTable
        columns={columns as ColumnsType<AnyObject>}
        dataSource={props.dataSource as []}
        rowKey={'id'}
        onChange={onChange}
        showSorterTooltip={{ target: 'sorter-icon' }}
        pagination={
          {
            defaultPageSize: props.limit,
            total: props.count,
            current:
              parseInt(searchParams.get('offset') ?? '0') / props.limit + 1,
          } as TablePaginationConfig
        }
      />
    </div>
  );
}
