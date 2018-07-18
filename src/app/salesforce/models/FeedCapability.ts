import { User } from "./User";

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
            items: any,
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