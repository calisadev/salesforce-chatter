import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Group } from '../../salesforce/models/Group';
import { Conversation } from '../../salesforce/models/Conversation';

@Component({
    selector: 'app-sidebar-list',
    templateUrl: './sidebar-list.component.html',
    styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent implements OnChanges {
    @Input() groups : Group[];
    @Input() conversations : Conversation[];
    @Output() groupClickEvent: EventEmitter<any> = new EventEmitter();
    @Output() conversationClicked: EventEmitter<any> = new EventEmitter();

    public keyword: string;
    public filteredGroups : Group[];
    public filteredConversations : Conversation[];

    public ngOnChanges (changes: SimpleChanges): void {
        this.filteredGroups = this.groups;
        this.filteredConversations = this.conversations;
    }

    public filterItems (): void {
        this.filterGroups();
        this.filterConversations();
    }
    private filterGroups (): void {
        if (this.groups) {
            this.filteredGroups = this.groups.filter((group: Group) => {
                return this.containKeyword(group.name);
            });
        }
    }
    private filterConversations(): void {
        if (this.conversations) {
            this.filteredConversations = this.conversations.filter((conversation: Conversation) => {
                return this.containKeyword(conversation.title);
            });
        }
    }
    private containKeyword (text: string): boolean {
        return text.toLowerCase().includes(this.keyword.toLowerCase().trim());
    }
    public onGroupClicked (group: Group): void {
        this.groups.map((group: Group) => {
            group.isSelected = false;
        });
        group.isSelected = true;
        this.groupClickEvent.emit(group);
    }
    public onConversationClicked (conversation: Conversation): void {
        this.conversations.map((conversation: Conversation) => {
            conversation.isSelected = false;
        });
        conversation.isSelected = true;
        this.conversationClicked.emit(conversation);
    }
}
