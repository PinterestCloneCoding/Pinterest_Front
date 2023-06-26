import * as S from "./Header.style";
import search from "../../assets/search.svg";
import Button from "../common/Button/Button";


const Header = () => {
    return (
        <S.HeaderBox>
            <Button imgName="logo-icon" imgSize={24} />
            <Button name="홈" imgName="arrow-down" imgSize={12} />
            <Button name="만들기" imgName="arrow-down" imgSize={12} />
            <S.SearchBox>
                <img src={search} style={{width: '20px', height: '20px'}} alt="search"/>
                <S.InputField placeholder="Search"/>
            </S.SearchBox>
            <Button imgName="bell" imgSize={24} />
            <Button imgName="profile-image" imgSize={24} />
            <Button imgName="arrow-down" imgSize={24} />
        </S.HeaderBox>
    );
}

export default Header;