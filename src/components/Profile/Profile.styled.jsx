import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
    width: fit-content;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
`

export const ProfileDescription = styled.div`
    background-color:  #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    padding-bottom: 20px;
`

export const ProfileAvatar = styled.img`
    display: block;
    height: 200px;
    width: 200px;
    margin-top: 20px;
`
export const ProfileUserName = styled.p`
    font-size: 22px;
    line-height: 1.62;
    font-weight: 20px;
    color: #161818;
    margin-top: 20px;
`
export const ProfileTag = styled.p`
    margin-top: 4px;
    font-size: 16px;
    line-height: 1.58;
    color: #888585;
    font-weight: 17px;
`
export const ProfileLocation = styled.p`
margin-top: 4px;
font-size: 16px;
line-height: 1.58;
color: #888585;
font-weight: 17px;
`

export const ProfileStats = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    border-top: 1px solid #cccccc;
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 20px;
        background-color: #e9e9e9;

        &:not(:first-of-type) {
            border-left: 1px solid #cccccc;
        }
    }    
`
export const ProfileLabel = styled.span`
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 17px;
    line-height: 1.68;
    font-weight: 19px;
    color: #959090
`
export const ProfileQuantity = styled.span`
    text-align: center;
    font-size: 16px;
    line-height: 1.58;
    font-weight: bold;
    color: #161818;
`