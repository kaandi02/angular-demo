import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./signup.state";

const getSignedupUserState=createFeatureSelector<UserState>('signup');
export  const getSignedupUser=createSelector(getSignedupUserState,(state)=>{
                    return state.user})