import React, { useEffect, useState } from "react";
import CommentData from "../../mocks/dummy_comment";

import * as S from "./CommentBox.style";
import arrowDown from "./../../assets/arrow-down.svg";
import ellipsis from "./../../assets/ellipsis_gray.svg";
import like from "./../../assets/like_gray.svg";

const CommentBox = () => {
  const [isDrop, setIsDrop] = useState(false);

  const dropComment = () => {
    isDrop ? setIsDrop(false) : setIsDrop(true);
    console.log("클릭함");
  };

  return (
    <div>
      <S.CommentCount>
        <div style={{ fontWeight: "700", fontSize: "27px" }}>댓글 4개</div>
        <S.CommentButton onClick={() => dropComment()}>
          <S.CommentIcon
            src={arrowDown}
            alt="arrow-down"
            style={{
              transform: isDrop ? "none" : "rotate(270deg)",
            }}
          />
        </S.CommentButton>
      </S.CommentCount>

      <S.CommnetContainer>
        {CommentData &&
          isDrop &&
          CommentData.map((item) => (
            <S.CommentInfo>
              <S.CommentTexts>
                {item.profileImg ? (
                  <S.CommentImg alt="" src={item.profileImg} />
                ) : (
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "lightgray",
                      borderRadius: "50px",
                    }}
                  ></div>
                )}
                <S.CommentText style={{ fontWeight: "700" }}>
                  {item.userName}
                </S.CommentText>
                <S.CommentText style={{ marginLeft: "3px" }}>
                  뭔가 내용내용
                </S.CommentText>
              </S.CommentTexts>

              <S.CommentBottom>
                <S.CommentText>20h</S.CommentText>
                <S.CommentText
                  style={{
                    fontWeight: "700",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <S.CommentIcon
                    src={like}
                    alt="like"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  200
                </S.CommentText>
                <S.CommentText>
                  <S.CommentIcon src={ellipsis} alt="ellipsis" />
                </S.CommentText>
              </S.CommentBottom>
            </S.CommentInfo>
          ))}
      </S.CommnetContainer>
    </div>
  );
};

export default CommentBox;
