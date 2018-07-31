import { Component, OnInit, Input } from '@angular/core';
import { Conversation } from '../../salesforce/models/Conversation';
import { User } from '../../salesforce/models/User';

@Component({
    selector: 'app-sidebar-conversation-item',
    templateUrl: './sidebar-conversation-item.component.html',
    styleUrls: ['./sidebar-conversation-item.component.css']
})
export class SidebarConversationItemComponent implements OnInit {
    @Input() conversation: Conversation;

    public conversationName: string;
    public conversationPhotoUrls: string[];

    constructor() { }

    public ngOnInit(): void {
        this.conversationName = this.buildConversationName();
        this.conversationPhotoUrls = this.buildConversationPhoto();
    }

    private buildConversationName (): string {
        let names = this.conversation.members.map((member: User) => {
            return member.isCurrentUser ? '' : member.name;
        }).filter((name: string) => { return name !== ''});
        return names.join(', ');
    }

    private buildConversationPhoto (): string[] {
        let photoUrls = this.conversation.members.map((member: User) => {
            return member.isCurrentUser ? '' : member.photo.fullEmailPhotoUrl;
        }).filter((name: string) => { return name !== ''});
        photoUrls = photoUrls.slice(0, 3);
        if (photoUrls.length > 1) {
            photoUrls.push('assets/group-icon.png');
        }
        return photoUrls;
    }
}
