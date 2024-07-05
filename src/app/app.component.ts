import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularmainproject';
  ngOnInit(): void {
   
  }
  constructor() {
    
    // const uuid = this.generateUUID();
    // localStorage.setItem('uuid',);}
    // private generateUUID(): string {
    //   let uuid = '';
    //   const chars =
    //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    //   for (let i = 0; i < 36; i++) {
    //     if (i === 8 || i === 13 || i === 18 || i === 23) {
    //       uuid += '-';
    //     } else if (i === 14) {
    //       uuid += '4';
    //     } else if (i === 19) {
    //       uuid += chars.charAt(Math.floor(Math.random() * chars.length));
    //     } else {
    //       uuid += chars.charAt(Math.floor(Math.random() * chars.length));
    //     }
    //   }

    //   return uuid;
    // }
  }
}