import styled, { css } from "styled-components";

const Button = ({name, imgName, imgSize, type}) => {
    return (
        <ButtonBox>
                {name ? name : null}
                {imgName ? 
                    <img 
                        src={require(`../../../assets/${imgName}.svg`)} 
                        alt={imgName}
                        style={{width: `${imgSize}px`, height: `${imgSize}px`}}
                    /> 
                    : null
                }
        </ButtonBox>
    )
}

export default Button;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50px;
    &:hover {
        cursor: pointer;
        background-color: #F1F1F1;
    }
    gap: 0px 10px;
    font-size: 16px;
`;