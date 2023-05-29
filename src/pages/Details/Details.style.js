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
  width: 48px;
  height: 48px;
  border: none;
  background-color: white;
`;

export const BackArrow = styled.img`
  width: 30px;
  height: 30px;
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
  height: 60px;
  margin: 32px auto 0px auto;
`;

export const ToolsIcons = styled.img`
  width: 50px;
  height: 50px;
  background-color: aliceblue;
`;
