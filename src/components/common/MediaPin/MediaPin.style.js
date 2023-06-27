import styled, { css } from "styled-components";

export const PinBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #111111;
  font-size: 14px;
  font-weight: bold;
  gap: 5px;

  margin-bottom: 15px;
`;

export const PinImageBox = styled.span``;

export const PinProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const NoneProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: #f1f1f1;
  font-size: 15px;
  font-weight: bold;
`;
