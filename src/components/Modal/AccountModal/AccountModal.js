import styled, { css } from "styled-components";

const AccountModal = () => {
    return (
        <ModalBox>
            <LoginAccountBox>
                <p>현재 로그인 계정</p>
                {/* 현재 로그인 계정 부분 */}
                <MyAccount>
                    {/* 이 부분 컴포넌트 만들기 */}
                </MyAccount>
            </LoginAccountBox>
            <MyAccountInfoBox>
                <p>내 계정</p>
                {/* 내 계정 부분 */}

            </MyAccountInfoBox>
            <MoreOptionBox>
                <p>옵션 더 보기</p>
                {/* 옵션 더보기 부분 */}

            </MoreOptionBox>
        </ModalBox>
    )
}

export default AccountModal;

const ModalBox = styled.div`
    width: 300px;
    height: 80%;
    position: fixed;

    top: 10%;
    right: 0%;

    border-radius: 16px;
    background-color: gray;
    font-size: 12px;
    color: #111111;

    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 4px 15px;
`;

const LoginAccountBox = styled.div`
    
`;

const MyAccount = styled.div`
    background-color: blue;
`;

const MyAccountInfoBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const MoreOptionBox = styled.div`
    display: flex;
    flex-direction: column;
`;