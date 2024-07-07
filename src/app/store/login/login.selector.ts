import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./login.state";

export const loginselector=createFeatureSelector<LoginState>('login');
export const getIsLoggedIn=createSelector(loginselector,(state)=>{
    return state.isloggedIn;
})
export const getUser = createSelector(loginselector, (state) => {
    return state.user
})