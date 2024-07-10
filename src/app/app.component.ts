import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { AppState } from './app.state';
import { getUser, loginAction } from './store/login/login.actions';
import { isPlatformBrowser } from '@angular/common';
//  npm i @types/uuid

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  title = 'angularmainproject';
  public list: string[] = [];
  constructor(
    private store:Store<AppState>,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    
    var uuid = uuidv4();
    if(isPlatformBrowser(this.platformId))
      sessionStorage.setItem('uuid',this.generateUUID())
  }

  generateUUID(){
    return uuidv4();
  }
}

