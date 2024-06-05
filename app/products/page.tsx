import { get } from "@/api/get-function";
import styles from "./page.module.css";
import Table from "@/components/Table/Table";
import * as qs from "qs";
import { AntColumnInterface } from "@/components/Table/interfaces/ant-column.interface";

export interface ProductInterface {
  id: number;
  name: string;
  userId: number;
  price: string;
  shop: string;
}

export default async function ProductsPage(props: {
  searchParams: { [key: string]: string };
}) {
  const products = await get<ProductInterface>({
    url: "products",
    queryParameters: props.searchParams,
  });

  const dataSource = products.data.map((product) => ({
    key: product.id,
    name: product.name,
    price: product.price,
    shop: product.shop,
  }));

  const columns: AntColumnInterface[] = [
    {
      title: "სახელი",
      dataIndex: "name",
      key: "name",
      search: true,
      sorter: true,
    },
    {
      title: "ფასი",
      dataIndex: "price",
      key: "price",
      search: true,
      sorter: true,
    },
    {
      title: "მაღაზია",
      dataIndex: "shop",
      key: "shop",
      search: true,
      sorter: true,
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <Table<ProductInterface>
          dataSource={dataSource}
          count={products.count}
          columns={columns}
          limit={4}
        />
      </div>
    </div>
  );
}
