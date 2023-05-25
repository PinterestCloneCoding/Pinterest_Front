import * as S from "./Details.style";
import backArrow from "./../../assets/directional-arrow-left.svg";
import download from "./../../assets/download.svg";
import ellipsis from "./../../assets/ellipsis.svg";
import link from "./../../assets/link.svg";

const Details = () => {
  return (
    <>
      <S.Section>
        <S.BackIcon>
          <S.Svg src={backArrow} alt="back arrow" />
        </S.BackIcon>

        <S.Pin>
          <S.PinImg alt="" />
          <S.PinChat>
            <S.PinChatBox></S.PinChatBox>
          </S.PinChat>
        </S.Pin>
      </S.Section>
    </>
  );
};

export default Details;
