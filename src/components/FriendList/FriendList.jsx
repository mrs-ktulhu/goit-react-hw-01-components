import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";

export const FriendsList = ({friends}) => (
    <ul>
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
  friends: PropTypes.arrayOf.isRequired(PropTypes.shape.isRequired({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }))
};
