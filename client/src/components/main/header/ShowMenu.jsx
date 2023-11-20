import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function ShowMenu({ menuName, headerBox }) {
  const [navmenuList, setNavmenuList] = useState([]);
  useEffect((e) => {
    fetch(`data/header/NavMenu_${menuName}.json`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setNavmenuList(data)
      })
      .catch((err) => console.err);
  }, [menuName])

  const [showHiddenMeun, setShowHiddenMeun] = useState("header_nav_popup_write_hidden");
  //const hiddenMenu = useRef(headerBox); 푸터 합치고 헤더+바디 설정하기
  const toggleHiddenMenu = (e) => {
    if (showHiddenMeun === "header_nav_popup_write_hidden") {
      setShowHiddenMeun("header_nav_popup_write_hidden active")
    } else {
      setShowHiddenMeun("header_nav_popup_write_hidden")
    }
  }

  const hiddenMenu = ['반려동물', '캠핑', '취미', '이벤트']

  return (
    <div /* ref={headerBox} onClick={(e) => {if(e.target === hiddenMenu.current) setShowHiddenMeun(false)}} */>
      <div className="header_nav_menu">
        {navmenuList.map((list) =>
          <div className="header_nav_menu_wrap"  key={list.menuName}>
            <Link to={list.url} className="header_nav_menu_list">
              <p className="header_nav_menu_name">{list.menuName}</p>
            </Link>
          </div>
        )}
        {menuName === "community" && <button className="header_nav_menu_btn" onClick={toggleHiddenMenu}><FiChevronDown /></button>}
      </div >
      {/* "header_nav_popup_write_hidden" */}
      <div className={showHiddenMeun} >
        <div className="header_nav_popup_write_content">
          <ul className="header_nav_popup_write_ul">
            {hiddenMenu.map(menu =>
              <li key={menu}>
                <Link to="/" className="header_nav_menu_list2">{menu}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}