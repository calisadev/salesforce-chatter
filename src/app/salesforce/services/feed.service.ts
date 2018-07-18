import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Group } from '../models/Group';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FeedService {

    constructor (private baseService: BaseService) {}

    public getGroupFeeds (groupId: string): Observable<any> {
        const resourcePath = 'feeds/record/' + groupId + '/feed-elements';
        return this.baseService.callGet(resourcePath);
    }
}
