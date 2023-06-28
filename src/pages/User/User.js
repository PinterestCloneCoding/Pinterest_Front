import styled from "styled-components";
import Masonry from "react-masonry-css";
import { collection, getDocs } from "firebase/firestore";
import { db, authService } from "../../firebase";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MediaPin from "../../components/common/MediaPin/MediaPin";
import Button from "../../components/common/Button/Button";

const User = () => {
  const [profileImage, setProfileImage] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const [createdPin, setCreatedPin] = useState();
  const [savedPin, setSavedPin] = useState();

  const { pinId } = useParams();
  const [pinData, setPinData] = useState([]);
  const [selectedPin, setSelectedPin] = useState(undefined);
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

  useEffect(() => {
    setSelectedPin(pinData.find((pin) => pin.id === pinId));
  }, [pinData, pinId]);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      console.log(user);

      setNickname(user.displayName);
      setProfileImage(user.photoURL);
      setEmail(user.email);
          });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <UserBox>
        <AccountInfo>
          <ProfileImg src={profileImage} />
          <UserName>{nickname}</UserName>
          <UserEmail>{email}</UserEmail>
          <p style={{ margin: "4px auto" }}>팔로잉 0명</p>
        </AccountInfo>
        <ButtonsBox>
          <>
            <StyledButton>공유</StyledButton>
          </>
          <>
            <StyledButton style={{ width: "100px" }}>프로필 수정</StyledButton>
          </>
        </ButtonsBox>
        <PinButtonBox>
          <>
            <StyledPinButton onClick={() => setCreatedPin(!createdPin)}>생성됨</StyledPinButton>
          </>
          <>
            <StyledPinButton onClick={() => setSavedPin(!savedPin)}>저장됨</StyledPinButton>
          </>
        </PinButtonBox>
      </UserBox>

      {/* 유저의 핀 보여주는 부분 */}
      <PinsArea>
        {savedPin &&       
          <PinButtonBox style={{ justifyContent: "space-between" }}>
            <>
              <Button imgName="filter" imgSize={20} Icon />
            </>
            <>
              <Button imgName="add" imgSize={20} Icon />
            </>
          </PinButtonBox>
        }
        {/* 생성됨 */}
        {createdPin && 
              <Wrapper>
              <MyMasonryGrid breakpointCols={breakpointColumnsObj}>
                {pinData &&
                  pinData.map((item, index) => (
                    <div key={index}>
                      <StyledLink to={`/pin/${item.id}`}>
                        <MediaPin
                          title={item.title}
                          pinImg={item.imgUrl}
                          profileImg={item.profileImage}
                          userName={item.nickname}
                        />
                      </StyledLink>
                    </div>
                  ))}
              </MyMasonryGrid>
            </Wrapper>}

            {/* 저장됨 */}
            {savedPin && 
              <Wrapper>
              <MyMasonryGrid breakpointCols={breakpointColumnsObj}>
                {pinData &&
                  pinData.map((item, index) => (
                    <div key={index}>
                      <StyledLink to={`/pin/${item.id}`}>
                        <MediaPin
                          title={item.title}
                          pinImg={item.imgUrl}
                          profileImg={item.profileImage}
                          userName={item.nickname}
                        />
                      </StyledLink>
                    </div>
                  ))}
              </MyMasonryGrid>
            </Wrapper>}      
        </PinsArea>
    </>
  )
};

export default User;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 34px auto;
`;

const ProfileImg = styled.img`
  clip-path: circle();
  margin: 4px auto;
`;

const UserName = styled.p`
  box-sizing: border-box;
  font-size: 32px;
  font-weight: 700;
  margin: 4px auto;
`;

const UserEmail = styled.p`
  font-size: 16px;
  color: gray;
  margin: 4px auto;
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PinButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 40px auto;
`;

const PinsArea = styled.div`
  margin: 0px 30px;
`;

const StyledButton = styled.div`
    width: 60px;
    padding: 10px 12px;
    text-align: center;
    color: black;
    font-size: 16px;
    font-weight: 700;
    border-radius: 35px;
    border: none;
    background-color: #F1F1F1;

    &:hover {
        cursor: pointer;
        background-color: #F1F1F1;
    }
    margin: 0px 6px;
`;

const StyledPinButton = styled.div`
  font-weight: 700;
  font-size: 16px;

  &:hover,
  &:focus {
    cursor: pointer;
    border-bottom: 3px solid black;
  }

  margin: 0px 14px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const MyMasonryGrid = styled(Masonry)`
  display: flex;
  margin-left: -15px;
  width: auto;
`;