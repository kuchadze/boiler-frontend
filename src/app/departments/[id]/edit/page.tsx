import { DepartmentModel } from '@novatoriteam/validators';
import { FC } from 'react';
import DepartmentForm from '@/src/app/departments/forms/DepartmentForm';
import { get } from '@/src/shared/api/get-function';
import { IdParamInterface } from '@/src/shared/types/interfaces/id-param.interface';

const EditDepartmentPage: FC<IdParamInterface> = async (
  props: IdParamInterface,
) => {
  const department = await get<DepartmentModel>({
    url: 'departments',
    id: props.params.id,
  });

  return <DepartmentForm department={department.data} />;
};

export default EditDepartmentPage;
