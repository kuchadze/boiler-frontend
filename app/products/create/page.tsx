import { ComponentType } from '@/app/Types/component-type';
import ProductForm from '@/app/products/create/components/forms/ProductForm/ProductForm';
import { CreateProductPagePropsInterface } from '@/app/products/create/interfaces/create-product-page-props.interface';

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
