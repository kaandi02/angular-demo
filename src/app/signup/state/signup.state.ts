import { User } from "../../Models/User";

export const initialstate:UserState={
    user:[{
        email:'',
        password:'',
    }]
}
export interface UserState{
    user:User[];
}