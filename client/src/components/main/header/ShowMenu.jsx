import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function ShowMenu({ menuName }) {
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

  const [showhiddenMeun, setShowhiddenMeun] = useState(false);
  const hiddenMenu = useRef();
  const toggleListMenu = (e) => {
    setShowhiddenMeun(!showhiddenMeun)
  }

  return (
    <div ref={hiddenMenu} onClick={(e) => {if(e.target === hiddenMenu.current) setShowhiddenMeun(false)}}>
      <div className="header_nav_menu">
        {navmenuList.map((list) =>
          <Link to={list.url} className="header_nav_menu_list" key={list.menuName}>
            <p className="header_nav_menu_name">{list.menuName}</p>
          </Link>
        )}
        {menuName === "community" && <button className="header_nav_menu_btn" onClick={toggleListMenu}><FiChevronDown /></button>}
      </div >
      {showhiddenMeun && <div className="header_nav_popup_write_hidden" >
        <div className="header_nav_popup_write_content">
          <ul className="header_nav_popup_write_ul">
            <li>
              <Link to="/" className="header_nav_menu_list2">
                <p className="header_nav_menu_name">반려동물</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="header_nav_menu_list2">
                <p className="header_nav_menu_name">캠핑</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="header_nav_menu_list2">
                <p className="header_nav_menu_name">취미</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="header_nav_menu_list2">
                <p className="header_nav_menu_name">이벤트</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  );
}