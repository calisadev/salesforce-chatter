import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Group } from '../models/Group';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor (private baseService: BaseService) {}

    public getUserDetails (userId: string): Observable<User> {
        return this.baseService.callGet<User[]>('users/' + userId);
    }

    public getCurrentUserDetails (): Observable<User> {
        return this.getUserDetails('me');
    }
}
