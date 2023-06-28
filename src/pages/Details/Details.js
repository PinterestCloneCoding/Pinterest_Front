import * as S from "./Details.style";
import backArrow from "./../../assets/directional-arrow-left.svg";
import download from "./../../assets/download.svg";
import ellipsis from "./../../assets/ellipsis.svg";

import link from "./../../assets/link.svg";
import arrowDown from "./../../assets/arrow-down.svg";
import { Link, useParams } from "react-router-dom";

import CommentContainer from "../../components/Details/CommentBox";

// 곧 지울거
import MediaPin from "../../components/common/MediaPin/MediaPin";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Button from "../../components/common/Button/Button";

const Details = () => {
  const [pinData, setPinData] = useState([]);

  const breakpointColumnsObj = {
    default: 5,
  };

  useEffect(() => {
    const fetchPinData = async () => {
      const pinsCollection = collection(db, "photo");
      const pinsSnapshot = await getDocs(pinsCollection);
      const newPinData = [];
      pinsSnapshot.forEach((doc) => {
        const pin = {
          id: doc.id,
          ...doc.data(),
        };
        newPinData.push(pin);
      });
      setPinData(newPinData);
    };

    fetchPinData();
  }, []);

  const { pinId } = useParams();

  return (
    <>
      <Link to={`/`}>
        <S.BackIcon>
          <S.BackArrow src={backArrow} alt="back arrow" />
        </S.BackIcon>
      </Link>

      <S.Section>
        <S.Pin>
          <S.PinImg alt="" />
          <S.PinChat>
            <S.PinChatBox>
              <S.PinHeader>
                <S.ToolBox>
                  <S.ToolsButton>
                    <S.ToolsIcons
                      src={ellipsis}
                      alt="ellipsis"
                      style={{ width: "18px", height: "18px" }}
                    />
                  </S.ToolsButton>
                  <S.ToolsButton>
                    <S.ToolsIcons
                      src={download}
                      alt="download"
                      style={{ width: "18px", height: "18px" }}
                    />
                  </S.ToolsButton>
                  <S.ToolsButton>
                    <S.ToolsIcons
                      src={link}
                      alt="link"
                      style={{ width: "18px", height: "18px" }}
                    />
                  </S.ToolsButton>
                </S.ToolBox>

                <S.ButtonBox>
                  <Link to="/" style={{ textDecorationLine: "none" }}>
                    <Button
                      name="프로필"
                      imgName="arrow-down"
                      imgSize={18}
                      defaultIcon
                    />
                    {/* <S.ProfileButton>
                      <div
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        프로필
                      </div>
                      <S.ProfileIcon src={arrowDown} alt="arrow-down" />
                    </S.ProfileButton> */}
                  </Link>
                  <Button
                    name="저장"
                    primary
                    style={{
                      width: "40px",
                    }}
                  />
                  {/* 
                  <S.SaveButton>
                    <div>저장</div>
                  </S.SaveButton> */}
                </S.ButtonBox>
              </S.PinHeader>

              <S.ScrollBox>
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
                      <S.WriterText style={{ color: "gray" }}>
                        팔로워 0명
                      </S.WriterText>
                    </S.WriterTexts>
                    <Button
                      name="팔로우"
                      default
                      style={{
                        width: "90px",
                        backgroundColor: "#F1F1F1",
                      }}
                    />
                    {/* <S.FollowButton>팔로우</S.FollowButton> */}
                  </S.WriterInfo>

                  <CommentContainer />
                </S.PinFooter>
              </S.ScrollBox>
            </S.PinChatBox>
          </S.PinChat>
        </S.Pin>
      </S.Section>

      {/* 지금까지 핀이었고 */}

      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>유사한 핀 더보기</h1>
      </div>

      <S.Wrapper>
        <S.MyMasonryGrid breakpointCols={breakpointColumnsObj}>
          {pinData &&
            pinData.map((item, index) => (
              <div key={index}>
                <S.StyledLink to={`/pin/${item.id}`}>
                  <MediaPin
                    title={item.title}
                    pinImg={item.imgUrl}
                    profileImg={item.profileImage}
                    userName={item.nickname}
                  />
                </S.StyledLink>
              </div>
            ))}
        </S.MyMasonryGrid>
      </S.Wrapper>
    </>
  );
};

export default Details;
