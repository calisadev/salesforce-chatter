
import { MessageBody } from "./MessageBody";
import { User } from "./User";

export interface Message {
    id: string;
    conversationId: string;
    body: MessageBody;
    sender: User;
    sentDate: string;
    sentDatetime: Date;
    messageStyle: string;
}   