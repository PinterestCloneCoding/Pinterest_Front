import styled, { css } from "styled-components";
import PinCards from "../../assets/pin-cards.jpg";
import Button from "../../components/common/Button/Button";
import CreateModal from "../../components/Modal/CreateModal/CreateModal";
import { useState } from "react";

const Create = () => {
  const [create, setCreate] = useState(false);

  return (
    <CreateBox>
      <MenuBar>
        <MenuBox>
          <Button
            style={{ width: "100px", height: "100px" }}
            imgName="double-arrow-forward"
            imgSize={25}
            Icon
          />
          <Button
            style={{ width: "100px", height: "100px" }}
            imgName="add"
            imgSize={25}
            Icon
          />
        </MenuBox>
      </MenuBar>
      <CreateArea>
        <img src={PinCards} alt="Pin Cards" />
        <Title>핀 만들기 시작하기</Title>
        <Desc>
          초안은 처음 저장 후 30일이 지나면 만료되며 <br /> 이후에는 삭제됩니다.
        </Desc>
        <Button
          name="새로 만들기"
          primary
          style={{ width: "90px" }}
          onClick={() => setCreate(!create)}
        />
        {create ? <CreateModal /> : null}
      </CreateArea>
    </CreateBox>
  );
};

export default Create;

const CreateBox = styled.div`
  height: 100%;
`;

const MenuBar = styled.div`
  position: fixed;

  margin: 0px;
  top: 70px;
  left: 0%;
  width: 100px;
  height: 100%;

  border-right: 1px solid gray;
`;

const MenuBox = styled.div`
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid gray;
`;

const CreateArea = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  letter-spacing: -0.1px;
  font-size: 28px;
  font-weight: bold;
  margin-top: 22px;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  margin: 4px auto;
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
  text-align: center;
`;
