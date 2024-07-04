import { createReducer, on } from '@ngrx/store';
import { loginAction, logoutAction } from './login.actions';
import { initialState, LoginState } from './login.state';

export function loginReducer(state: LoginState | undefined, action: any) {
  return _loginReducer(state, action);
}
export const _loginReducer = createReducer(
  initialState,
  on(loginAction, (state) => {
    return {
      ...state,
      isloggedIn: true,
    };
  }),
  on(logoutAction, (state) => {
    return {
      ...state,
      isloggedIn: false,
    };
  })
);
//this.store.dispatch(loginAction());//,private store:Store<{login:LoginState}>
