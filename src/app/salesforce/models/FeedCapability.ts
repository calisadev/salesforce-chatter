import { User } from "./User";
import { Comment } from "./Comment";

export interface FeedCapability {
    chatterLikes: {
        isLikedByCurrentUser: boolean,
        myLike: {
            id: string
        },
        page: {
            total: number,
            items: Like[],
            nextPageUrl: string,
            currentPageUrl: string,
            previousPageUrl: string
        }
    },
    comments: {
        page: {
            total: number,
            items: Comment[],
            nextPageUrl: string,
            currentPageUrl: string,
            previousPageUrl: string
        }
    }
}

export interface Like {
    id: string,
    user: User
}