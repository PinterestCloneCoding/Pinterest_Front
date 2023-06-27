import React from "react";
import styled from "styled-components";
import MediaPin from "../../components/common/MediaPin/MediaPin";
import PinData from "../../mocks/dummy";

import * as S from "./Main.style";

const Main = () => {
  return (
    <S.Wrapper>
      <S.Container>
        {PinData &&
          PinData.map((item) => (
            <MediaPin
              key={item.id}
              title={item.title}
              pinImg={item.pinImg}
              profileImg={item.profileImg}
              userName={item.userName}
            />
          ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default Main;
