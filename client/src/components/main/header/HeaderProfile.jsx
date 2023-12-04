import React from "react";
import { Link } from "react-router-dom";
import { removeUser } from "../../../pages/utill/sessionStorage";

export default function HeaderProfile() {
  const handleLogout = () => {
    removeUser();
    window.location.reload();
  }

  return (
    <ul className="header_nav_popup_profile_ul">
      <li>
        <Link to="/" className="header_nav_menu_list3">마이페이지</Link>
      </li>
      <li>
        <Link to="/" className="header_nav_menu_list3">나의 쇼핑</Link>
      </li>
      <li>
        <Link to="/" className="header_nav_menu_list3">이벤트</Link>
      </li>
      <li>
        <Link to="/" className="header_nav_menu_list3">전문가 신청</Link>
      </li>
      <li>
        <Link to="/" className="header_nav_menu_list3">판매자 신청</Link>
      </li>
      <li>
        <Link to="/" className="header_nav_menu_list3">고객센터</Link>
      </li>
      <li>
        <div to="/" className="header_nav_menu_list3" onClick={handleLogout}>로그아웃</div>
      </li>
      <li>
        <Link to="/admin" className="header_nav_menu_list3">관리자페이지</Link>
      </li>
    </ul>
  );
}
