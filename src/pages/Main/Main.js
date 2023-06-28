import React, { useEffect, useState } from "react";
import MediaPin from "../../components/common/MediaPin/MediaPin";
import * as S from "./Main.style";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { styled } from "styled-components";

const Main = () => {
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

  const breakpointColumnsObj = {
    default: 4,
  };

  return (
    <S.Wrapper>
      <S.MyMasonryGrid breakpointCols={breakpointColumnsObj}>
        {pinData &&
          pinData.map((item, index) => (
            <div key={index}>
              <StyledLink to={`/pin/${item.id}`}>
                <MediaPin
                  title={item.title}
                  pinImg={item.imgUrl}
                  profileImg={item.profileImg}
                  userName={item.userName}
                />
              </StyledLink>
            </div>
          ))}
      </S.MyMasonryGrid>
    </S.Wrapper>
  );
};

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default Main;
