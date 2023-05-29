import * as S from "./Details.style";
import backArrow from "./../../assets/directional-arrow-left.svg";
import download from "./../../assets/download.svg";
import ellipsis from "./../../assets/ellipsis.svg";
import link from "./../../assets/link.svg";

const Details = () => {
  return (
    <>
      <S.BackIcon>
        <S.BackArrow src={backArrow} alt="back arrow" />
      </S.BackIcon>
      <S.Section>
        <S.Pin>
          <S.PinImg alt="" />
          <S.PinChat>
            <S.PinChatBox>
              <S.PinHeader>
                <S.ToolsIcons src={download} alt="download" />
                <S.ToolsIcons src={ellipsis} alt="ellipsis" />
                <S.ToolsIcons src={link} alt="link" />
              </S.PinHeader>
            </S.PinChatBox>
          </S.PinChat>
        </S.Pin>
      </S.Section>
    </>
  );
};

export default Details;
