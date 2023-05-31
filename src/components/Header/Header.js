import * as S from "./Header.style";
import search from "../../assets/search.svg";
import arrowDown from "../../assets/arrow-down.svg";
import bell from "../../assets/bell.svg";
import logoIcon from "../../assets/logo-icon.svg";
import profileImage from "../../assets/profile-image.svg";


const Header = () => {
    return (
        <S.HeaderBox>
            <S.ButtonBox>
                <img src={logoIcon} style={{width: '20px', height: '20px'}} />
            </S.ButtonBox>
            <S.ButtonBox>홈</S.ButtonBox>
            <S.ButtonBox>
                만들기
                <img src={arrowDown} style={{width: '12px', height: '12px'}} />
            </S.ButtonBox>
            <S.SearchBox>
                <img src={search} style={{width: '20px', height: '20px'}}/>
                <S.InputField placeholder="Search"/>
            </S.SearchBox>
            <S.ButtonBox>
                <img src={bell} style={{width: '20px', height: '20px'}} />
            </S.ButtonBox>
            <S.ButtonBox>
                <img src={profileImage} style={{width: '24px', height: '24px'}} />
            </S.ButtonBox>
            <S.ButtonBox>
                <img src={arrowDown} style={{width: '12px', height: '12px'}} />
            </S.ButtonBox>
        </S.HeaderBox>
    );
}

export default Header;