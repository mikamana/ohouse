import React from "react";

export default function Header_nav(){

  return(
    <div className="header_nav">
      <div className="header_nav_menu"></div>
      <div className="header_nav_popular">
        <div className="header_nav_popular_view">
          <span>1</span>
          <span><img src="images/headers/new.png" alt="" /></span>
          <span>물티슈케이스</span>
        </div>
        <span className="arrow_img">
          <i class="fa-solid fa-chevron-down" style={{color: "#828c94"}}></i>
            <div className="header_nav_popup">
              <div className="header_nav_popup_title">
                <h2>인기검색어</h2>
                <span className="arrow_img_popup"><i class="fa-solid fa-chevron-down" style={{color: "#828c94"}}></i></span>
              </div>
              <ul>
                <li>
                  <div className="header_nav_popular_view_popup">
                    <span>1</span>
                    <span><img src="images/headers/new.png" alt="" /></span>
                    <span>물티슈케이스</span>
                  </div>
                </li>
              </ul>
            </div>
          </span>
      </div>
    </div>
  );
}