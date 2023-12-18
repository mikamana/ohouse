import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ShowMenu from "./ShowMenu";
import HeaderSearchRight from './HeaderSearchRight';
import HeaderLogoWrite from "./HeaderLogoWrite";
import HeaderNavPopular from "./HeaderNavPopular";

export default function Header(props) {
  /* 스크롤할 때 헤더 고정 */
  const [isFixed, SetIsFixed] = useState(false);
  // useEffect(() => {
  //   document.getElementById('main_header').scrollTo(0, 0);
  // }, [])
  const [isFixedDown, SetIsFixedDown] = useState(false);
  const [position, setPosition] = useState(window.scrollY);

  /* header_logo 메뉴 호버시 header_nav 메뉴 show */
  let [hovering, setHovering] = useState(1)
  let [showMenu, setShowMenu] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const ScrollTop = window.scrollY;
      if (ScrollTop >= 50) {
        SetIsFixed(true);
      } else if (ScrollTop < 50) {
        SetIsFixed(false);
      }
      SetIsFixedDown(position > ScrollTop);
      // setPosition(ScrollTop)
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [position])

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

  /* header_layout_up fixed일 때 메뉴 호버하면 header_navmenu 나타남 */
  function handleNavMenuon() {
    if (isFixed === true) {
      SetIsFixedDown(true)
    } else (
      SetIsFixedDown(false)
    )
  }

  function handleNavMenuoff() {
    if (isFixedDown === true) {
      SetIsFixedDown(false)
    }
  }

  // 헤더클릭시 글쓰기 사라지는거 나중에 추가하기
  // const headerBox = useRef();
  // ref={headerBox}
  // onClick={(e) => { if (e.target === headerBox.current) {setShowWrite("header_nav_popup_write"); setShowProfile("header_nav_popup_profile"); } }}
  const [showProfile, setShowProfile] = useState("header_nav_popup_profile");
  const [showWrite, setShowWrite] = useState("header_nav_popup_write");
  const [showHiddenMeun, setShowHiddenMeun] = useState("header_nav_popup_write_hidden");

  const handleClick = (e) => {
    console.log(e.currentTarget); //e.target 하면 자식태그가 찍힘. 본인은 e.current.target 으로 하는것!
    if(e.currentTarget.id === 'write'){
      toggleWriteMenu()
      setShowProfile("header_nav_popup_profile")
      setShowHiddenMeun("header_nav_popup_write_hidden")
    }else if(e.currentTarget.id === 'hidden'){
      toggleHiddenMenu()
      setShowWrite("header_nav_popup_write")
      setShowProfile("header_nav_popup_profile")
    }else if(e.currentTarget.id === 'profile'){
      toggleProfileMenu()
      setShowWrite("header_nav_popup_write")
      setShowHiddenMeun("header_nav_popup_write_hidden")
    }
  };

  const toggleHiddenMenu = (e) => {
    if (showHiddenMeun === "header_nav_popup_write_hidden") {
      setShowHiddenMeun("header_nav_popup_write_hidden active")
    } else {
      setShowHiddenMeun("header_nav_popup_write_hidden")
    }
  }

  /* 프로필토글 */
  const toggleProfileMenu = (e) => {
    if (showProfile === "header_nav_popup_profile") {
      setShowProfile("header_nav_popup_profile active")
    } else {
      setShowProfile("header_nav_popup_profile")
    }
  }

  /* 글쓰기토글 */
  const toggleWriteMenu = (e) => {
    if (showWrite === "header_nav_popup_write") {
      setShowWrite("header_nav_popup_write active")
    } else {
      setShowWrite("header_nav_popup_write")
    }
  }

  return (
    <>
      <header className="main_header" id="main_header" onMouseLeave={() => { handleMouseLeave(); handleNavMenuoff(); }}>
        <div className={"main_header_layout_up"} style={{ position: isFixed ? 'fixed' : 'relative', top: isFixed ? '0' : null }} onMouseEnter={handleNavMenuon} >
          {/* </div><div className={isFixed ? "main_header_layout_up active" : "main_header_layout_up"}> */}
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
                  <Link to="/" onMouseEnter={() => { hoverMenu(3) }}>이사/시공/생활</Link>
                </li>
              </ul>
            </div>
            <HeaderSearchRight 
              handleClick = {handleClick}
              showProfile = {showProfile}
            />
            <HeaderLogoWrite 
              handleClick = {handleClick}
              showWrite = {showWrite}
            />
          </div>
        </div>
        {/* "main_header_layout_down" */}
        {/* <div className={isFixedDown ? "main_header_layout_down active" : "main_header_layout_down"} style={{position:isFixed ? 'fixed' : 'relative', top : isFixed ? '30px' : null, top : isFixedDown ? '81px' : null, transition: isFixed ? 'top 0.1s' : null}}> */}
        <div className={isFixed ? "main_header_layout_down active" : "main_header_layout_down"} style={{ top: isFixedDown ? '81px' : '0px' }}>
          <div className="header_nav inner">
            {showMenu === 1 && <ShowMenu menuName="community" showHiddenMeun = {showHiddenMeun} handleClick={handleClick}/>}
            {showMenu === 2 && <ShowMenu menuName="store" showHiddenMeun = {showHiddenMeun} handleClick={handleClick}/>}
            {showMenu === 3 && <ShowMenu menuName="experts" showHiddenMeun = {showHiddenMeun} handleClick={handleClick}/>}
            <HeaderNavPopular />
          </div>
        </div>
      </header >
    </>
  );
}