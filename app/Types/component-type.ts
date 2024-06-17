import { JSX } from 'react';

export type ComponentType<T = NonNullable<unknown>> = (props: T) => JSX.Element;
