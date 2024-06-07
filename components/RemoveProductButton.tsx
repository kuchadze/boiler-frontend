'use client'
import { Button } from "antd";
import { remove } from "@/api/crud-operations";

export default function RemoveProductButton(props: { id: number }) {
  return (
    <Button onClick={async () => await remove("products", props.id)}>წაშლა</Button>
  );
}
