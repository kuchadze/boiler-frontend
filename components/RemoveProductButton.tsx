'use client';
import { Button } from 'antd';
import { JSX } from 'react';
import { remove } from '@/api/crud-operations';

export default function RemoveProductButton(props: {
  id: number;
}): JSX.Element {
  return (
    <Button onClick={async () => await remove('products', props.id)}>
      წაშლა
    </Button>
  );
}
