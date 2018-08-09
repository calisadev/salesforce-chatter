
import { User } from './User';
import { Photo } from './Photo';

export interface Group {
    id: string,
    name: string,
    description: string,
    memberCount: number,
    owner: User,
    photo: Photo,
    visibility: string,
    isSelected: boolean
}
export const GROUP_VISIBILITY = {
    PUBLIC: 'PublicAccess',
    PRIVATE: 'PrivateAccess'
}
