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

              <S.Description>
                <S.LinkText>
                  <S.PageLink href="">히히 링크</S.PageLink>
                </S.LinkText>
                <S.Title>히히 제목</S.Title>
                <S.InnerText>
                  히히 내용히히 내용히히 내용히히 내용히히 내용히히 내용히히
                  내용히히 내용히히 내용히히 내용
                </S.InnerText>
              </S.Description>

              <S.PinFooter>
                <S.WriterInfo>
                  <S.WriterImg alt="" />
                  <S.WriterTexts>
                    <S.WriterText style={{ fontWeight: "700" }}>
                      이름
                    </S.WriterText>
                    <S.WriterText>팔로워 0명</S.WriterText>
                  </S.WriterTexts>
                  <S.FollowButton>팔로우</S.FollowButton>
                </S.WriterInfo>
                <S.CommentConatiner>
                  <S.CommentCount>
                    <div style={{ fontWeight: "700", fontSize: "27px" }}>
                      댓글 4개
                    </div>
                    <S.CommentButton>
                      <S.CommentIcon
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ transform: "rotate(270deg)" }}
                      />
                      {/* 그 머시냐.. 늘렸다 줄였다 해야댐
                      <S.CommentIcon src={arrowDown} alt="arrow-down" /> */}
                    </S.CommentButton>
                  </S.CommentCount>
                </S.CommentConatiner>
              </S.PinFooter>
            </S.PinChatBox>
          </S.PinChat>
        </S.Pin>
      </S.Section>
    </>
  );
};

export default Details;
