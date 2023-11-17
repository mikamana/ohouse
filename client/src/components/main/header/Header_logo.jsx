import React from "react";

export default function Header_logo(){
  return(
  <div className="main_header_layout_header_logo">
    <div>
      <a href="/" className="header_logo_logo"></a>
    </div>
    <div className="header_logo_abox">
      <a href="/">커뮤니티</a>
      <a href="/store">쇼핑</a>
      <a href="/experts">이사/시공/생활</a>
    </div>
    <div className="header_logo_searchBox">
      <span className="header_logo_search_img" ></span>
      <input className="header_logo_search" type="text" placeholder="통합검색"/>
    </div>
  </div>
  );
}