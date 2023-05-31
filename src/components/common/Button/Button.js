import styled from "styled-components";

const Button = ({name, imgName, imgSize}) => {
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

export const ButtonBox = styled.div`
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
`;