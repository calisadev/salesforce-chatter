import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class LoginRedirectGuardService implements CanActivate {

    constructor (private authenticationService: AuthenticationService, private router: Router) {}
    
    public canActivate (): boolean {
        if (this.authenticationService.isLoggedIn()) {
            this.router.navigateByUrl('/groups');
            return true;
        } else {
            return true;
        }
    }
}
