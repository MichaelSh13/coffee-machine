import { SetMetadata } from "@nestjs/common";
import { Transform } from 'class-transformer';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const DefaultValueDecorator = (defaultValue: any) => {
  return Transform((target: any) => target || defaultValue);
};
