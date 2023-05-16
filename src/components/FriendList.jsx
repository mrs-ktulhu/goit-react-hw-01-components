import { FriendListItem } from "./FriendListItem";

export const FriendsList = ({friends}) => (
    <ul className="friend-list">
        {friends.map((friend) => (<FriendListItem key={friend.id} friend={friend} />))}
    </ul>
)
