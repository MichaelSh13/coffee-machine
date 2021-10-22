import { UserRoleE } from "../auth.service/interface";

export interface UserI {
  id: string
  email: string
  role: UserRoleE
  name: string
}