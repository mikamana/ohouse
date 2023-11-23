import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ShowMenu from "./ShowMenu";
import HeaderSearchRight from './HeaderSearchRight';
import HeaderLogoWrite from "./HeaderLogoWrite";
import HeaderNavPopular from "./HeaderNavPopular";

export default function Header() {
  /* 스크롤할 때 헤더 고정 */
  const [isFixed, SetIsFixed] = useState(false);
  useEffect(() => {
    document.getElementById('main_header').scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const ScrollTop = window.scrollY;
      if (ScrollTop >= 50) {
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



  /* header_logo 메뉴 호버시 header_nav 메뉴 show */
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

  // 헤더클릭시 글쓰기 사라지는거 나중에 
  // const headerBox = useRef();
  // ref={headerBox}
  // onClick={(e) => { if (e.target === headerBox.current) {setShowWrite("header_nav_popup_write"); setShowProfile("header_nav_popup_profile"); } }}

  return (
    <>
      <header className="main_header" id="main_header" onMouseLeave={handleMouseLeave}>
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
            <HeaderSearchRight />
            <HeaderLogoWrite />
          </div>
        </div>
        <div className="main_header_layout_down">
          <div className="header_nav inner">
            {showMenu === 1 && <ShowMenu menuName="community" />}
            {showMenu === 2 && <ShowMenu menuName="store" />}
            {showMenu === 3 && <ShowMenu menuName="experts" />}
            <HeaderNavPopular />
          </div>
        </div>
      </header >
    </>
  );
}