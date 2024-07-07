import { createAction, props } from "@ngrx/store";

export const loginAction=createAction('loginAction');
export const logoutAction = createAction('logoutAction');
export const getUser = createAction('getUser', props<{user:string}>())
