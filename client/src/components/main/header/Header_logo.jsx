import React from "react";
import Header_logo_left_menu from "./Header_logo_left_menu";
import Header_logo_menu from "./Header_logo_menu";

export default function Header_logo(){
  return(
  <div className="header_logo">
    <div className="header_logoBox">
      <a href="/" className="header_logo_logo"></a>
    </div>
    <div className="header_logo_left">
      <Header_logo_left_menu menuName="커뮤니티" />
      <Header_logo_left_menu menuName="쇼핑" />
      <Header_logo_left_menu menuName="이사/시공/생활" />
    </div>
    <div className="header_logo_searchBox">
      <img className="header_logo_search_img" src="images/headers/search.png" />
      <input className="header_logo_search" type="text" placeholder="통합검색"/>
    </div>
    <div className="header_logo_right">
      <a className="header_logo_cart" href="/cart"></a>
      <Header_logo_menu menuName = "로그인"/>
      <Header_logo_menu menuName = "회원가입"/>
      <Header_logo_menu menuName = "고객센터"/>
      <button>글쓰기<i class="fa-solid fa-chevron-down"></i></button>
    </div>
  </div>
  );
}