import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function ShowMenu({menuName}) {
  const [navmenuList, setNavmenuList] = useState([]);
  useEffect((e)=>{
    fetch(`data/header/NavMenu_${menuName}.json`)
    .then((res)=>res.json())
    .then((data)=>{
      //console.log(data);
      setNavmenuList(data)
    })
    .catch((err)=>console.err);
  },[menuName])

  /* const [menuNameCom,setMenuNameCom] = useState(false);
  if(menuName === "community"){
    setMenuNameCom(true);
  } */

  return (
    <div className="header_nav_menu">
      {navmenuList.map((list)=>
        <Link to={list.url} className="header_nav_menu_list" key={list.menuName}>
          <p className="header_nav_menu_name">{list.menuName}</p>
        </Link>
      )}
      {menuName === "community" && <button className="header_nav_menu_btn"><FiChevronDown /></button>}
    </div>
  );
}