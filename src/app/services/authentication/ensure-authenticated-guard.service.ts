import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
        providedIn: 'root'
})
export class EnsureAuthenticatedGuardService implements CanActivate {

    constructor (private authenticationService: AuthenticationService, private router: Router) {}

    public canActivate (): boolean {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}
