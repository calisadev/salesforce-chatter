import { Component, OnInit, Input } from '@angular/core';
import { Conversation } from '../../salesforce/models/Conversation';
import { User } from '../../salesforce/models/User';

@Component({
    selector: 'app-sidebar-conversation-item',
    templateUrl: './sidebar-conversation-item.component.html',
    styleUrls: ['./sidebar-conversation-item.component.css']
})
export class SidebarConversationItemComponent {
    @Input() conversation: Conversation;
}
