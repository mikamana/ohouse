import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiBellLight } from "react-icons/pi";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { PiShoppingCartThin } from "react-icons/pi";
import { HiOutlineBookmark } from "react-icons/hi2";
import { BsCart } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import ShowMenu from "./ShowMenu";
import HeaderNavPopularView from "./HeaderNavPopularView";
import HeaderLogoWrite from "./HeaderLogoWrite";
import HeaderProfile from "./HeaderProfile";

export default function Header() {

  /* 스크롤할 때 헤더 고정 */
  const [isFixed, SetIsFixed] = useState(false);
  useEffect(() => {
    document.getElementById('main_header').scrollTo(0,0);
  },[])

  useEffect(() => {
    const handleScroll = () => {
      const ScrollTop = window.scrollY;
      if (ScrollTop >= 50) {
        console.log(ScrollTop);
        SetIsFixed(true);
      } else {
        SetIsFixed(false);
      }
    }
    window.addEventListener('scroll', handleScroll, { capture: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  let [hovering, setHovering] = useState(1)
  let [showMenu, setShowMenu] = useState(1)

  useEffect(() => {
    switch (hovering) {
      case 1:
        setShowMenu(1);
        break;
      case 2:
        setShowMenu(2);
        break;
      case 3:
        setShowMenu(3);
        break;
      default:
        setShowMenu(1);
    }
  }, [hovering])

  function hoverMenu(checkFlag, event) {
    if (checkFlag === 1) {
      setHovering(1);
    } else if (checkFlag === 2) {
      setHovering(2);
    } else {
      setHovering(3);
    }
  }
  function handleMouseLeave() {
    if (showMenu === 2 || showMenu === 3) {
      setShowMenu(1);
    }
  }

  const [showWrite, setShowWrite] = useState("header_nav_popup_write");
  const headerBox = useRef();
  const toggleWriteMenu = (e) => {
    if (showWrite === "header_nav_popup_write") {
      setShowWrite("header_nav_popup_write active")
    } else {
      setShowWrite("header_nav_popup_write")
    }
  }

  const [showPopular, setShowPopular] = useState("header_nav_popup");
  const handlePopularMenu = () => {
    setShowPopular("header_nav_popup active")
  }
  const handleHidePopular = () => {
    setShowPopular("header_nav_popup")
  }

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
      <header className="main_header" id="main_header" onMouseLeave={handleMouseLeave} ref={headerBox} onClick={(e) => { if (e.target === headerBox.current) { setShowWrite("header_nav_popup_write"); setShowProfile("header_nav_popup_profile"); } }}>
        <div className={isFixed ? "main_header_layout_up active" : "main_header_layout_up"}>
          <div className="header_logo inner">
            <div className="header_logoBox">
              <Link to="/" className="header_logo_logo"></Link>
            </div>
            <div className="header_logo_left">
              <ul className="header_logo_left_ul">
                <li className="header_logo_left_ul_li">
                  <Link to="/" onMouseEnter={() => { hoverMenu(1) }}>커뮤니티</Link>
                </li>
                <li className="header_logo_left_ul_li">
                  <Link to="/store" onMouseEnter={() => { hoverMenu(2) }}>쇼핑</Link>
                </li>
                <li className="header_logo_left_ul_li">
                  <Link to="/experts" onMouseEnter={() => { hoverMenu(3) }}>이사/시공/생활</Link>
                </li>
              </ul>
            </div>

            {/* 로그인 전 메뉴 */}
            {/* <div className="header_logo_searchBox">
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
              {/* "header_nav_popup_profile" */}
              <div className={showProfile} >
                <HeaderProfile />
              </div>
            </div>

            <div className="header_logo_write">
              <button type="button" onClick={toggleWriteMenu}>
                <span>글쓰기</span><FiChevronDown className="header_logo_write_icon" />
              </button>
              {/* "header_nav_popup_write" */}
              <div className={showWrite}>
                <HeaderLogoWrite />
              </div>
            </div>
          </div>
        </div>
        <div className="main_header_layout_down">
          <div className="header_nav inner">
            {showMenu === 1 && <ShowMenu menuName="community" />}
            {showMenu === 2 && <ShowMenu menuName="store" />}
            {showMenu === 3 && <ShowMenu menuName="experts" />}
            <div className="header_nav_popular">
              <Link to="/" className="header_nav_popular_view">
                <div className="header_nav_popular_view_list">
                  <span>1</span>
                  <span><img src="images/headers/new.png" alt="" /></span>
                  <span>물티슈케이스</span>
                </div>
              </Link>
              <span className="arrow" onMouseEnter={handlePopularMenu} >
                <FiChevronDown className="arrow_icon" />
                <div className={showPopular} onMouseLeave={handleHidePopular} >
                  <div className="header_nav_popup_title">
                    <h2>인기검색어</h2>
                    <span onClick={handleHidePopular}>
                      <FiChevronUp className="arrow_icon" />
                    </span>
                  </div>
                  {/*  {showPopularMenu && */}
                  <HeaderNavPopularView />
                  {/* } */}
                </div>
              </span>
            </div>
          </div>
        </div>
      </header >
    </>
  );
}