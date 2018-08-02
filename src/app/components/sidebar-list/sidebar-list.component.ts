import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from '../../salesforce/models/Group';
import { Conversation } from '../../salesforce/models/Conversation';

@Component({
    selector: 'app-sidebar-list',
    templateUrl: './sidebar-list.component.html',
    styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent {
    @Input() groups : Group[];
    @Input() conversations : Conversation[];
    @Output() groupClickEvent: EventEmitter<any> = new EventEmitter();
    @Output() conversationClicked: EventEmitter<any> = new EventEmitter();

    public conversationMemberPhotoUrls : string[] = [];

    public onGroupClicked (group: Group) {
        this.groupClickEvent.emit(group);
    }

    public onConversationClicked (conversation: Conversation) {
        this.conversationClicked.emit(conversation);
    }
}
