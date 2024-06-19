'use client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import styles from './OAuthLogin.module.scss';
import { oAuthLogin } from '@/app/(auth)/utils/oAuthLogin/oAuthLogin';
import { OAuthTypeEnum } from '@/app/Enums/oauth-type.enum';
import { ComponentType } from '@/app/Types/component-type';

interface Props {
  type: OAuthTypeEnum;
  image: StaticImport;
}

const OAuthLogin: ComponentType<Props> = (props: Props) => {
  return (
    <Image
      onClick={() => oAuthLogin(props.type)}
      src={props.image}
      alt={'oauth login icon'}
      width={30}
      height={30}
      className={styles.image}
    />
  );
};

export default OAuthLogin;
