import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication/authentication.service'

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    private BASE_RESOURCE_PATH: string = '/services/data/v43.0/chatter/';
    constructor (private authenticationService: AuthenticationService, private http: HttpClient) {}
    
    public callGet<T> (resourcePath: string): Observable<any> {
        const headers = this.buildHeaders();
        const url = this.buildUrl(resourcePath);
        return this.http.get<T>(url, headers);
    }
    public callPost<T> (resourcePath: string, data: any): Observable<any> {
        const headers = this.buildHeaders();
        const url = this.buildUrl(resourcePath);
        return this.http.post<T>(url, headers, data);
    }

    private buildHeaders (): any {
        const accessToken = this.authenticationService.getTokenInfo().access_token;
        const headers = {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('Authorization', 'Bearer ' +  accessToken)
        };
        return headers;
    }
    private buildUrl (resourcePath: string): string {
        const baseUrl = this.authenticationService.getTokenInfo().instance_url;
        return baseUrl + this.BASE_RESOURCE_PATH + resourcePath;
    }
}
