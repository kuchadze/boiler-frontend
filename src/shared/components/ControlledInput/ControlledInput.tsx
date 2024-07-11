import { Input } from 'antd';
import { JSX } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface ControlledInputPropsInterface<T extends FieldValues> {
  name: string;
  type: string;
  control: Control<T>;
}

function ControlledInput<T extends FieldValues>(
  props: ControlledInputPropsInterface<T>,
): JSX.Element {
  return (
    <Controller
      render={({ field }) => <Input {...field} />}
      name={props.name as Path<T>}
      control={props.control}
    />
  );
}

export default ControlledInput;
