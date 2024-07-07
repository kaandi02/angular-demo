import { User } from "../../models/User";

export const initialState:LoginState={
    isloggedIn: false,
    user:''
}

export interface LoginState{
    isloggedIn: boolean;
    user:string
}