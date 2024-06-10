import * as dotenv from 'dotenv';
import { ApiConfigInterface } from '@/app/Config/interfaces/api-config.interface';

dotenv.config();

export const apiConfig: ApiConfigInterface = {
  rootApiUrl: process.env.NEXT_PUBLIC_API_ROOT ?? '',
};
