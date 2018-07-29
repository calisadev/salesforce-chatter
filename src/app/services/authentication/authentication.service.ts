import { Injectable } from '@angular/core';
import { AccessTokenInfo } from '../../salesforce/models/AccessTokenInfo';
import { User } from '../../salesforce/models/User';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private static readonly TOKEN = 'token';
    private static readonly CURRENT_USER = 'current-user-details';
    constructor() { }

    public storeTokenInfo (tokenInfo: AccessTokenInfo): void {
        sessionStorage.setItem(AuthenticationService.TOKEN, JSON.stringify(tokenInfo));
    }

    public getTokenInfo (): AccessTokenInfo {
        const tokenInfo = sessionStorage.getItem(AuthenticationService.TOKEN);
        return JSON.parse(tokenInfo);
    }

    public storeCurrentUserDetails (user: User): void {
        sessionStorage.setItem(AuthenticationService.CURRENT_USER, JSON.stringify(user));
    }

    public getCurrentUserDetails (): User {
        const tokenInfo = sessionStorage.getItem(AuthenticationService.CURRENT_USER);
        return JSON.parse(tokenInfo);
    }

    public isLoggedIn (): boolean {
        const tokenInfo = this.getTokenInfo();
        return tokenInfo && tokenInfo.access_token.length != 0;
    }

    public logout (): void {
        sessionStorage.setItem(AuthenticationService.TOKEN, null);
        sessionStorage.setItem(AuthenticationService.CURRENT_USER, null);
    }
}
