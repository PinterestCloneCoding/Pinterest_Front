import styled from "styled-components";

export const PinBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PinImageBox = styled.div`
    border-radius: 30px;
    &:hover {
        background-color:rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`;

export const PintProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
`