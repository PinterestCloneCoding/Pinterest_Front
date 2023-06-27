import React from "react";
import MediaPin from "../../components/common/MediaPin/MediaPin";
import PinData from "../../mocks/dummy";

import * as S from "./Main.style";
import { Link } from "react-router-dom";

const Main = () => {
  const breakpointColumnsObj = {
    default: 5,
  };

  return (
    <S.Wrapper>
      <S.MyMasonryGrid breakpointCols={breakpointColumnsObj}>
        {PinData &&
          PinData.map((item) => (
            <div key={item.id}>
              <S.StyledLink to={`/pin/${item.id}`}>
                <MediaPin
                  title={item.title}
                  pinImg={item.pinImg}
                  profileImg={item.profileImg}
                  userName={item.userName}
                />
              </S.StyledLink>
            </div>
          ))}
      </S.MyMasonryGrid>
    </S.Wrapper>
  );
};

export default Main;
