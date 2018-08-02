
import { User } from "./User";
import { MessageBody } from "./MessageBody";
import { Message } from "./Message";

export interface Conversation {
    id: string;
    title: string;
    userPhotos: string[];
    latestMessage: Message;
    members: User[];
}