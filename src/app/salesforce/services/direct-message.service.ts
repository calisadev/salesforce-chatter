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
    constructor (private baseService: BaseService, private authenticationService: AuthenticationService) {}

    public getMyConversations (): Observable<Conversation[]> {
        const resourcePath = 'users/me/conversations';
        return this.baseService.callGet(resourcePath).pipe(map(res => {
            return res.conversations;
        }));
    }

    public getConversationDetail (conversationId: string, pageToken?: string): Observable<ConversationDetail> {
        let resourcePath = 'users/me/conversations/' + conversationId;
        if (pageToken) {
            resourcePath += '?page=' + pageToken;
        }
        return this.baseService.callGet(resourcePath).pipe(map(this.prepareConversationData.bind(this)));
    }
    public sendMessage (message: string, members: User[]): Observable<Message> {
        const recipients = members.map((user) => { return user.id});
        const messageBody = {
            body: message,
            recipients: recipients
        }
        return this.baseService.callPost('users/me/messages', messageBody).pipe(map(this.prepareMessageData.bind(this)));
    }
    private prepareConversationData (conversationDetail: ConversationDetail): ConversationDetail {
        conversationDetail.messages.messages.map(this.prepareMessageData.bind(this));
        conversationDetail.messages.messages = conversationDetail.messages.messages.sort((a: Message, b: Message): number => {
            return a.sentDatetime > b.sentDatetime ? 1 : -1;
        });
        return conversationDetail;
    }
    private prepareMessageData (message: Message): Message {
        message.sentDatetime = new Date(message.sentDate);
        message.messageStyle = message.sender.id === this.authenticationService.getCurrentUserDetails().id ? 'right' : 'left';
        return message;
    }
}
