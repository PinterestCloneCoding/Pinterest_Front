import styled, { css } from "styled-components";

const LoginedAccount = ({img, name, personnel, email}) => {
    return (
        <AccountBox>
            <ProfileImg src={img}/>
            <ProfileInfo>
                <NameInfo>{name}</NameInfo>
                {personnel ? <p>개인</p> : <p>팀</p>}
                <p>{email}</p>
            </ProfileInfo>
        </AccountBox>
    )
}

export default LoginedAccount;

const AccountBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px 2px;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const ProfileImg = styled.img`
    width: 60px;
    height: 60px;
    margin-left: 10px;
    clip-path: ellipse();
`;


const ProfileInfo = styled.div`
    line-height: 60%;
    letter-spacing: -0.5px;
    color: gray;
    font-size: 14px;
    margin: 2px 6px;
`

const NameInfo = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: black;
`;