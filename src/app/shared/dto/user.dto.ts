export interface IUser {
  name: string;
  email: string;
  roles: string[];
  password: string;
}

export interface IUpdateUser {
  name: string;
  email?: string;
  role: boolean;
  password?: string;
}

export class User implements IUser {
  constructor(
    public name: string,
    public email: string,
    public roles: string[],
    public password: string,
  ) { }
}
