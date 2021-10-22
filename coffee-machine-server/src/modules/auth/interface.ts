import { RolesE } from "../user/interface";

export interface SuccessRegistration {
  data: 'success',
};

export interface JwtPayloadI {
  name: string
  sub: string
  role: RolesE
};
