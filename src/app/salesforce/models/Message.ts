
import { MessageBody } from "./MessageBody";
import { User } from "./User";

export interface Message {
    id: String;
    body: MessageBody;
    sender: User;
    sentDate: string;
    sentDatetime: Date;
    messageStyle: string;
}   