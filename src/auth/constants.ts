import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: 'FIRST_BLOOD',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
