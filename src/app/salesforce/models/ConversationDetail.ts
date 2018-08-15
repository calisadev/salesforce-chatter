
import { User } from "./User";
import { MessageBody } from "./MessageBody";
import { Message } from "./Message";

export interface ConversationDetail {
    conversationId: string;
    members: User[];
    messages: {
        currentPageToken: string;
        messages: Message[];
        nextPageToken: string;
    }
}