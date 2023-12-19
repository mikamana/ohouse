import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../../../pages/utill/sessionStorage";
import { getCookie } from "../../../pages/utill/cookie";
import { userContext } from '../../../context/UsersContext';


export default function HeaderProfile() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    removeUser();
    window.location.reload();
  }

  // useState




  const manager = getCookie("ohouse-manager")

  return (
    <ul className="header_nav_popup_profile_ul">
      <li>
        <Link to="/users/profile" className="header_nav_menu_list3" >마이페이지</Link>
      </li>
      <li>
        <Link to="/users/myshop" className="header_nav_menu_list3">나의 쇼핑</Link>
      </li>
      <li>
        <Link to="/users/editpassword" className="header_nav_menu_list3">비밀번호변경</Link>
      </li>
      <li>
        <Link to="/" className="header_nav_menu_list3">전문가 신청</Link>
      </li>
      <li>
        <Link to="/" className="header_nav_menu_list3">판매자 신청</Link>
      </li>
      <li>
        <Link to="/users/withdrawals" className="header_nav_menu_list3">회원탈퇴</Link>
      </li>
      <li>
        <div className="header_nav_menu_list3" onClick={handleLogout}>로그아웃</div>
      </li>
      {manager !== undefined &&
        <li>
          <Link to="/admin/member" className="header_nav_menu_list3">관리자페이지</Link>
        </li>
      }
    </ul>
  );
}
