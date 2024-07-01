import { GetExpirationType } from '@/src/app/(auth)/utils/getTokenExpiration/types/get-expiration.type';

// Returns 30 Days In MilliSeconds
export const getAccessTokenExpirationTime: GetExpirationType = () => {
  return new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
};

// Returns 60 Days In MilliSeconds
export const getRefreshTokenExpirationTime: GetExpirationType = () => {
  return new Date().getTime() + 60 * 24 * 60 * 60 * 1000;
};
