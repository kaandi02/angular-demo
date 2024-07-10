import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { AppState } from './app.state';
import { getUser, loginAction } from './store/login/login.actions';
//  npm i @types/uuid

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularmainproject';
  public list: string[] = [];
  ngOnInit(): void {
    // var uuid = uuidv4();
    // console.log(uuid);
    // sessionStorage.setItem('uuid',uuid)
    //  const loggedInUser = localStorage.getItem('loggedInUser');
    //  if (loggedInUser) {
    //    const user = JSON.parse(loggedInUser).user;
    //    this.store.dispatch(loginAction());
    //    this.store.dispatch(getUser({ user }));
    //  }
   
  }
  constructor(private store:Store<AppState>) {
   
  }
}

