import styled from '@emotion/styled'

export const FriendListItems = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 5%;
    width: 270px;

    &:last-child {
        margin-bottom: 0;
`
export const FriendAvatar = styled.img`
    padding: 15px;
    margin-right: 20px;
`
export const FriendName = styled.p`
    font-size: 20px;
    font-weight: 700;
`
export const OnlineStatus = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    margin: 0px 15px;
    border-radius: 50%;
    background-color: ${props => {
        switch (props.isOnline) {
            case true:
                return `green`;
            default:
                return `red`
            
        }
    }}

`

