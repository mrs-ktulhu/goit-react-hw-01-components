import PropTypes from "prop-types";
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

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }))
};
