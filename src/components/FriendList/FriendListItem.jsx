import PropTypes from "prop-types";
import {FriendListItems,FriendAvatar,FriendName,OnlineStatus} from "./FriendList.styled"


export const FriendListItem = ({ avatar,name,isOnline }) => {
    const classNames = ["status"];
    if (isOnline) classNames.push("is-online");
    return (
    <FriendListItems>
        <OnlineStatus isOnline={isOnline}>{isOnline}</OnlineStatus>
        <FriendAvatar src={avatar} alt={name} width="48" />
        <FriendName>{name}</FriendName>
    </FriendListItems>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline:PropTypes.bool.isRequired,
    })
  };