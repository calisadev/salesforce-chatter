import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class LogoutRedirectGuardService implements CanActivate {

  constructor (private authenticationService: AuthenticationService, private router: Router) {}
    
  public canActivate (): boolean {
      this.authenticationService.logout();
      window.location.href = '/login';
      return true;
  }
}
