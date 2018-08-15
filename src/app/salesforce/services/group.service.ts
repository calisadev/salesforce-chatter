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
    public createGroup (name: string, visibility: string): Observable<Group> {
        const data = {
            name: name,
            visibility: visibility
        };
        return this.baseService.callPost('groups', data);
    }
}
