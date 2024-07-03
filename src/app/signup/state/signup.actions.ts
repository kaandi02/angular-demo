import { createAction, props } from "@ngrx/store";
// import { props } from "@ngrx/store";
import { User } from "../../Models/User";

export const signup=createAction('signup',props<{user:User}>());

export const getSignedupUser=createAction('getSignupUser');