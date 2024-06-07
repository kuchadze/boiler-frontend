"use client";
import styles from "./ProductForm.module.css";
import { Button, Form, Input } from "antd";
import { upsert } from "@/api/crud-operations";
import { useRouter } from "next/navigation";

export default function ProductForm(props: { id?: number }) {
  const router = useRouter();

  const onSubmit = async (values: any) => {
    const response = await upsert(
      "products",
      { ...values, userId: 1 },
      props.id,
    );

    if (response.ok) {
      router.push("/products");
    }
  };

  return (
    <div className={styles.main}>
      <Form onFinish={async (values) => await onSubmit(values)}>
        <Form.Item name={"name"} label={"სახელი"}>
          <Input />
        </Form.Item>
        <Button htmlType={"submit"}>{props.id ? "განახლება" : "შექმნა"}</Button>
      </Form>
    </div>
  );
}
