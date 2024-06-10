import { GenerateUrlArguments } from '@/app/Api/interfaces/generate-url-arguments.interface';

export type GenerateUrlType = <T>(data: GenerateUrlArguments<T>) => string;
