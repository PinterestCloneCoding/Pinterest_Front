import styled, { css } from "styled-components";
import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";
import HandleImageUpload from "../../HandleImageUpload/HandleImageUpload";

const CreateModal = () => {
    return (
        <ModalBox>
            <ModalTopBox>
                <Link to={`/`}>
                    <Button imgName="cancel" imgSize={20} Icon />
                </Link>
                <h3>자산을 업로드하고 핀을 만드세요</h3>
                <Button imgName="question" imgSize={20} Icon />
            </ModalTopBox>
            <ImgUploadArea>
                <HandleImageUpload />
            </ImgUploadArea>
            <ModalBottomBox>
                <p>대신 웹 사이트 링크에서 핀을 만드시겠어요?</p>
                <UrlButton>URL에서 핀 만들기</UrlButton>
            </ModalBottomBox>
        </ModalBox>
    )
}

export default CreateModal;

const ModalBox = styled.div`
    position: fixed;
    width: 850px;
    height: 550px;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 4px;
`;

const ModalTopBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const ImgUploadArea = styled.div`
    width: 80%;
    height: 60%;
    border-radius: 15px;
    border: 2px dashed gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalBottomBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    width: 80%;
    height: 50px;
    padding: 8px 12px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;

const UrlButton = styled.div`
    width: 150px;
    height: 35px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    border-radius: 14px;
    background-color: rgba(0, 0, 0, 0.01);

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;