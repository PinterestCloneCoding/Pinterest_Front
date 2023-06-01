import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: initial;
  align-items: start;
  margin: 80px auto;
  width: 70%;
  border-radius: 32px;
  box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
`;

export const BackIcon = styled.button`
  border-radius: 50px;
  margin-top: 16px;
  width: 60px;
  height: 60px;
  border: none;

  &:hover {
    background-color: #f0f0f0;
  }
  background-color: inherit;
  border-radius: 30px;
`;

export const BackArrow = styled.img`
  width: 28px;
  height: 28px;
`;

export const Pin = styled.div`
  display: flex;
  border-radius: 32px;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const PinImg = styled.img`
  width: 50%;
  height: 700px;
  background-color: lightgray;
  border-radius: 32px 0px 0px 32px;
`;

export const PinChat = styled.div`
  width: 50%;
  border-radius: 0px 32px 32px 0px;
`;

export const PinChatBox = styled.div`
  text-align: left;
`;

export const PinHeader = styled.div`
  width: 90%;
  justify-content: space-between;
  margin: 32px auto 0px auto;
  background-color: aliceblue;
  display: flex;
  margin-top: 70px;
`;

export const ToolBox = styled.div`
  /* background-color: aliceblue; */
  justify-content: center;
  align-items: center;
`;

export const ToolsButton = styled.button`
  border-radius: 50px;
  width: 70px;
  height: 70px;
  border: none;
  &:hover {
    background-color: #f0f0f0;
  }
  background-color: inherit;
  margin-left: 5px;
  border-radius: 35px;
`;

export const ToolsIcons = styled.img`
  width: 28px;
  height: 28px;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const ProfileButton = styled.button`
  display: flex;
  height: 70px;
  width: 120px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 35px;
  border: none;
  align-items: center;
  background-color: inherit;
`;

export const ProfileIcon = styled.img`
  margin-left: 7px;
  width: 15px;
  height: 15px;
  color: black;
`;

export const SaveButton = styled.button`
  margin-left: 5px;
  height: 70px;
  width: 90px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: red;
  border-radius: 35px;
  border: none;
`;
