import * as S from "./MediaPin.style";

const MediaPin = ({title, pinImg, profileImg, userName}) => {
    return (
        <S.PinBox>
            <S.PinImageBox>
                {pinImg ? 
                    <img 
                        src={require(`../../../assets/${pinImg}.svg`)} 
                        alt={pinImg}
                    /> 
                    : null
                }
            </S.PinImageBox>
                {title ? title : null}
            <S.PintProfile>
                {{profileImg} ? <img src={profileImg} alt=""/> : null}
                {userName ? userName : null}
            </S.PintProfile>
        </S.PinBox>
    )
}

export default MediaPin;