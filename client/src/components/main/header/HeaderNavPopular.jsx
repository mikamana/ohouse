import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import HeaderNavPopularView from "./HeaderNavPopularView";

export default function HeaderNavPopular() {
  // const [popularList, SetPopularList] = useState([]);

  // useEffect(() => {
  //   fetch('data/header/Popularview_list.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       SetPopularList(data)
  //     })
  //     .catch((err) => console.err)
  // }, [])

  /* 인기검색어  */
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

  const [showPopular, setShowPopular] = useState("header_nav_popup");
  const handlePopularMenu = () => {
    setShowPopular("header_nav_popup active")
  }
  const handleHidePopular = () => {
    setShowPopular("header_nav_popup")
  }

  return (
    <div className="header_nav_popular">
      <div className="header_nav_popular_view">
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
      </div>
      <span className="arrow" onMouseEnter={handlePopularMenu}>
        <FiChevronDown className="arrow_icon" />
        <div className={showPopular} onMouseLeave={handleHidePopular}>
          <div className="header_nav_popup_title">
            <h2>인기검색어</h2>
            <span onClick={handleHidePopular}>
              <FiChevronUp className="arrow_icon" />
            </span>
          </div>
          <HeaderNavPopularView />
        </div>
      </span>
    </div>
  );
}