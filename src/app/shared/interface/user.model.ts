export interface ICreateUser {
  name: string;
  email: string;
  // role: string;
  password: string;
}

export interface IUpdateUser{
  name: string;
  email?: string;
  // role: boolean;
  password?: string;
}



