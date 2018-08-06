import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Feed } from '../../salesforce/models/Feed';

@Component({
    selector: 'app-feed-view',
    templateUrl: './feed-view.component.html',
    styleUrls: ['./feed-view.component.css']
})
export class FeedViewComponent {
    @Input() feeds : Feed[];
    @Output() commentPostEvent: EventEmitter<any> = new EventEmitter();

    public shouldShowFeedView (): boolean {
        return this.feeds && this.feeds.length > 0;
    }
    public isLikedByCurrentUser (feed: Feed): boolean {
        return feed.capabilities.chatterLikes && feed.capabilities.chatterLikes.isLikedByCurrentUser;
    }
    public onPostCommentButtonClicked (feed: Feed): void {
        this.commentPostEvent.emit(feed);
    }
}
