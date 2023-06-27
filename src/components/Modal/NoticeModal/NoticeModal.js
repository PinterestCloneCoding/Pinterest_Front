import styled, { css } from "styled-components";
import UpdateContent from "./UpdateContent";
import updateData from "../../../mocks/updateDummy";

const NoticeModal = () => {
    return (
        <ModalBox>
            <ModalBoxTop>
                <p>업데이트</p>
            </ModalBoxTop>
            <ContentList>
                {updateData.map((item) => (
                    <UpdateContent
                        topic={item.topic} count={item.count} date={item.date} url1={item.url1} url2={item.url2} url3={item.url3}
                    />
                ))}
                </ContentList>
            <ModalBoxBottom>

            </ModalBoxBottom>
        </ModalBox>
    )
}

const ModalBox = styled.div`
    width: 300px;
    height: 80%;
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
    width: 320px;
    overflow: scroll;
`;

const ModalBoxBottom = styled.div`
    width: 370px;
    height: 70px;
`;

export default NoticeModal;