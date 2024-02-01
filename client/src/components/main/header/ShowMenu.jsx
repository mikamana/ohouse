import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function ShowMenu({ menuName, headerBox, handleClick, showHiddenMeun }) {
  const [navmenuList, setNavmenuList] = useState([]);
  useEffect((e) => {
    fetch(`/data/header/NavMenu_${menuName}.json`)
      .then((res) => res.json())
      .then((data) => {
        setNavmenuList(data)
      })
      .catch((err) => console.err);
  }, [menuName])

  const hiddenMenu = ['반려동물', '캠핑', '취미', '이벤트']

  /* 메뉴 클릭 시 underline color : header_nav_menu_list */
  const [menuLine, setMenuLine] = useState(0);
  const showUnderline = (e, idx) => {
    setMenuLine(idx)
  };

  return (
    <div /* ref={headerBox} onClick={(e) => {if(e.target === hiddenMenu.current) setShowHiddenMeun(false)}} */>
      <div className="header_nav_menu">
        {navmenuList.map((list, idx) =>
          <div className="header_nav_menu_wrap"  key={list.menuName}>
            <Link to={list.url} className={(idx === menuLine ? "header_nav_menu_list active" : "header_nav_menu_list")} onClick={(e)=>showUnderline(e,idx)}>
              <p className="header_nav_menu_name">{list.menuName}</p>
            </Link>
          </div>
        )}
        {menuName === "community" && <button className="header_nav_menu_btn" id='hidden' onClick={handleClick}><FiChevronDown /></button>}
      </div >
      {/* "header_nav_popup_write_hidden" */}
      <div className={showHiddenMeun} >
        <div className="header_nav_popup_write_content">
          <ul className="header_nav_popup_write_ul">
            {hiddenMenu.map(menu =>
              <li key={menu}>
                <Link to="/feed/event" className="header_nav_menu_list2">{menu}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}