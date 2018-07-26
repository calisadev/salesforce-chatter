import { Component, OnInit } from '@angular/core';
import { Conversation } from '../../salesforce/models/Conversation';
import { Message } from '../../salesforce/models/Message';
import { DirectMessageService } from '../../salesforce/services/direct-message.service';
import { ConversationDetail } from '../../salesforce/models/ConversationDetail';

@Component({
    selector: 'app-chatter-direct-messages-view',
    templateUrl: './chatter-direct-messages-view.component.html',
    styleUrls: ['./chatter-direct-messages-view.component.css']
})
export class ChatterDirectMessagesViewComponent implements OnInit {
    public title: string;
    public conversations: Conversation[];
    public currentConversation: Conversation;
    public currentConversationDetail: ConversationDetail;
    public messages: Message[];

    constructor (private directMessageService: DirectMessageService) { }

    public ngOnInit (): void {
        this.title = "Direct Messages";
        this.directMessageService.getMyConversations().subscribe((conversations: Conversation[]) => {
            this.conversations = conversations;
            this.currentConversation = this.conversations[0];
            this.directMessageService.getMessages(this.currentConversation.id).subscribe((conversationDetail: ConversationDetail) => {
                this.currentConversationDetail = conversationDetail;
                this.messages = this.directMessageService.getMessagesOfConversation(this.currentConversationDetail);
            });
        });
    }
    public onConversationSelected (conversation: Conversation): void {
        this.currentConversation = conversation;
    }
}
