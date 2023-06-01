import * as S from "./Header.style";
import search from "../../assets/search.svg";
import Button from "../common/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {
    const [input, setInput] = useState(" ");
    const [noticeModal, SetNoticeModal] = useState(false);
    const [accountModal, SetAccountModal] = useState(false);

    return (
        <S.HeaderBox>
            <Link to={`/`}>
                <Button imgName="logo-icon" imgSize={24} />
            </Link>
            <Link to={`/`}>
                <Button name="홈" imgName="arrow-down" imgSize={12} />
            </Link>
            <Link to={`/create`}>
                <Button name="만들기" imgName="arrow-down" imgSize={12} />
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
                onClick={() => {SetNoticeModal(!noticeModal);}}
            /> 
            {noticeModal && <NoticeModal />}
            <Link to={`/user`}>
                <Button imgName="profile-image" imgSize={24} />            
            </Link>
            <Button 
                imgName="arrow-down" 
                imgSize={24} 
                onClick={() => {SetAccountModal(!accountModal);}}
            /> 
            {accountModal && <AccountModal />}
        </S.HeaderBox>
    );
}

const NoticeModal = () => {
    return (
        <>
            Notice
        </>
    )
}

const AccountModal = () => {
    return (
        <>
            Account
        </>
    )
}

export default Header;