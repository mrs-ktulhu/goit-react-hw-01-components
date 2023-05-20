import { FriendListItem } from "./FriendListItem";
import './friendlist.css';

export const FriendsList = ({friends}) => (
    <ul className="friend-list">
        {friends.map((friend) => (<FriendListItem key={friend.id} friend={friend} />))}
    </ul>
)
