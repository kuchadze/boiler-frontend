import { Input } from 'antd';
import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface ControlledInputPropsInterface {
  name: string;
  type: string;
  control: Control<FieldValues>;
}

const ControlledInput: FC<ControlledInputPropsInterface> = (
  props: ControlledInputPropsInterface,
) => {
  return (
    <Controller
      render={({ field }) => <Input {...field} />}
      name={props.name}
      control={props.control}
    />
  );
};

export default ControlledInput;
