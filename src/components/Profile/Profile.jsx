import PropTypes from "prop-types";
import './profile.css';

export const Profile = props => (
  <div className="profile">
      <div className="description">
        <img
          className="avatar"
          src={props.avatar}
          alt={props.username}
        />
        <p className="name">{props.username}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>
      
      <ul className="stats">
        <li>
          <span className="profile_label">Followers</span>
          <span className="quantity">{props.stats.followers}</span>
        </li>
        <li>
          <span className="profile_label">Views</span>
          <span className="quantity">{props.stats.views}</span>
        </li>
        <li>
          <span className="profile_label">Likes</span>
          <span className="quantity">{props.stats.likes}</span>
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