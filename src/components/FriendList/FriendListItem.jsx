export const FriendListItem = ({ friend }) => {
    const classNames = ["status"];
    if (friend.isOnline) classNames.push("is-online");
    return (
    <li className="friend_item">
        <span className={classNames.join(" ")}>{friend.isOnline}</span>
        <img className="friend_avatar" src={friend.avatar} alt={friend.name} width="48" />
        <p className="name">{friend.name}</p>
        </li>
    )
}
