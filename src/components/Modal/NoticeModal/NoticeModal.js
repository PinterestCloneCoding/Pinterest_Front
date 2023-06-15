import styled, { css } from "styled-components";
import UpdateContent from "./UpdateContent";

const NoticeModal = () => {
    return (
        <ModalBox>
            <ModalBoxTop>
                <TitleBox>
                    <h1>업데이트</h1>
                </TitleBox>
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
    position: fixed;
`;

const ModalBoxTop = styled.div`
    width: 370px;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;

    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 8px -4px;
    transition: box-shadow 300ms ease-in-out 0s;
`;

const TitleBox = styled.div`
    text-align: center;
`;

const ContentList = styled.div`

`;

const ModalBoxBottom = styled.div`
    width: 370px;
    height: 70px;
`;

export default NoticeModal;