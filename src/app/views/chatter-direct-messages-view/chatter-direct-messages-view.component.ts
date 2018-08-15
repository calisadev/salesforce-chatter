import { Component, OnInit, ViewChild } from '@angular/core';
import { Conversation } from '../../salesforce/models/Conversation';
import { Message } from '../../salesforce/models/Message';
import { DirectMessageService } from '../../salesforce/services/direct-message.service';
import { ConversationDetail } from '../../salesforce/models/ConversationDetail';
import { ChatViewComponent } from '../../components/chat-view/chat-view.component';
import { ChatComposerComponent } from '../../components/chat-composer/chat-composer.component';
import { SnackbarService } from '../../services/snackbar.service';
import { MatDialog } from '@angular/material';
import { CreateConversationDialogComponent } from '../../components/create-conversation-dialog/create-conversation-dialog.component';
import { User } from '../../salesforce/models/User';

type NewConversation = {
    users: User[],
    message: string 
}

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

    constructor (private directMessageService: DirectMessageService, public dialog: MatDialog, private snackbarService: SnackbarService) {}

    public ngOnInit (): void {
        this.title = "Direct Messages";
        this.loadMyConversations();
    }
    private loadMyConversations () {
        this.directMessageService.getMyConversations().subscribe((conversations: Conversation[]) => {
            this.conversations = conversations;
            this.messages = [];
            this.currentConversation = this.conversations[0];
            this.currentConversation.isSelected = true;
            this.loadConversationDetail(this.currentConversation.id, null);
        });
    }
    public onCreateConversationlicked (): void {
        const dialogRef = this.dialog.open(CreateConversationDialogComponent, {
            width: '700px',
            data: {}
        });
        dialogRef.afterClosed().subscribe((newConversation) => {
            this.createNewConversation(newConversation);
        });
    }
    private createNewConversation (newConversation: NewConversation): void {
        this.directMessageService.sendMessage(newConversation.message, newConversation.users).subscribe((message: Message) => {
            if (message && message.conversationId) {
                this.loadMyConversations();
            }
        }, (error: any) => {
            this.snackbarService.showErrorMessage('Failed to create conversation!');
        });
    }
    public onConversationSelected (conversation: Conversation): void {
        this.currentConversation = conversation;
        this.messages = [];
        this.loadConversationDetail(this.currentConversation.id, null);
    }
    public onLoadMoreEvent (nextPageToken: string): void {
        this.loadConversationDetail(this.currentConversation.id, nextPageToken);
    }
    private loadConversationDetail (conversationId: string, pageToken: string): void {
        this.directMessageService.getConversationDetail(conversationId, pageToken).subscribe((conversationDetail: ConversationDetail) => {
            this.nextPageToken = conversationDetail.messages.nextPageToken;
            this.messages.unshift(...conversationDetail.messages.messages);
        });
    } 
    public onMessageSend (messageText: string): void {
        this.directMessageService.sendMessage(messageText, this.currentConversation.members).subscribe((message: Message) => {
            if (message && message.id) {
                this.messages.push(message);
                this.chatComposer.clear();
            }
        });
    }
}
