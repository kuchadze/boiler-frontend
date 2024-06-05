import ProductForm from "@/app/products/create/components/forms/ProductForm/ProductForm";

export default function CreateProductPage(props: {
  searchParams: { id?: number };
}) {

    console.log(props.searchParams)
  return (
    <>
      <ProductForm id={props.searchParams.id} />
    </>
  );
}
