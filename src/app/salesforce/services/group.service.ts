import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Group } from '../models/Group';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor (private baseService: BaseService) {}

    public getAll (): Observable<Group[]> {
        return this.baseService.callGet<Group[]>('groups').pipe(map(res => {
            return res.groups;
        }));
    }
    public joinToGroup (groupId: string, userId: string): Observable<any> {
        const data = {
            userId: userId
        };
        return this.baseService.callPost('groups/' + groupId + '/members', data);
    }
}
