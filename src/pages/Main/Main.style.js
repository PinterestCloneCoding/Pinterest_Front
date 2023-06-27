import { styled } from "styled-components";

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

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Four columns */
  grid-gap: 15px;
  background-color: white;
`;
