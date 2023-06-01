import styled from "styled-components";

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;

    a {
        text-decoration: none;
    }
`;

export const InputField = styled.input`
    background-color: #F1F1F1;
    color: #767676;
    border: none;
    border-radius: 24px;
    width: 100%;
    height: 100%;
    padding: 14px 12px 14px 16px;
`;

export const SearchBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #efefef;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding: 0px 0px 0px 12px;

    form {
        display: flex;
        flex: 1;
    }

    form input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }

    form button {
        display: none;
    }

    input: focus {
        outline: none;
    }
`;