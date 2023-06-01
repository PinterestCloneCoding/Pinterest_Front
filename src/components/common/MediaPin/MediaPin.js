import * as S from "./MediaPin.style";

const MediaPin = ({title, pinImg, profileImg, userName}) => {
    return (
        <S.PinBox>
            <S.PinImageBox>
                { pinImg && <img src={pinImg} alt={pinImg} style={{
                    height: 'auto', maxWidth: '100%', borderRadius: '30px'
                    }} /> 
                }
            </S.PinImageBox>
                {title && title}
            <S.PinProfile>
                { profileImg ? 
                    <img src={profileImg} alt="" style={{borderRadius: '50px', width: '32px', height: '32px'}}/> 
                    : <S.NoneProfile>{userName}</S.NoneProfile> }
                { userName && userName }
            </S.PinProfile>
        </S.PinBox>
    )
}

export default MediaPin;