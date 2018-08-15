import { User } from "./User";
import { MessageBody } from "./MessageBody";
import { FeedCapability } from "./FeedCapability";

export interface Feed { 
    id: string,
    actor: User,
    body: MessageBody,
    capabilities: FeedCapability,
    newComment: string
}