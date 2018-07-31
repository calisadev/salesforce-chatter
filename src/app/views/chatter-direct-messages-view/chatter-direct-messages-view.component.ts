import { Component, OnInit, ViewChild } from '@angular/core';
import { Conversation } from '../../salesforce/models/Conversation';
import { Message } from '../../salesforce/models/Message';
import { DirectMessageService } from '../../salesforce/services/direct-message.service';
import { ConversationDetail } from '../../salesforce/models/ConversationDetail';
import { ChatViewComponent } from '../../components/chat-view/chat-view.component';
import { ChatComposerComponent } from '../../components/chat-composer/chat-composer.component';

@Component({
    selector: 'app-chatter-direct-messages-view',
    templateUrl: './chatter-direct-messages-view.component.html',
    styleUrls: ['./chatter-direct-messages-view.component.css']
})
export class ChatterDirectMessagesViewComponent implements OnInit {
    @ViewChild(ChatComposerComponent) chatComposer: ChatComposerComponent;
    @ViewChild(ChatViewComponent) chatView: ChatViewComponent;

    public title: string;
    public conversations: Conversation[];
    public currentConversation: Conversation;

    public nextPageToken: string;
    public messages : Message[] = [];

    constructor (private directMessageService: DirectMessageService) { }

    public ngOnInit (): void {
        this.title = "Direct Messages";
        this.directMessageService.getMyConversations().subscribe((conversations: Conversation[]) => {
            this.conversations = conversations;
            this.currentConversation = this.conversations[0];
            this.loadConversationDetail(this.currentConversation.id, null);
        });
    }
    private loadConversationDetail (conversationId: string, pageToken: string) {
        this.directMessageService.getConversationDetail(conversationId, pageToken).subscribe((conversationDetail: ConversationDetail) => {
            this.nextPageToken = conversationDetail.messages.nextPageToken;
            this.messages.unshift(...conversationDetail.messages.messages);
        });
    }   
    public onConversationSelected (conversation: Conversation): void {
        this.currentConversation = conversation;
        this.messages = [];
        this.loadConversationDetail(this.currentConversation.id, null);
    }
    public onLoadMoreEvent (nextPageToken: string) {
        this.loadConversationDetail(this.currentConversation.id, nextPageToken);
    }
    public onMessageSend (messageText: string) {
        this.directMessageService.sendMessage(messageText, this.currentConversation.members).subscribe((message: Message) => {
            if (message && message.id) {
                this.messages.push(message);
                this.chatComposer.clear();
                this.chatView.scrollBottom();
            }
        });
    }
}
