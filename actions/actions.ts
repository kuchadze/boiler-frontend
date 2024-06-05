"use server";
import { create } from "./login";

export const onSubmit = async (values: any) => {
  const request = await create<any>("users", values);
};
