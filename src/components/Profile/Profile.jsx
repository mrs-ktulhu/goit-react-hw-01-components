import PropTypes from "prop-types";
import {ProfileContainer,ProfileDescription,ProfileAvatar,ProfileUserName,ProfileTag,ProfileLocation,ProfileStats,ProfileLabel,ProfileQuantity} from"./Profile.styled"

export const Profile = ({ avatar, username, tag, location, followers, views, likes  }) => (
  <ProfileContainer>
      <ProfileDescription>
        <ProfileAvatar
          src={avatar}
          alt={username}
        />
        <ProfileUserName>{username}</ProfileUserName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>
      
      <ProfileStats>
        <li >
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{followers}</ProfileQuantity>
        </li>
        <li >
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{views}</ProfileQuantity>
        </li>
        <li >
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{likes}</ProfileQuantity>
        </li>
      </ProfileStats>
  </ProfileContainer>
)

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
};