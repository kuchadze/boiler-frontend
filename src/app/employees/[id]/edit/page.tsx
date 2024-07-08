import { EmployeeModel } from '@novatoriteam/validators';
import { FC } from 'react';
import EmployeeForm from '@/src/app/employees/forms/EmployeeForm';
import { get } from '@/src/shared/api/get-function';
import { IdParamInterface } from '@/src/shared/types/interfaces/id-param.interface';

const EditEmployeePage: FC<IdParamInterface> = async (
  props: IdParamInterface,
) => {
  const employee = await get<EmployeeModel>(
    {
      url: 'employees',
    },
    props.params.id,
  );

  return <EmployeeForm employee={employee.data} />;
};

export default EditEmployeePage;
