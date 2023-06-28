import styled, { css } from "styled-components";

const UpdateContent = ({topic, count, date, url1, url2, url3}) => {
    return (
        <ContentBox>
            <TitleArea>
                회원님이 좋아할 만한 <b>{topic}</b> 관련 핀 {count}개 
                <DateSpan> · {date}일</DateSpan>
            </TitleArea>
            <ContentImages>
                    <ContentImg1 src={url1} />
                    <ContentImg2 src={url2} />
                    <ContentImg3 src={url3} />
            </ContentImages>
        </ContentBox>
    );
}

export default UpdateContent;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;
    }
`;



const TitleArea = styled.div`
    font-size: 16px;
`;

const DateSpan = styled.span`
    color: gray;
`;

const ContentImages = styled.div`
  width: 300px;
  height: auto;
  margin: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: calc((100% - 20px) / 3);
    height: 180px;
    object-fit: cover;
  }
`;


const ContentImg1 = styled.img`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const ContentImg2 = styled.img`

`;

const ContentImg3 = styled.img`
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;