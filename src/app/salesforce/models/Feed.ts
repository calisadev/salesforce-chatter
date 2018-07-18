import { User } from "./User";
import { FeedBody } from "./FeedBody";
import { FeedCapability } from "./FeedCapability";

export interface Feed { 
    actor: User,
    body: FeedBody,
    capabilities: FeedCapability
}