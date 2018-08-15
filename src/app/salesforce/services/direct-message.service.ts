import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Conversation } from '../models/Conversation';
import { map } from 'rxjs/operators';
import { ConversationDetail } from '../models/ConversationDetail';
import { Message } from '../models/Message';
import { User } from '../models/User';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class DirectMessageService {
    private currentUserId: string;

    constructor (private baseService: BaseService, private authenticationService: AuthenticationService) {
        this.currentUserId = this.authenticationService.getCurrentUserDetails().id;
    }

    public getMyConversations (): Observable<Conversation[]> {
        const resourcePath = 'users/me/conversations';
        return this.baseService.callGet(resourcePath).pipe(map(res => {
            return res.conversations.map(this.prepareConversationData.bind(this));
        }));
    }
    private prepareConversationData (conversation: Conversation): Conversation {
        conversation.title = this.buildConversationTitle(conversation);
        conversation.userPhotos = this.buildConversationUserPhotos(conversation);
        return conversation;
    }
    private buildConversationTitle (conversation: Conversation): string {
        let names = conversation.members.map((member: User) => {
            return member.id === this.currentUserId ? '' : member.name;
        }).filter((name: string) => { return name !== ''});
        return names.join(', ');
    }
    private buildConversationUserPhotos (conversation: Conversation): string[] {
        let photoUrls = conversation.members.map((member: User) => {
            return member.id === this.currentUserId ? '' : member.photo.fullEmailPhotoUrl;
        }).filter((name: string) => { 
            return name !== '';
        });
        photoUrls = photoUrls.slice(0, 3);
        if (photoUrls.length > 1) {
            photoUrls.push('assets/group-icon.png');
        }
        return photoUrls;
    }
    public getConversationDetail (conversationId: string, pageToken?: string): Observable<ConversationDetail> {
        let resourcePath = 'users/me/conversations/' + conversationId;
        if (pageToken) {
            resourcePath += '?page=' + pageToken;
        }
        return this.baseService.callGet(resourcePath).pipe(map(this.prepareConversationDetailData.bind(this)));
    }
    public sendMessage (message: string, members: User[]): Observable<Message> {
        const recipients = members.map((user) => { return user.id });
        const messageBody = {
            body: message,
            recipients: recipients
        }
        return this.baseService.callPost('users/me/messages', messageBody).pipe(map(this.prepareMessageData.bind(this)));
    }
    private prepareConversationDetailData (conversationDetail: ConversationDetail): ConversationDetail {
        conversationDetail.messages.messages.map(this.prepareMessageData.bind(this));
        conversationDetail.messages.messages = conversationDetail.messages.messages.sort((firstMessage: Message, secondMessage: Message): number => {
            return new Date(firstMessage.sentDatetime) > new Date(secondMessage.sentDatetime) ? 1 : -1;
        });
        return conversationDetail;
    }
    private prepareMessageData (message: Message): Message {
        message.sentDatetime = new Date(message.sentDate);
        message.messageStyle = message.sender.id === this.currentUserId ? 'right' : 'left';
        return message;
    }
}
