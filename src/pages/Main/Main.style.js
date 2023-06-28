import { styled } from "styled-components";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin-top: 7%;
`;

export const MyMasonryGrid = styled(Masonry)`
  display: flex;
  margin-left: -15px;
  width: 1500px;
`;
