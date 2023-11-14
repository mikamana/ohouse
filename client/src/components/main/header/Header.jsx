import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import ShowMenu from "./ShowMenu";
import HeaderNavPopularView from "./HeaderNavPopularView";

export default function Header() {

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

  /* const [showWrite, setShowWrite] = useState(false);
  const handleClick = () => {
    if (showWrite === false) {
      setShowWrite(true)
    } else {
      setShowWrite(false)
    }
  } */

  const [topY, setTopY] = useState(0);
  const [currentTop, setCurrentTop] = useState(0);
  const [count, setCount] = useState(1);

  let menuRef = useRef();
  // li를 레퍼런스로 잡음 menuRef

  useEffect(() => {

    setCurrentTop(menuRef.current.offsetHeight)

  }, [])

  // let ulRef = useRef();

  const useInterval = (callback, delay) => {


    const callbackRef = useRef(callback);

    // console.log(callbackRef);
    useEffect(() => {
      callbackRef.current = callback;
    });

    useEffect(() => {

      const timer =
        setInterval(() => { callbackRef.current(); setCount((count) => count++); }, delay);
      return () => clearInterval(timer);

    })

    // ulRef.current.style.top = `-${currentTop}px`;

  }

  // useInterval을 사용하여 일정한 간격으로 top을 업데이트합니다.
  useInterval(() => {

    setTopY((top) => top + currentTop);

    if (topY >= 440) {

      setTopY(0)

    }

  }, 3000);

  const useCounterInterval = (callback, delay) => {

    const callbackRef = useRef(callback);

    // console.log(callbackRef);
    useEffect(() => {
      callbackRef.current = callback;
    });

    useEffect(() => {

      const timer =
        setInterval(() => { callbackRef.current(); }, delay);
      return () => clearInterval(timer);

    })


  }

  useCounterInterval(() => {

    setCount((count) => ++count);

    if (count === 6) {

      setCount(1)

    }

  }, 3000);

  return (
    <>
      <header className="main_header" onMouseLeave={handleMouseLeave}>
        <div className="main_header_layout inner">
          <div className="header_logo">
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
            <div className="header_logo_searchBox">
              <img className="header_logo_search_img" src="images/headers/search.png" alt="" />
              <input className="header_logo_search" type="text" placeholder="통합검색" />
            </div>
            <div className="header_logo_right">
              <Link to="/cart" className="header_logo_cart"></Link>
              <Link to="/login" className="header_logo_menu">로그인</Link>
              <Link to="/normal_users/new" className="header_logo_menu">회원가입</Link>
              <Link to="/customer_center" className="header_logo_menu">고객센터</Link>
              <div className="header_logo_write"><button type="button">글쓰기<FiChevronDown /></button>
                <div className="header_nav_popup_write">
                  <ul className="header_nav_popup_write_ul">
                    <li>
                      <Link to="/">
                        <div>사진/동영상올리기</div>
                        <div>우리집의 공간과 나의 일상을 기록해보세요.</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_header_layout_down">
          <div className="header_nav  inner">
            {showMenu === 1 && <ShowMenu menuName="community" />}
            {showMenu === 2 && <ShowMenu menuName="store" />}
            {showMenu === 3 && <ShowMenu menuName="experts" />}
            <div className="header_nav_popular">
              <Link to="/" className="header_nav_popular_view">
                <div className="header_nav_popular_view_list">
                  <ul className="header_nav_popular_view_list_ul">
                    <li className="header_nav_popular_view_list_li" ref={menuRef} style={{ top: `-${topY}px` }}>
                      <span className="header_nav_popular_view_list_li_count">
                        {/* {count} */}
                        1
                      </span>
                      <span className="header_nav_popular_view_list_li_count_img">
                        <img src="images/headers/uparrow.png" alt="이미지1" />
                      </span>
                      <Link to="#" className="header_nav_popular_view_list_link" >
                        물티슈케이스
                      </Link>
                    </li>
                    <li className="header_nav_popular_view_list_li" style={{ top: `-${topY}px` }}>
                      <span className="header_nav_popular_view_list_li_count">
                        {/* {count} */}
                        2
                      </span>
                      <span className="header_nav_popular_view_list_li_count_img">
                        <img src="images/headers/uparrow.png" alt="이미지1" />
                      </span>
                      <Link to="#" className="header_nav_popular_view_list_link">
                        암막커튼 작은창
                      </Link>
                    </li>
                    <li className="header_nav_popular_view_list_li" style={{ top: `-${topY}px` }}>
                      <span className="header_nav_popular_view_list_li_count">
                        {/* {count} */}
                        3
                      </span>
                      <span className="header_nav_popular_view_list_li_count_img">
                        <img src="images/headers/uparrow.png" alt="이미지1" />
                      </span>
                      <Link to="#" className="header_nav_popular_view_list_link">
                        마샬 스피커
                      </Link>
                    </li>
                    <li className="header_nav_popular_view_list_li" style={{ top: `-${topY}px` }}>
                      <span className="header_nav_popular_view_list_li_count">
                        {/* {count} */}
                        4
                      </span>
                      <span className="header_nav_popular_view_list_li_count_img">
                        <img src="images/headers/downarrow.png" alt="이미지1" />
                      </span>
                      <Link to="#" className="header_nav_popular_view_list_link">
                        루씨에어
                      </Link>
                    </li>
                    <li className="header_nav_popular_view_list_li" style={{ top: `-${topY}px` }}>
                      <span className="header_nav_popular_view_list_li_count">
                        {/* {count} */}
                        5
                      </span>
                      <span className="header_nav_popular_view_list_li_count_img">
                        <img src="images/headers/new.png" alt="이미지1" />
                      </span>
                      <Link to="#" className="header_nav_popular_view_list_link">
                        룸앤티비
                      </Link>
                    </li>
                    <li className="header_nav_popular_view_list_li" style={{ top: `-${topY}px` }}>
                      <span className="header_nav_popular_view_list_li_count">
                        {/* {count} */}
                        6
                      </span>
                      <span className="header_nav_popular_view_list_li_count_img">
                        <img src="images/headers/downarrow.png" alt="이미지1" />
                      </span>
                      <Link to="#" className="header_nav_popular_view_list_link">
                        전등
                      </Link>
                    </li>
                    <li className="header_nav_popular_view_list_li" style={{ top: `-${topY}px` }}>
                      <span className="header_nav_popular_view_list_li_count">
                        {/* {count} */}
                        7
                      </span>
                      <span className="header_nav_popular_view_list_li_count_img">
                        <img src="images/headers/new.png" alt="이미지1" />
                      </span>
                      <Link to="#" className="header_nav_popular_view_list_link">
                        데스크데리어
                      </Link>
                    </li>
                    <li className="header_nav_popular_view_list_li" style={{ top: `-${topY}px` }}>
                      <span className="header_nav_popular_view_list_li_count">
                        {/* {count} */}
                        8
                      </span>
                      <span className="header_nav_popular_view_list_li_count_img">
                        <img src="images/headers/new.png" alt="이미지1" />
                      </span>
                      <Link to="#" className="header_nav_popular_view_list_link">
                        보조테이블
                      </Link>
                    </li>
                    <li className="header_nav_popular_view_list_li" style={{ top: `-${topY}px` }}>
                      <span className="header_nav_popular_view_list_li_count">
                        {/* {count} */}
                        9
                      </span>
                      <span className="header_nav_popular_view_list_li_count_img">
                        <img src="images/headers/new.png" alt="이미지1" />
                      </span>
                      <Link to="#" className="header_nav_popular_view_list_link">
                        반원테이블
                      </Link>
                    </li>
                    <li className="header_nav_popular_view_list_li" style={{ top: `-${topY}px` }}>
                      <span className="header_nav_popular_view_list_li_count">
                        {/* {count} */}
                        10
                      </span>
                      <span className="header_nav_popular_view_list_li_count_img">
                        <img src="images/headers/new.png" alt="이미지1" />
                      </span>
                      <Link to="#" className="header_nav_popular_view_list_link">
                        브라운물티슈
                      </Link>
                    </li>
                  </ul>
                </div>
              </Link>
              <span className="arrow">
                <FiChevronDown />
                <div className="header_nav_popup">
                  <div className="header_nav_popup_title">
                    <h2>인기검색어</h2>
                    <span className="arrow_img_popup">
                      <FiChevronUp />
                    </span>
                  </div>
                  <HeaderNavPopularView />
                </div>
              </span>
            </div>
          </div>
        </div>
      </header >
    </>
  );

}