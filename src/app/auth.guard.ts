import { Injectable } from '@angular/core';  
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';  
import { AuthStateService } from './auth-state.service'

@Injectable({ providedIn: 'root' })  
export class AuthGuard implements CanActivate {  
    constructor(private _router: Router, private _authStateService: AuthStateService) { }  

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
        console.info('login state - ' + this._authStateService.loggedIn)
        if (this._authStateService.loggedIn) {  
            return true;  
        }  
        this._router.navigate(['welcome']);  
        return false;  
    }  
}  