import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { AuthResponseInterface } from '@/src/app/(auth)/types/interfaces/auth-response.interface';
import { DataInterface, get } from '@/src/shared/api/get-function';

const redirectToLoginPage = (req: NextRequest): NextResponse<unknown> => {
  return NextResponse.redirect(new URL('/login', req.url));
};

const handleJwtTokenExpiration = async (
  req: NextRequest,
): Promise<NextResponse> => {
  const tokensResponse: DataInterface<AuthResponseInterface> = (await get({
    url: 'auth/refresh',
  })) as unknown as DataInterface<AuthResponseInterface>;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isRefreshTokenExpired: boolean = tokensResponse?.['statusCode'] === 401;

  if (!isRefreshTokenExpired) {
    const response: NextResponse = NextResponse.next();
    response.cookies.set('accessToken', tokensResponse.data?.accessToken);
    response.cookies.set('refreshToken', tokensResponse.data?.refreshToken);
    return response;
  } else {
    return NextResponse.redirect(new URL('/login', req.url));
  }
};

export async function middleware(
  req: NextRequest,
): Promise<NextResponse<unknown>> {
  const accessToken: string | undefined = cookies().get('accessToken')?.value;
  const refreshToken: string | undefined = cookies().get('refreshToken')?.value;

  const areTokensSet: boolean = !!(accessToken && refreshToken);

  if (!areTokensSet) {
    return redirectToLoginPage(req);
  }

  const decodedJwt: jwt.JwtPayload = jwt.decode(
    accessToken as string,
  ) as jwt.JwtPayload;

  const jwtExpirationDate: dayjs.Dayjs = dayjs.unix(decodedJwt?.exp as number);
  const isJwtExpired: boolean = dayjs(jwtExpirationDate).isBefore(new Date());

  if (isJwtExpired) {
    return await handleJwtTokenExpiration(req);
  }

  return NextResponse.next();
}

export const config: { matcher: string[] } = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|register|login).*)'],
};
