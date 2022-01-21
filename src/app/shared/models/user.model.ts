export interface IUser {
    user_id?: string;
    name: string;
    email: string;
    roles: string[];
    password: string;
}


export class IUpdateUser {
    name?: string;
    email?: string;
    password?: string;
}

export class CreateUser implements IUser {
    constructor() { }
    public name: string;
    public email: string;
    public roles: string[];
    public password: string;
}