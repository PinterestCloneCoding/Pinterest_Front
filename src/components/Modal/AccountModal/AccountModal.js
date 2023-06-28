import styled, { css } from "styled-components";
import LoginedAccount from "./LoginedAccount";
import Button from "../../common/Button/Button";
import { Link, useParams } from "react-router-dom";
import {
    addDoc,
    collection,
    getDocs,
    serverTimestamp,
  } from "firebase/firestore";
import { authService, db } from "../../../firebase";
import { useEffect, useState } from "react";


const AccountModal = () => {
    const [profileImage, setProfileImage] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
  
    const { pinId } = useParams();
    const [pinData, setPinData] = useState([]);

  
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
      const unsubscribe = authService.onAuthStateChanged((user) => {
        console.log(user);
  
        setNickname(user.displayName);
        setProfileImage(user.photoURL);
        setEmail(user.email);
        });
  
      return () => unsubscribe();
    }, []);
  
    return (
        <ModalBox>
            <LoginAccountBox>
                <p>현재 로그인 계정</p>
                <MyAccount>
                    <LoginedAccount 
                        img={profileImage}
                        name={nickname}
                        personnal={true}
                        email={email}
                    />
                </MyAccount>
            </LoginAccountBox>
            <MyAccountInfoBox>
                <p>내 계정</p>
                <Button name="계정 추가" defaultLong />
                <Button name="Business 계정으로 전환" defaultLong />
            </MyAccountInfoBox>
            <MoreOptionBox>
                <p>옵션 더 보기</p>
                    <Button name="설정" defaultLong />
                    <Button name="홈피드 조정" defaultLong />
                    <Button name="Windows 앱 설치" defaultLong />
                    <Button name="개인정보 보호권" defaultLong />
                    <Button name="도움 받기" defaultLong />
                    <Button name="서비스 약관 보기" defaultLong />
                    <Button name="개인정보 보호정책 보기" defaultLong />
                    <Button name="베타 테스터 되기" defaultLong />
                    <Button name="로그아웃" defaultLong />
            </MoreOptionBox>
        </ModalBox>
    )
}

export default AccountModal;

const ModalBox = styled.div`
    width: 250px;
    height: 85%;
    position: fixed;

    top: 10%;
    right: 0%;

    border-radius: 16px;
    background-color: white;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    color: #111111;

    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 4px 15px;

    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const LoginAccountBox = styled.div`
    
`;

const MyAccount = styled.div`
`;

const MyAccountInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px 4px;
`;

const MoreOptionBox = styled.div`
    display: flex;
    flex-direction: column;

    gap: 4px 4px;
`;