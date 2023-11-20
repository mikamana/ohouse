import React, { useState } from "react";
import { PiBellLight, PiBookmarkSimpleLight, PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import HeaderProfile from "./HeaderProfile";


export default function HeaderSearchRight() {
  const [showProfile, setShowProfile] = useState("header_nav_popup_profile");
  const toggleProfileMenu = (e) => {
    if (showProfile === "header_nav_popup_profile") {
      setShowProfile("header_nav_popup_profile active")
    } else {
      setShowProfile("header_nav_popup_profile")
    }
  }

  return (
    <>
      {/* 로그인 전 메뉴 */}
      {/* 
      <div className="header_logo_searchBox">
        <img className="header_logo_search_img" src="images/headers/search.png" alt="이미지1" />
        <input className="header_logo_search" type="text" placeholder="통합검색" name="header_logo_search" />
      </div>
      <div className="header_logo_right">
        <Link to="/cart" className="header_logo_cart"><PiShoppingCartLight className="header_logo_cart_icon"/></Link>
        <Link to="/login" className="header_logo_menu">로그인</Link>
        <Link to="/normal_users/new" className="header_logo_menu">회원가입</Link>
        <Link to="/customer_center" className="header_logo_menu">고객센터</Link>
      </div> */}

      {/* 로그인 후 메뉴 */}
      <div className="header_logo_searchBox_loginver">
        <img className="header_logo_search_img" src="images/headers/search.png" alt="검색창 돋보기" />
        <input className="header_logo_search" type="text" placeholder="통합검색" name="header_logo_search" />
      </div>
      <div className="header_logo_right_loginver">
        <Link to="/cart" className="header_logo_scrap"><PiBookmarkSimpleLight /></Link>
        <Link to="/login" className="header_logo_feed"><PiBellLight /></Link>
        <Link to="/normal_users/new" className="header_logo_cart">
          <PiShoppingCartLight />
          <span className="header_logo_cart_num">26</span>
        </Link>
        <button className="header_logo_profile" onClick={toggleProfileMenu}>
          <img className="header_logo_profile_icon" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?w=72&h=72&c=c&webp=1" alt="프로필 사진" />
        </button>
        <div className={showProfile} >
          <HeaderProfile />
        </div>
      </div>
    </>
  );
}