import styled from "styled-components";

export const CommnetContainer = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: start;
`;

export const CommentCount = styled.div`
  align-items: center;
  display: flex;
  margin: 25px auto;
`;

export const CommentButton = styled.button`
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  border: none;

  &:hover {
    background-color: #f0f0f0;
  }
  background-color: inherit;
  border-radius: 30px;
`;

export const CommentIcon = styled.img`
  margin-top: 4px;
  width: 23px;
  height: 23px;

  fill: red;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentImg = styled.img`
  width: 32px;
  height: 32px;
  background-color: lightgray;
  border-radius: 30px;
  margin: 0px 4px;
`;

export const CommentTexts = styled.div`
  display: flex;
`;

export const CommentText = styled.span`
  font-size: 16px;
  margin: 0 4px;
`;

export const CommentBottom = styled.span`
  display: flex;
  flex-direction: row;
  gap: 40px;

  align-items: center;
  color: gray;
`;
