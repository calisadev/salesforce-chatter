import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AccessTokenInfo } from '../models/AccessTokenInfo';
import { environment } from '../../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root',
})
export class OAuthService {
    constructor(private http: HttpClient) {}

    public getAccessToken (authorizationCode: string): Observable<AccessTokenInfo> {
        const url = 'services/oauth2/token';
        const body = new HttpParams()
            .set('grant_type', 'authorization_code')
            .set('client_id', environment.clientId)
            .set('client_secret', environment.clientSecret)
            .set('redirect_uri',  environment.redirectUrl)
            .set('code', authorizationCode);
        const headers = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post<AccessTokenInfo>(url, body.toString(), headers);
    }
}
