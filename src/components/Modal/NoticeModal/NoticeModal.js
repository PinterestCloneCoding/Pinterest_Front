import styled, { css } from "styled-components";
import UpdateContent from "./UpdateContent";

const NoticeModal = () => {
    return (
        <ModalBox>
            <ModalBoxTop>
                <p>업데이트</p>
                <ContentList>
                    <UpdateContent
                        title=""
                        postTime={1}
                    /> 
                </ContentList>
            </ModalBoxTop>
            <ModalBoxBottom>

            </ModalBoxBottom>
        </ModalBox>
    )
}

const ModalBox = styled.div`
    width: 320px;
    height: 80%;

    position: fixed;

    top: 10%;
    right: 0%;

    border-radius: 16px;
    background-color: gray;
`;

const ModalBoxTop = styled.div`
    width: 320px;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    font-size: 16px;
    font-weight: bold;
`;

const ContentList = styled.div`

`;

const ModalBoxBottom = styled.div`
    width: 370px;
    height: 70px;
`;

export default NoticeModal;