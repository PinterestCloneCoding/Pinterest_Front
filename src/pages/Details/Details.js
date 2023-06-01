import * as S from "./Details.style";
import backArrow from "./../../assets/directional-arrow-left.svg";
import download from "./../../assets/download.svg";
import ellipsis from "./../../assets/ellipsis.svg";
import link from "./../../assets/link.svg";
import arrowDown from "./../../assets/arrow-down.svg";

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
                <S.ToolBox>
                  <S.ToolsButton>
                    <S.ToolsIcons src={ellipsis} alt="ellipsis" />
                  </S.ToolsButton>
                  <S.ToolsButton>
                    <S.ToolsIcons src={download} alt="download" />
                  </S.ToolsButton>
                  <S.ToolsButton>
                    <S.ToolsIcons src={link} alt="link" />
                  </S.ToolsButton>
                </S.ToolBox>
                <S.ButtonBox>
                  <S.ProfileButton>
                    <div style={{ marginLeft: "10px" }}>프로필</div>
                    <S.ProfileIcon src={arrowDown} alt="arrow-down" />
                  </S.ProfileButton>
                  <S.SaveButton>
                    <div>저장</div>
                  </S.SaveButton>
                </S.ButtonBox>
              </S.PinHeader>
            </S.PinChatBox>
          </S.PinChat>
        </S.Pin>
      </S.Section>
    </>
  );
};

export default Details;
