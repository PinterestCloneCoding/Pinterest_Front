import styled, { css } from "styled-components";

const UpdateContent = ({topic, count, date, url1, url2, url3}) => {
    return (
        <ContentBox>
            <TitleArea>
                회원님이 좋아할 만한 <b>{topic}</b> 관련 핀 {count}개 
                <DateSpan>{date}일</DateSpan>
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
`;

const TitleArea = styled.div`

`;

const DateSpan = styled.span`
    color: gray;
`;

const ContentImages = styled.div`
    width: 300px;
    height: 250px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

const ContentImg1 = styled.img`
    clip-path: inset(0px 88px 140px 0px);
`;

const ContentImg2 = styled.img`
    clip-path: inset(0px 88px 140px 0px);
`;

const ContentImg3 = styled.img`
    clip-path: inset(0px 88px 140px 0px);
`;

const ContentImgBox = styled.div`
    clip: rect(0px 88px 140px 0px);
`;