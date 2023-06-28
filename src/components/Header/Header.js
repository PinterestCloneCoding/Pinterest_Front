import * as S from "./Header.style";
import { db, authService } from "../../firebase";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  collection,
  connectFirestoreEmulator,
  getDocs,
} from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import search from "../../assets/search.svg";
import Button from "../common/Button/Button";
import NoticeModal from "../Modal/NoticeModal/NoticeModal";
import AccountModal from "../Modal/AccountModal/AccountModal";


const Header = () => {
  const [input, setInput] = useState(" ");
  const [user, setUser] = useState(null);
  const [noticeModal, SetNoticeModal] = useState(false);
  const [accountModal, SetAccountModal] = useState(false);

  const { pinId } = useParams();
  const [pinData, setPinData] = useState([]);
  const [selectedPin, setSelectedPin] = useState(undefined);
  const [profileImage, setProfileImage] = useState();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authService, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    authService
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
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

      setProfileImage(user.photoURL);
    });

    return () => unsubscribe();
  }, []);

  return (
    <S.HeaderBox>
      <Link to={`/`}>
        <Button imgName="logo-icon" imgSize={24} Icon />
      </Link>
      <Link to={`/`}>
        <Button name="홈" default />
      </Link>
      <Link to={`/create`}>
        <Button name="만들기" imgName="arrow-down" imgSize={12} defaultIcon />
      </Link>
      <S.SearchBox>
        <img
          src={search}
          style={{ width: "16px", height: "16px" }}
          alt="search"
        />
        <form>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit"></button>
        </form>
      </S.SearchBox>
      <Button
        imgName="bell"
        imgSize={24}
        Icon
        // 알림 버튼 누르면 모달 창 보이게
        onClick={() => {
          SetNoticeModal(!noticeModal);
        }}
      />
      {noticeModal && <NoticeModal />}
      {user ? (
        <Link to={`/user`}>
          <S.StyledProfileBox>
            <S.StyledProfile src={profileImage} alt="user profile" />
          </S.StyledProfileBox>
        </Link>
      ) : (
        <Button name="로그인" primary onClick={handleGoogleLogin} />
      )}
      <Button
        imgName="arrow-down"
        imgSize={12}
        Icon
        onClick={() => {
          SetAccountModal(!accountModal);
        }}
      />
      {accountModal && <AccountModal />}
    </S.HeaderBox>
  );
};

export default Header;
