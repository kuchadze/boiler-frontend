'use client';
import { Button, Form, Input, Table as AntdTable, TableProps } from 'antd';
import { ColumnType } from 'antd/es/table';
import { SorterResult } from 'antd/lib/table/interface';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { JSX } from 'react';
import { removeApi } from '@/app/Api/crud-operations';
import { useSearch } from '@/app/Components/Table/hooks/useSearch';
import { AntColumnInterface } from '@/app/Components/Table/interfaces/ant-column.interface';
import { TablePropsInterface } from '@/app/Components/Table/interfaces/table-props.interface';
import { sortObjectMaps } from '@/app/Components/Table/utils/sort-objects.map';
import { useQuery } from '@/app/Hooks/useQuery/useQuery';

export default function Table<T>(props: TablePropsInterface<T>): JSX.Element {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const { applySearchForColumns, applyGlobalSearch } = useSearch<T>(
    props.columns,
  );
  const { sort, paginate } = useQuery<T>();
  const columns: AntColumnInterface<T>[] = applySearchForColumns();

  columns.push(
    {
      title: 'განახლება',
      render: (data) => {
        return (
          <div
            onClick={() =>
              router.push(`${props.resource}/create?id=${data.id}`)
            }
          >
            განახლება
          </div>
        );
      },
    },
    {
      title: 'წაშლა',
      render: (data) => {
        return (
          <div onClick={async () => await removeApi(props.resource, data.id)}>
            წაშლა
          </div>
        );
      },
    },
  );

  const onFinish = (data: { search: string }): void => {
    applyGlobalSearch(data.search);
  };

  const onChange: TableProps['onChange'] = (pagination, filters, sorter) => {
    const { order, field } = sorter as SorterResult<T>;
    const { pageSize } = pagination;
    sort(field as keyof T, sortObjectMaps[order as string]);
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
        columns={columns as ColumnType<T>[]}
        dataSource={props.dataSource as []}
        rowKey={'id'}
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
