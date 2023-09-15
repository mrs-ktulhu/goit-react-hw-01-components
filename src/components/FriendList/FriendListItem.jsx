import PropTypes from 'prop-types';
import {
  FriendListItems,
  FriendAvatar,
  FriendName,
  OnlineStatus,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItems>
      <OnlineStatus isOnline={isOnline}>{isOnline}</OnlineStatus>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItems>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
