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

import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { authService, db } from "../../firebase";
import Button from "../../components/common/Button/Button";

const Details = () => {
  const { pinId } = useParams();
  const [profileImage, setProfileImage] = useState("");
  const [nickname, setNickname] = useState("");
  const [commentText, setCommentText] = useState("");

  const [comments, setComments] = useState([]);

  const [pinData, setPinData] = useState([]);
  const [selectedPin, setSelectedPin] = useState(undefined);
  const breakpointColumnsObj = {
    default: 5,
  };

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      console.log(user);
      setNickname(user.displayName);
      setProfileImage(user.photoURL);
    });

    return () => unsubscribe();
  }, []);

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

    const fetchComments = async () => {
      const commentsCollection = collection(db, "comments");
      const commentsSnapshot = await getDocs(commentsCollection);
      const newComments = [];
      commentsSnapshot.forEach((doc) => {
        const comment = {
          id: doc.id,
          ...doc.data(),
        };
        newComments.push(comment);
      });
      setComments(newComments);
    };

    fetchPinData();
    fetchComments();
  }, []);

  useEffect(() => {
    setSelectedPin(pinData.find((pin) => pin.id === pinId));
  }, [pinData, pinId]);

  const submitComment = async () => {
    try {
      const user = authService.currentUser;
      if (!user) {
        return;
      }

      const newComment = {
        text: commentText,
        profileImage: profileImage,
        nickname: nickname,
        timestamp: serverTimestamp(),
        heartCount: 0,
      };

      const commentsCollection = collection(db, "comments");
      await addDoc(commentsCollection, newComment);

      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to={`/`}>
        <S.BackIcon>
          <S.BackArrow src={backArrow} alt="back arrow" />
        </S.BackIcon>
      </Link>

      <S.Section>
        <S.Pin>
          {selectedPin && <S.PinImg alt="" src={selectedPin.imgUrl} />}

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
                {selectedPin && (
                  <S.Description>
                    <S.LinkText>
                      <S.PageLink href="">{selectedPin.link}</S.PageLink>
                    </S.LinkText>
                    <S.Title>{selectedPin.title}</S.Title>
                    <S.InnerText>{selectedPin.description} </S.InnerText>
                  </S.Description>
                )}

                <S.PinFooter>
                  <S.WriterInfo>
                    {selectedPin && (
                      <>
                        <S.WriterImg alt="" src={selectedPin.profileImage} />
                        <S.WriterTexts>
                          <S.WriterText style={{ fontWeight: "700" }}>
                            {selectedPin.nickname}
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
                      </>
                    )}
                    {/* <S.FollowButton>팔로우</S.FollowButton> */}
                  </S.WriterInfo>

                  <CommentContainer comments={comments} />

                  <div>
                    <input
                      placeholder="댓글을 입력하세요"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button onClick={submitComment}>등록</button>
                  </div>
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
