import React from "react";
import Masonry from "react-masonry-css";
import MediaPin from "../../components/common/MediaPin/MediaPin";
import PinData from "../../mocks/dummy";

import * as S from "./Main.style";

const Main = () => {
  const breakpointColumnsObj = {
    default: 5,
  };

  return (
    <S.Wrapper>
      <S.MyMasonryGrid
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
      >
        {PinData &&
          PinData.map((item) => (
            <div key={item.id}>
              <MediaPin
                title={item.title}
                pinImg={item.pinImg}
                profileImg={item.profileImg}
                userName={item.userName}
              />
            </div>
          ))}
      </S.MyMasonryGrid>
    </S.Wrapper>
  );
};

export default Main;
