import { Injectable } from '@angular/core';
import { AccessTokenInfo } from '../../salesforce/models/AccessTokenInfo';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() { }

    public storeTokenInfo (tokenInfo: AccessTokenInfo): void {
        sessionStorage.setItem('token', JSON.stringify(tokenInfo));
    }

    public getTokenInfo (): AccessTokenInfo {
        const tokenInfo = sessionStorage.getItem('token');
        return JSON.parse(tokenInfo);
    }

    public isLoggedIn (): boolean {
        const tokenInfo = this.getTokenInfo();
        return tokenInfo && tokenInfo.access_token.length != 0;
    }

    public logout (): void {
        sessionStorage.setItem('token', null);
    }
}
