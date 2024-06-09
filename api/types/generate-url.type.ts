import { GenerateUrlArguments } from '@/api/interfaces/generate-url-arguments.interface';

export type GenerateUrlType = <T>(data: GenerateUrlArguments<T>) => string;
