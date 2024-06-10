import { JSX } from 'react';
import styles from './page.module.css';
import { DataInterface, get } from '@/app/Api/get-function';
import { QueriesType } from '@/app/Api/interfaces/query-params.interface';
import Table from '@/app/Components/Table/Table';
import { AntColumnInterface } from '@/app/Components/Table/interfaces/ant-column.interface';
import { ProductInterface } from '@/app/interfaces/product.interface';
import { ProductTableDataSourceInterface } from '@/app/products/create/interfaces/product-table-data-source.interface';

export default async function ProductsPage(props: {
  searchParams: { [key: string]: string };
}): Promise<JSX.Element> {
  const products: DataInterface<ProductInterface[]> =
    await get<ProductInterface>({
      url: 'products',
      queryParameters: props.searchParams as QueriesType<ProductInterface>,
    });

  const dataSource: ProductTableDataSourceInterface[] = products.data.map(
    (product: ProductInterface) => ({
      id: product.id,
      key: product.id,
      name: product.name,
      price: product.price,
      shop: product.shop,
    }),
  );

  const columns: AntColumnInterface[] = [
    {
      title: 'სახელი',
      dataIndex: 'name',
      key: 'name',
      search: true,
      sorter: true,
    },
    {
      title: 'ფასი',
      dataIndex: 'price',
      key: 'price',
      search: true,
      sorter: true,
    },
    {
      title: 'მაღაზია',
      dataIndex: 'shop',
      key: 'shop',
      search: true,
      sorter: true,
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <Table<ProductTableDataSourceInterface[]>
          dataSource={dataSource}
          count={products.count}
          columns={columns}
          limit={4}
        />
      </div>
    </div>
  );
}
