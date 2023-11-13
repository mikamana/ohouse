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

  // const handlerMouseOut = () => {
  //   if (showMenu === true) {
  //     setShowMenu(false)
  //   } else {
  //     setShowMenu(true)
  //   }
  // }

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
                <li className="header_logo_left_ul_li" onMouseOver={showNavMenu} onMouseOut={handleMouseOut}>
                  <Link to="/">커뮤니티</Link>
                </li>
                <li className="header_logo_left_ul_li">
                  <Link to="/store">쇼핑</Link>
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
          {showMenu === true ? 
            <div className="header_nav">
              <div className="header_nav_menu">
                <a href="/"><p>홈</p></a>
              </div>
              <div className="header_nav_popular">
                <a className="header_nav_popular_view">
                  <div>
                    <span>1</span>
                    <span><img src="images/headers/new.png" alt="" /></span>
                    <span>물티슈케이스</span>
                  </div>
                </a>
                <span className="arrow">
                  <i class="fa-solid fa-chevron-down" style={{ color: "#828c94" }}></i>
                  <div className="header_nav_popup">
                    <div className="header_nav_popup_title">
                      <h2>인기검색어</h2>
                      <span className="arrow_img_popup">
                        <i class="fa-solid fa-chevron-up" style={{ color: "#828c94" }}></i>
                      </span>
                    </div>
                      <ul>
                        <li>
                          <a className="header_nav_popular_view_popup">
                            <div>
                              <span>1</span>
                              <span><img src="images/headers/new.png" alt="" /></span>
                              <span>물티슈케이스</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                  </div>
                </span>
              </div>
            </div> : null}
        </div>
      </header >
    </>
  );

}