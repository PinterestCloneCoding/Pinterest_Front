import styled, { css } from "styled-components";

const Button = ({name, imgName, imgSize, ...props}) => {
    return (
        // 스타일드 컴포넌트에 props(primary 등) 전달
        <ButtonBox {...props}>
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

    font-size: 16px;
    font-weight: 700;
    border-radius: 35px;
    border: none;

    ${(props) =>
        // ex) 홈 버튼
        props.default &&
        css`
            width: 48px;
            height: 48px;
        `
    }

    ${(props) =>
        // ex) 만들기 버튼
        props.defaultIcon &&
        css`
            width: 104px;
            height: 48px;
        `
    }

    ${(props) =>
        // ex) 알림 버튼
        props.Icon &&
        css`
            width: 56px;
            height: 56px;
        `
    }

    ${(props) =>
        // ex) 저장 버튼
        props.primary &&
        css`
            margin-left: 5px;
            width: 84px;
            height: 48px;
            font-size: 20px;
            font-weight: 700;
            color: white;
            background-color: red;
            border-radius: 35px;
            border: none;

            &:hover {
                cursor: pointer;
                background-color: #9B0000;
            }
        `
    }

    &:hover {
        cursor: pointer;
        background-color: #F1F1F1;
    }

    gap: 0px 10px;    
`;