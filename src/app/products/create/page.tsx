import { ComponentType } from 'react';
import ProductForm from '@/src/app/products/create/forms/ProductForm/ProductForm';
import { CreateProductPagePropsInterface } from '@/src/app/products/create/types/interfaces/create-product-page-props.interface';

const CreateProductPage: ComponentType<CreateProductPagePropsInterface> = (
  props: CreateProductPagePropsInterface,
) => {
  return (
    <>
      <ProductForm id={props.searchParams.id} />
    </>
  );
};

export default CreateProductPage;
