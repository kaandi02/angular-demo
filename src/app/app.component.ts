import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
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
  
   
  }
  constructor() {
   
  }
}

