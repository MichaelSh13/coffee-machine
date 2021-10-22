export enum UserRoleE {
  BOSS = 'boss',
  CLIENT = 'client'
}

export interface UserRoleI {
  key: keyof typeof UserRoleE
  value: string
};

export interface SignInAuthI {
  email: string
  password: string
};

export interface SignUpAuthI extends
  SignInAuthI {
    role: UserRoleE
    name: string
  };

export interface SuccessLoginI {
  access_token: string
}