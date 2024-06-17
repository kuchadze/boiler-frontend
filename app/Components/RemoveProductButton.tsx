'use client';
import { Button } from 'antd';
import { JSX } from 'react';
import { removeApi } from '@/app/Api/crud-operations';

export default function RemoveProductButton(props: {
  id: number;
}): JSX.Element {
  return (
    <Button onClick={async () => await removeApi('products', props.id)}>
      წაშლა
    </Button>
  );
}
