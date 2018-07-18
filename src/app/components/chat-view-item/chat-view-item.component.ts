import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../../salesforce/models/Feed';

@Component({
    selector: 'app-chat-view-item',
    templateUrl: './chat-view-item.component.html',
    styleUrls: ['./chat-view-item.component.css']
})
export class ChatViewItemComponent {
    @Input() feed : Feed;

    constructor() { }

    public isLikedByCurrentUser (): boolean {
        return this.feed.capabilities.chatterLikes.isLikedByCurrentUser;
    }
}
