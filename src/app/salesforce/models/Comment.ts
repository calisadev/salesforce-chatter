
import { User } from "./User";
import { MessageBody } from "./MessageBody";

export interface Comment {
    id: string,
    user: User,
    body: MessageBody,
}