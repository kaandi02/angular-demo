import { signal } from '@angular/core';
import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/User';
import { signup } from './signup.actions';
import { initialstate, UserState } from './signup.state';

export function signupReducer(state: UserState | undefined, action: any) {
  return _signupReducer(state, action);
}

export const _signupReducer = createReducer(
  initialstate,
  on(signup, (state, action) => {
    let user = { ...action.user };
    let updatedState = {
      ...state,
      user: [user],
    };
    saveStateToLocalStorage(updatedState);

    return updatedState;
  })
);
function saveStateToLocalStorage(state: UserState) {
  let signupUsers: User[] = [];
  let retrievedData = localStorage.getItem('signupState');

  if (retrievedData) {
    try {
      signupUsers = JSON.parse(retrievedData).user || [];
    } catch {
      localStorage.removeItem('signupState');
    }
  }

  const newUser = state.user[state.user.length - 1];
  const existingUser = signupUsers.find((user) => user.email === newUser.email);

  if (!existingUser) {
    signupUsers.push(newUser);
  } else {
    alert('User already exists');
  }

  localStorage.setItem('signupState', JSON.stringify({ user: signupUsers }));
}
