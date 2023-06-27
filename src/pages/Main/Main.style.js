import { styled } from "styled-components";
import Masonry from "react-masonry-css";

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
