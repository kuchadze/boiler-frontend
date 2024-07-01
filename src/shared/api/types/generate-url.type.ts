import { GenerateUrlArguments } from '@/src/shared/api/types/interfaces/generate-url-arguments.interface';

export type GenerateUrlType = <T>(data: GenerateUrlArguments<T>) => string;
