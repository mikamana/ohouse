import React from "react";
import Header_nav_popular_view from "./Header_nav_popular_view";

export default function Header_logo_menu({menuName}){
  /* const [mouseOver, setMouseOver] = useState(false);
  const handleMouseOver = (e)=>{
    setHover(true)
  }
  {mouseOver && <Header_nav_popular_view />} */

  return(
    <>
      <a className="header_logo_menu" href="/login">{menuName}</a>
    </>
  );
}