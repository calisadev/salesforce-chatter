import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Group } from '../models/Group';
import { map } from 'rxjs/operators';
import { Feed } from '../models/Feed';
import { Comment } from '../models/Comment';

@Injectable({
    providedIn: 'root'
})
export class FeedService {

    constructor (private baseService: BaseService) {}

    public getGroupFeeds (groupId: string): Observable<any> {
        const resourcePath = 'feeds/record/' + groupId + '/feed-elements';
        return this.baseService.callGet(resourcePath);
    }

    public postFeedToSubjectId (subjectId: string, message: string): Observable<Feed> {
        const resourcePath = 'feed-elements';
        const body = { 
            "body" : {
               "messageSegments" : [
                    {
                        "type" : "Text",
                        "text" : message
                    }]
                },
            "feedElementType" : "FeedItem",
            "subjectId" : subjectId
        }
        return this.baseService.callPost(resourcePath, body);
    }
    public postComment (feedId: string, comment: string): Observable<Comment> {
        const resourcePath = 'feed-elements/' + feedId + '/capabilities/comments/items';
        const body = {
            "body":{
                "messageSegments": [{
                        "type": "Text",
                        "text": comment
                    }
                ]
            }
        };
        return this.baseService.callPost(resourcePath, body);
    }
}
