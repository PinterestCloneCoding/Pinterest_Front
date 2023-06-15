import * as S from "./Header.style";
import search from "../../assets/search.svg";
import Button from "../common/Button/Button";
import NoticeModal from "../Modal/NoticeModal/NoticeModal";
import AccountModal from "../Modal/AccountModal/AccountModal";
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {
    const [input, setInput] = useState(" ");
    const [noticeModal, SetNoticeModal] = useState(false);
    const [accountModal, SetAccountModal] = useState(false);

    return (
        <S.HeaderBox>
            <Link to={`/`}>
                <Button 
                    imgName="logo-icon" 
                    imgSize={24} 
                    Icon
                />
            </Link>
            <Link to={`/`}>
                <Button 
                    name="홈" 
                    default
                />
            </Link>
            <Link to={`/create`}>
                <Button 
                    name="만들기" 
                    imgName="arrow-down" 
                    imgSize={12} 
                    defaultIcon 
                />
            </Link>
            <S.SearchBox>
                <img src={search} style={{width: '16px', height: '16px'}} alt="search"/>
                <form>
                        <input type="text" placeholder="Search" onChange={(e) => setInput(e.target.value)} />
                        <button type="submit"></button>
                </form>
            </S.SearchBox>
            <Button 
                imgName="bell" 
                imgSize={24}
                Icon 
                // 알림 버튼 누르면 모달 창 보이게
                onClick={() => {SetNoticeModal(!noticeModal);}}
            /> 
            {noticeModal && <NoticeModal />}
            <Link to={`/user`}>
                <Button 
                    imgName="profile-image" 
                    imgSize={24} 
                    Icon
                />            
            </Link>
            <Button 
                imgName="arrow-down" 
                imgSize={12} 
                Icon
                onClick={() => {SetAccountModal(!accountModal);}}
            /> 
            {accountModal && <AccountModal />}
        </S.HeaderBox>
    );
}

export default Header;