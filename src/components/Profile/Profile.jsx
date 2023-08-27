import PropTypes from "prop-types";
import './profile.css';

export const Profile = ({ avatar, username, tag, location, followers, views, likes  }) => (
  <div className="profile">
      <div className="description">
        <img
          className="avatar"
          src={avatar}
          alt={username}
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      
      <ul className="stats">
        <li>
          <span className="profile_label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="profile_label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="profile_label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
  </div>
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