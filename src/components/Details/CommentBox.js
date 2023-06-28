import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./CommentBox.style";
import Button from "../common/Button/Button";

import heart from "./../../assets/like_gray.svg";
import ellipsis from "./../../assets/ellipsis_gray.svg";

const CommentBox = ({ comments }) => {
  const [isDrop, setIsDrop] = useState(false);

  useEffect(() => {
    console.log("그머냐.. 댓글들입니다", comments);
  }, []);

  const dropComment = () => {
    setIsDrop(!isDrop);
  };

  const formatTimestamp = (timestamp) => {
    const currentTimestamp = Date.now() / 1000; // Get current timestamp in seconds
    const commentTimestamp = timestamp.seconds; // Assuming the timestamp is in seconds

    const elapsedSeconds = currentTimestamp - commentTimestamp;
    const elapsedHours = Math.floor(elapsedSeconds / 3600); // Convert seconds to hours

    if (elapsedHours === 0) {
      return "0h";
    } else if (elapsedHours === 1) {
      return "1h";
    } else {
      return `${elapsedHours}h`;
    }
  };

  return (
    <div>
      <S.CommentCount>
        <div style={{ fontWeight: "700", fontSize: "20px" }}>
          댓글 {comments.length}개
        </div>
        <S.CommentButton onClick={dropComment}>
          <Button
            imgName="arrow-down"
            imgSize={16}
            style={{
              transform: isDrop ? "none" : "rotate(270deg)",
            }}
          />
        </S.CommentButton>
      </S.CommentCount>

      <S.CommnetContainer>
        {isDrop &&
          comments.map((item) => (
            <S.CommentInfo key={item.id}>
              <S.CommentTexts>
                {item.profileImage ? (
                  <S.CommentImg alt="" src={item.profileImage} />
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
                  {item.nickname}
                </S.CommentText>
                <S.CommentText style={{ marginLeft: "3px" }}>
                  {item.text}
                </S.CommentText>
              </S.CommentTexts>

              <S.CommentBottom>
                <S.CommentText>{formatTimestamp(item.timestamp)}</S.CommentText>
                <S.CommentText
                  style={{
                    fontWeight: "700",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <S.CommentIcon
                    src={heart}
                    alt="like"
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "0px 6px",
                    }}
                  />
                  {item.heartCount}
                </S.CommentText>
                <S.CommentText>
                  <S.CommentIcon
                    src={ellipsis}
                    alt="ellipsis"
                    style={{ width: "16px", height: "16px" }}
                  />
                </S.CommentText>
              </S.CommentBottom>
            </S.CommentInfo>
          ))}
      </S.CommnetContainer>
    </div>
  );
};

CommentBox.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      profileImg: PropTypes.string,
      userName: PropTypes.string.isRequired,
      commentText: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      likeIcon: PropTypes.string.isRequired,
      likeCount: PropTypes.number.isRequired,
      ellipsisIcon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommentBox;
