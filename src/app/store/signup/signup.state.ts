import { User } from '../../models/User';

export const initialstate: UserState = {
  user: [
    {
      email: '',
      password: '',
    },
  ],
};
export interface UserState {
  user: User[];
}
