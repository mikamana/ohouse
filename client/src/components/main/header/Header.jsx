import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowMenu from "./ShowMenu";
import HeaderSearchRight from './HeaderSearchRight';
import HeaderLogoWrite from "./HeaderLogoWrite";
import HeaderNavPopular from "./HeaderNavPopular";
import axios from 'axios';

export default function Header({onDataChange}) {

  {/* 검색 추가작업 부분 */ }
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [autoKeyWord, setAutoKeyWord] = useState([]);
  
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const inputRef = useRef();
  
  //모달 외부 영역  클릭 닫기
  const handleClickOutside = (e) => {
    const target = e.target;
    if (!target.classList.contains('header_search_keyword') && !target.classList.contains('header_logo_search')) {
      setIsModal1Open(false);
      setIsModal2Open(false);
    }
  };
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const autoKeyWord = ['러그', '시계', '크리스마스', '크리스마스 트리', '크리스마스 산타', '크리스마스 리스', '크리스마스 케이크', '크리스마스 장식', '크리스마스 트리 장식', '벽시계', '알람시계', '크리스마스 산타 모자', '크리스마스 순록', '크리스마스 오너먼트']
      .filter(
        autoComplete => autoComplete.toLowerCase().includes(value.toLowerCase())
      );
      
    setAutoKeyWord(autoKeyWord);

    // input입력되면 기본
    setIsModal1Open(false);
    setIsModal2Open(true);

    onDataChange(value);

    console.log(value);

  };

  // 포커스 되면 검색어 모달 열기
  const handleFocus = () => {
    setIsModal1Open(true);
  };

  const handleClearClick = () => {
    setInputValue('');
    setIsModal1Open(true);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);


  const handleAutoKeyWord = (inputValue) => {
    setInputValue(inputValue);
    navigate(`/search/${inputValue}`)
  };
  
  const searchEnter = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/${inputValue}`)
    }
  };

  {/* 검색 추가작업부분 끝 */ }


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
    // console.log(e.currentTarget); //e.target 하면 자식태그가 찍힘. 본인은 e.current.target 으로 하는것!
    if (e.currentTarget.id === 'write') {
      toggleWriteMenu()
      setShowProfile("header_nav_popup_profile")
      setShowHiddenMeun("header_nav_popup_write_hidden")
    } else if (e.currentTarget.id === 'hidden') {
      toggleHiddenMenu()
      setShowWrite("header_nav_popup_write")
      setShowProfile("header_nav_popup_profile")
    } else if (e.currentTarget.id === 'profile') {
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

            {/* 검색창 추가작업부분 */}
            <div className="header_logo_searchBox">
              <img className="header_logo_search_img" src="/images/headers/search.png" alt="이미지1" />            

              <input className="header_logo_search" type="text" placeholder="통합검색" name="header_logo_search"
                ref={inputRef}
                onFocus={handleFocus}
                onChange={handleInputChange}
                onKeyPress={searchEnter}
                value={inputValue} />

                {inputValue && (
                  <button className="search_del_bttn" type="button" onClick={handleClearClick}></button>
                )}

              {isModal1Open && (
                <div className="header_search_keyword">
                  <div>
                    <ul>
                      <li>
                        <Link to={''}>검색어</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {isModal2Open && (
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
                  </div>
                </>
              )}

            </div>
            <HeaderSearchRight
              handleClick={handleClick}
              showProfile={showProfile}
            />
            <HeaderLogoWrite
              handleClick={handleClick}
              showWrite={showWrite}
            />
          </div>
        </div>
        {/* "main_header_layout_down" */}
        {/* <div className={isFixedDown ? "main_header_layout_down active" : "main_header_layout_down"} style={{position:isFixed ? 'fixed' : 'relative', top : isFixed ? '30px' : null, top : isFixedDown ? '81px' : null, transition: isFixed ? 'top 0.1s' : null}}> */}
        <div className={isFixed ? "main_header_layout_down active" : "main_header_layout_down"} style={{ top: isFixedDown ? '81px' : '0px' }}>
          <div className="header_nav inner">
            {showMenu === 1 && <ShowMenu menuName="community" showHiddenMeun={showHiddenMeun} handleClick={handleClick} />}
            {showMenu === 2 && <ShowMenu menuName="store" showHiddenMeun={showHiddenMeun} handleClick={handleClick} />}
            {showMenu === 3 && <ShowMenu menuName="experts" showHiddenMeun={showHiddenMeun} handleClick={handleClick} />}
            <HeaderNavPopular />
          </div>
        </div>
      </header >
    </>
  );
}