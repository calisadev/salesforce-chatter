import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Conversation } from '../models/Conversation';
import { map } from 'rxjs/operators';
import { ConversationDetail } from '../models/ConversationDetail';
import { Message } from '../models/Message';
import { User } from '../models/User';
@Injectable({
    providedIn: 'root'
})
export class DirectMessageService {

    constructor (private baseService: BaseService) {}

    public getMyConversations (): Observable<Conversation[]> {
        const resourcePath = 'users/me/conversations';
        return this.baseService.callGet(resourcePath).pipe(map(res => {
            return res.conversations;
        }));
    }

    public getMessages (pageToken: string): Observable<ConversationDetail> {
        const resourcePath = 'users/me/conversations/' + pageToken;
        return this.baseService.callGet(resourcePath);
    }

    public getMessagesOfConversation (conversationDetail: ConversationDetail) {
        const messages : Message[] = conversationDetail.messages.messages;
        for (var message of messages) {
            message.sentDatetime = new Date(message.sentDate);
        }
        return messages.sort((a: Message, b: Message): number => {
            return a.sentDatetime > b.sentDatetime ? 1 : -1;
        });
    }

    public sendMessage (message: string, members: User[]): Observable<Message[]> {
        const recipients = members.map((user) => { return user.id});
        const messageBody = {
            body: message,
            recipients: recipients
        }
        return this.baseService.callPost('users/me/messages', messageBody);
    }
}
