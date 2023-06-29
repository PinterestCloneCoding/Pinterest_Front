import * as S from "./Details.style";
import backArrow from "./../../assets/directional-arrow-left.svg";
import download from "./../../assets/download.svg";
import ellipsis from "./../../assets/ellipsis.svg";
import Button from "../../components/common/Button/Button";

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
import DummyPinData from "../../mocks/dummy";

const Details = () => {

  const [user1, setUser] = useState(0);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user);

      if(user){
        console.log("애 이거 비ㅓㅇㅅ어")
        setUser(1)
     
      }
       console.log("아아아ㅏ앙",user1);
      });
  },[]);



  const { pinId } = useParams();
  const [profileImage, setProfileImage] = useState("");
  const [nickname, setNickname] = useState("");
  const [commentText, setCommentText] = useState("");

  const [comments, setComments] = useState([]);

  const [pinData, setPinData] = useState([]);
  const [selectedPin, setSelectedPin] = useState(undefined);
  const [dummySelectedPin, setDummySelectedPin] = useState([]);

  const breakpointColumnsObj = {
    default: 5,
  };

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      setNickname(user.displayName);
      setProfileImage(user.ImageUrl);
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

  useEffect(() => {
    setDummySelectedPin(DummyPinData.find((pin) => pin.id === Number(pinId)));
     },[]);

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
          {selectedPin ? (
            <S.PinImg alt="" src={selectedPin.imgUrl} />
          ) : (
            <>
            {dummySelectedPin && (<S.PinImg alt=""src={dummySelectedPin.pinImg} />)}
            </>
          )}

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
                {selectedPin ? (
                  <S.Description>
                    <S.LinkText>
                      <S.PageLink href="">{selectedPin.link}</S.PageLink>
                    </S.LinkText>
                    <S.Title>{selectedPin.title}</S.Title>
                    <S.InnerText>{selectedPin.description} </S.InnerText>
                  </S.Description>
                ) : (
                  <S.Description>
                    <S.LinkText>
                      <S.PageLink href=""></S.PageLink>
                    </S.LinkText>

                    {dummySelectedPin && (<S.Title>{dummySelectedPin.title}</S.Title>)}
                    
                  </S.Description>
                )}

                <S.PinFooter>
                  <S.WriterInfo>
                    {selectedPin ? (
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
                    ) : (
                      <>

                      {dummySelectedPin && ( <S.WriterImg alt="" src={dummySelectedPin.profileImg} />)}
                        
                        <S.WriterTexts>

                        {dummySelectedPin && (
                          <S.WriterText style={{ fontWeight: "700" }}>
                            {dummySelectedPin.userName}
                        </S.WriterText>
                        )}
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

                  <S.CommentPostBox>
                    <S.CommentInput
                      placeholder="댓글을 입력하세요"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <Button name="등록" onClick={submitComment} primary style={{ width: "50px" }} />
                  </S.CommentPostBox>
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
