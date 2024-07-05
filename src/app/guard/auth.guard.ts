import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard {

    constructor(private authService: AuthService, private router: Router) { }
    
    canActivate() {
        if (this.authService.getAuthIsLoggedIn()) {
            return true
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
//   private isDealerPresent$: Observable<boolean> = this.store.select(
//     selectIsDealerPresent
//   );
//   private isTeleSeller$: Observable<boolean | undefined> =
//     this.store.select(selectIsTeleSeller);

//   constructor(private store: Store<AppState>, private router: Router) {}

//   canActivate():
//     | boolean
//     | UrlTree
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree> {
//     return combineLatest([this.isDealerPresent$, this.isTeleSeller$]).pipe(
//       take(1),
//       switchMap(([dealer, isTeleSeller]: [boolean, boolean | undefined]) => {
//         if (isTeleSeller) {
//           return of(true);
//         } else if (dealer) {
//           return of(true) as Observable<boolean>;
//         } else {
//           return of(this.router.createUrlTree([ROUTES_MAP.dealer_code]));
//         }
//       })
//     );
//   }
}
