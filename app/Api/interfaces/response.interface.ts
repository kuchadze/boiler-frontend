export interface ResponseInterface<T> {
  body: T;
  status: number;
  ok: boolean;
}
