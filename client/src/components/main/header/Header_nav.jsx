import React from "react";
import Header_nav_popular_view from "./Header_nav_popular_view";

export default function Header_nav(){

  return(
    <div className="header_nav">
      <div className="header_nav_menu">
        <a href="/"><p>홈</p></a>
      </div>
      <div className="header_nav_popular">
        <Header_nav_popular_view 
          className = "header_nav_popular_view"
        />
        <span className="arrow">
          <i class="fa-solid fa-chevron-down" style={{color: "#828c94"}}></i>
            <div className="header_nav_popup">
              <div className="header_nav_popup_title">
                <h2>인기검색어</h2>
                <span className="arrow_img_popup">
                  <i class="fa-solid fa-chevron-up" style={{color: "#828c94"}}></i>
                </span>
              </div>
              <ul>
                <li>
                  <Header_nav_popular_view 
                    className = "header_nav_popular_view_popup"
                  />
                </li>
              </ul>
            </div>
          </span>
      </div>
    </div>
  );
}