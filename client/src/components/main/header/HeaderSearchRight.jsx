import React, { useEffect, useState } from "react";
import { PiBellLight, PiBookmarkSimpleLight, PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import HeaderProfile from "./HeaderProfile";
import { getUser } from './../../../pages/utill/sessionStorage';
import { TfiSearch } from 'react-icons/tfi';
import axios from "axios";

export default function HeaderSearchRight() {
  const userInfo = getUser();
  const [showProfile, setShowProfile] = useState("header_nav_popup_profile");
  const toggleProfileMenu = (e) => {
    if (showProfile === "header_nav_popup_profile") {
      setShowProfile("header_nav_popup_profile active")
    } else {
      setShowProfile("header_nav_popup_profile")
    }
  }

  {/* 추가작업 부분 */}
  const [inputValue, setInputValue] = useState('');
  const [autoKeyWord, setAutoKeyWord] = useState([]);
  const [saveKeyWord, setSaveKeyWord] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const autoKeyWord = ['러그', '시계', '크리스마스', '크리스마스 트리', '크리스마스 산타', '크리스마스 리스', '크리스마스 케이크', '크리스마스 장식', '크리스마스 트리 장식', '벽시계', '알람시계', '크리스마스 산타 모자', '크리스마스 순록', '크리스마스 오너먼트']
    .filter(
      autoComplete => autoComplete.toLowerCase().includes(value.toLowerCase())
    );
    setAutoKeyWord(autoKeyWord);
    setSaveKeyWord(prevSearches => [inputValue, ...prevSearches.slice(0, 4)]);
  };
  const handleAutoKeyWord = (value) => {
    setInputValue(value);
    window.location.href = `/search`;
  };
  const handleClearClick = () => {
    setInputValue('');
  };
  const searchEnter = (e) => {
    if (e.key === 'Enter') {
      window.location.href = `/search/${inputValue}`;
    }
  };
  {/* 추가작업부분 끝 */}
  const [cartCnt, setCartCnt] = useState();
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/cart/new')
    .then((result)=>{
      setCartCnt(result.data.length);
    })
    .catch(console.err);
  },[cartCnt]);

  return (
    <>
      {!userInfo ?(
      <>
      <div className="header_logo_searchBox">
        <img className="header_logo_search_img" src="/images/headers/search.png" alt="이미지1" />
        {/* <input className="header_logo_search" type="text" placeholder="통합검색" name="header_logo_search" /> */}

        {/* 추가작업부분 */}
        <input className="header_logo_search"type="text" placeholder="통합검색" name="header_logo_search"
                onChange={handleInputChange}
                onKeyPress={searchEnter}
                value={inputValue}/>

        {inputValue && (
          <>
            <button className="search_del_bttn" type="button" onClick={handleClearClick}></button>
            <div className="header_search_keyword">
              <div>
                <ul>
                  <li className="header_search_keyword_cate">
                    {inputValue} <span>카테고리</span>
                  </li>
                  {autoKeyWord.map((autoComplete, index) => (
                    <li key={index} onClick={() => handleAutoKeyWord(autoComplete)}>{autoComplete}</li>
                  ))}
                </ul>
              </div>
              {/* <div> */}
                {/* <p>검색어</p> */}
                {/* <ul>
                {saveKeyWord.map((search, index) => (
                  <li key={index}>{search}</li>
                ))}
                </ul> */}
              {/* </div> */}
            </div>
          </>
        )}
        {/* 추가작업부분 끝 */}
      </div>
      
      <div className="header_logo_right">
        <Link to="/login" className="header_logo_cart"><PiShoppingCartLight className="header_logo_cart_icon" /></Link>
        <Link to="/login" className="header_logo_menu">로그인</Link>
        <Link to="/normalUsers/new" className="header_logo_menu">회원가입</Link>
        <Link to="/customer_center" className="header_logo_menu">고객센터</Link>
      </div>

      </>
      ):(
      <>
      <div className="header_logo_searchBox_loginver">
        {/* <img className="header_logo_search_img" src="/images/headers/search.png" alt="검색창 돋보기" />  */}
        <TfiSearch size="20" color="828c94" />
        <input className="header_logo_search" type="text" placeholder="통합검색" name="header_logo_search" />
      </div>
      <div className="header_logo_right_loginver">
        <Link to="/collections" className="header_logo_scrap"><PiBookmarkSimpleLight /></Link>
        <Link to="/notifications/feed" className="header_logo_feed"><PiBellLight /></Link>
        <Link to={`/cart/${userInfo.id}`} className="header_logo_cart">
          <PiShoppingCartLight />
          {cartCnt !== 0 ? <span className="header_logo_cart_num">{cartCnt}</span> : null}
        </Link>
        <button className="header_logo_profile" onClick={toggleProfileMenu}>
          <img className="header_logo_profile_icon" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?w=72&h=72&c=c&webp=1" alt="프로필 사진" />
        </button>
        <div className={showProfile} >
          <HeaderProfile />
        </div>
      </div>
      </>
      )}
    </>
  );
}