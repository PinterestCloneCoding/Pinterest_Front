import styled from "styled-components";

/**맨 바깥 */
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

/**중간 네모네모 */
export const Pin = styled.div`
  display: flex;
  border-radius: 32px;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

/**왼쪽의 이미지 */
export const PinImg = styled.img`
  width: 50%;
  height: 700px;
  background-color: lightgray;
  border-radius: 32px 0px 0px 32px;
`;

/**오른쪽의 공간 */
export const PinChat = styled.div`
  width: 50%;
  border-radius: 0px 32px 32px 0px;
`;

export const PinChatBox = styled.div`
  text-align: left;
  align-items: center;
`;

/**맨 위쪽에 있는 뭐.. 아이콘들이랑 버튼 있는 거 */
export const PinHeader = styled.div`
  width: 90%;
  justify-content: space-between;
  margin: 32px auto 0px auto;
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

/**중간에 제목이나 내용 들어간 공간 */
export const Description = styled.div`
  margin: 10px auto 0px auto;
  width: 90%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

export const LinkText = styled.p`
  width: 100;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
`;

export const PageLink = styled.a`
  outline: none;
  text-decoration: none;
  border-bottom: 1px solid black;
  &:link,
  &:visited,
  &:hover {
    color: black;
    text-decoration: none;
  }

  &.title {
    border: none;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
`;

export const InnerText = styled.p`
  width: 100;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
`;

/**맨 아래에 있는 뭐.. */
export const PinFooter = styled.div`
  margin: 70px auto auto 30px;
  width: 90;
  flex-direction: column;
  align-items: center;
`;

export const CommentConatiner = styled.div`
  background-color: aliceblue;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const CommentCount = styled.div`
  align-items: center;
  display: flex;
`;

export const CommentButton = styled.button`
  border-radius: 50px;
  width: 60px;
  height: 60px;
  border: none;

  &:hover {
    background-color: #f0f0f0;
  }
  background-color: inherit;
  border-radius: 30px;
`;

export const CommentIcon = styled.img`
  margin-top: 15px;
  width: 23px;
  height: 23px;
`;
