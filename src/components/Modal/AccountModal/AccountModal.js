import styled, { css } from "styled-components";
import LoginedAccount from "./LoginedAccount";
import Button from "../../common/Button/Button";

const AccountModal = () => {
    const Logout = () => {
        
    }

    return (
        <ModalBox>
            <LoginAccountBox>
                <p>현재 로그인 계정</p>
                <MyAccount>
                    <LoginedAccount 
                        img="https://i.pinimg.com/75x75_RS/0d/ed/62/0ded62789da5f40da84cde772d479d9a.jpg"
                        name="설아 원"
                        personnel={true}
                        email="2022044@bssm.hs.kr"
                    />
                </MyAccount>
            </LoginAccountBox>
            <MyAccountInfoBox>
                <p>내 계정</p>
                <Button name="계정 추가" defaultLong />
                <Button name="Business 계정으로 전환" defaultLong />
            </MyAccountInfoBox>
            <MoreOptionBox>
                <p>옵션 더 보기</p>
                    <Button name="설정" defaultLong />
                    <Button name="홈피드 조정" defaultLong />
                    <Button name="Windows 앱 설치" defaultLong />
                    <Button name="개인정보 보호권" defaultLong />
                    <Button name="도움 받기" defaultLong />
                    <Button name="서비스 약관 보기" defaultLong />
                    <Button name="개인정보 보호정책 보기" defaultLong />
                    <Button name="베타 테스터 되기" defaultLong />
                    <Button name="로그아웃" defaultLong onClick={Logout} />
            </MoreOptionBox>
        </ModalBox>
    )
}

export default AccountModal;

const ModalBox = styled.div`
    width: 250px;
    height: 85%;
    position: fixed;

    top: 10%;
    right: 0%;

    border-radius: 16px;
    background-color: white;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    color: #111111;

    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 4px 15px;

    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const LoginAccountBox = styled.div`
    
`;

const MyAccount = styled.div`
`;

const MyAccountInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px 4px;
`;

const MoreOptionBox = styled.div`
    display: flex;
    flex-direction: column;

    gap: 4px 4px;
`;