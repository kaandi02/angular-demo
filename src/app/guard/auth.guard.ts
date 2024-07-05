import { inject } from "@angular/core"
import { Router } from "@angular/router";
import { AuthService } from "./auth.service"

export const canActivate = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService) {
        return true
    }
    else {
        router.navigate(['login']);
        return false;
       
    }
}