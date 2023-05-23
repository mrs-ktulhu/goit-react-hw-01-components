import { FriendListItem } from "./FriendListItem";
import './friendlist.css';

export const FriendsList = ({friends}) => (
    <ul className="friend-list">
        {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
)
