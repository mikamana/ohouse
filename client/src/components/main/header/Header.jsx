import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {

  let [showMenu, setShowMenu] = useState(false)

  function showNavMenu() {
    if (showMenu === true) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  const handleMouseLeave = () => {
    if (showMenu === true) {
      setShowMenu(false)
    }
    // } else {
    //   setShowMenu(true)
    // }
  }

  return (
    <>
      <header className="main_header">
        <div className="main_header_layout inner">
          <div className="header_logo">
            <div className="header_logoBox">
              <Link to="/" className="header_logo_logo"></Link>
            </div>
            <div className="header_logo_left">
              <ul className="header_logo_left_ul">
                <li className="header_logo_left_ul_li">
                  <Link to="/">커뮤니티</Link>
                </li>
                <li className="header_logo_left_ul_li" >
                  <Link to="/store" onMouseOver={showNavMenu} >쇼핑</Link>
                </li>
                <li className="header_logo_left_ul_li">
                  <Link to="/experts">이사/시공/생활</Link>
                </li>
              </ul>
            </div>
            <div className="header_logo_searchBox">
              <img className="header_logo_search_img" src="images/headers/search.png" alt="" />
              <input className="header_logo_search" type="text" placeholder="통합검색" />
            </div>
            <div className="header_logo_right">
              <Link to="/cart" className="header_logo_cart"></Link>
              <Link to="/login" className="header_logo_menu">로그인</Link>
              <Link to="/normal_users/new" className="header_logo_menu">회원가입</Link>
              <Link to="/customer_center" className="header_logo_menu">고객센터</Link>
              {<button>글쓰기<FiChevronDown /></button>}
            </div>
          </div>
          <div className="header_nav">
            <div className="header_nav_menu">
              {showMenu === true ?
                <div onMouseLeave={handleMouseLeave}>
                  <div className="header_nav_menu_popup">
                    <Link to="/"><p>쇼핑홈</p></Link>
                    <Link to="/"><p>카테고리</p></Link>
                  </div>
                </div>
                :
                <>
                  <Link to="/"><p>홈</p></Link>
                  <Link to="/"><p>추천</p></Link>
                </>
              }
            </div>
            <div className="header_nav_popular">
              <Link to="/" className="header_nav_popular_view">
                <div>
                  <span>1</span>
                  <span><img src="images/headers/new.png" alt="" /></span>
                  <span>물티슈케이스</span>
                </div>
              </Link>
              <span className="arrow">
                <FiChevronDown />
                <div className="header_nav_popup">
                  <div className="header_nav_popup_title">
                    <h2>인기검색어</h2>
                    <span className="arrow_img_popup">
                      <FiChevronDown />
                    </span>
                  </div>
                  <ul>
                    <li>
                      <Link to="/" className="header_nav_popular_view_popup">
                        <div>
                          <span>1</span>
                          <span><img src="images/headers/new.png" alt="" /></span>
                          <span>물티슈케이스</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </div>
      </header >
    </>
  );

}