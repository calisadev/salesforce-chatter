import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Feed } from '../../salesforce/models/Feed';
import { Comment } from '../../salesforce/models/Comment';

@Component({
        selector: 'app-feed-view',
        templateUrl: './feed-view.component.html',
        styleUrls: ['./feed-view.component.css']
})
export class FeedViewComponent {
    @Input() feeds : Feed[];
    @Output() commentPostEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }
    public shouldShowFeedView (): boolean {
        return this.feeds && this.feeds.length > 0;
    }
    public isLikedByCurrentUser (feed: Feed): boolean {
        return feed.capabilities.chatterLikes && feed.capabilities.chatterLikes.isLikedByCurrentUser;
    }
    public onPostCommentButtonClicked (feed: Feed): void {
        this.commentPostEvent.emit(feed);
    }
    public attachNewCommentToFeed (comment: Comment, feedId: string) {
        
    }
}
