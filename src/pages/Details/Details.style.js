import styled from "styled-components";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";

export const Section = styled.section`
  justify-content: initial;
  align-items: start;
  margin: 10px auto;
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

export const PinImg = styled.img`
  width: 50%;
  height: 700px;
  background-color: lightgray;
  border-radius: 32px 0px 0px 32px;
`;

export const PinChat = styled.div`
  width: 50%;
  border-radius: 0px 32px 32px 0px;
  height: 100%;
`;

export const PinChatBox = styled.div`
  text-align: left;
  align-items: center;
  margin: auto 10px;
  height: 100%;
`;

export const PinHeader = styled.div`
  width: 90%;
  justify-content: space-between;
  margin: 32px auto 0px auto;
  display: flex;
  margin-top: 70px;
`;

export const ToolBox = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ToolsButton = styled.button`
  border-radius: 50px;
  width: 50px;
  height: 50px;
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

export const ScrollBox = styled.div`
  max-height: 480px;
  overflow-y: scroll;
`;

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
  font-weight: 650;
  font-size: 28px;
`;

export const InnerText = styled.p`
  width: 100;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`;

export const PinFooter = styled.div`
  margin: 50px auto auto 20px;
  width: 90;
  flex-direction: column;
`;

export const WriterInfo = styled.div`
  display: flex;
  flex-direction: low;
  align-items: center;
`;

export const WriterImg = styled.img`
  width: 52px;
  height: 52px;
  background-color: lightgray;
  border-radius: 32px;
`;

export const WriterTexts = styled.div`
  margin: auto;
  margin-left: 13px;
`;

export const WriterText = styled.div`
  font-size: 16px;
`;

export const FollowButton = styled.button`
  margin-right: 35px;
  height: 70px;
  width: 110px;
  font-size: 20px;
  font-weight: 700;

  border-radius: 35px;
  border: none;
`;

// 메인 꺼 갖다쓰기

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 15px;
`;

export const MyMasonryGrid = styled(Masonry)`
  display: flex;
  margin-left: -15px;
  width: auto;
`;
