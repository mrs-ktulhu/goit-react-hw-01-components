export const FriendListItem = ({ avatar,name,isOnline }) => {
    const classNames = ["status"];
    if (isOnline) classNames.push("is-online");
    return (
    <li className="friend_item">
        <span className={classNames.join(" ")}>{isOnline}</span>
        <img className="friend_avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
        </li>
    )
}
