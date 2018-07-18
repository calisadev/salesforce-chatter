import { User } from "./User";
import { FeedBody } from "./FeedBody";

export interface Feed { 
    actor: User,
    body: FeedBody
}