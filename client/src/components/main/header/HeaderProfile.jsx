import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderProfile() {
  const profileMenu = ['마이페이지', '나의 쇼핑', '이벤트', '전문가 신청', '판매자 신청', '고객센터', '로그아웃']

  const [newMark, setNewMark] = useState('마이페이지')


  return (
    <ul className="header_nav_popup_profile_ul">
      {profileMenu.map(menu =>
        <li key={menu}>
          <Link to="/" className="header_nav_menu_list3">{menu}
          {menu == '마이페이지' ?
          <svg className="css-1dnrp50 header_nav_menu_list3_newMark" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path d="M0 9a9 9 0 1118 0A9 9 0 010 9z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M9 18A9 9 0 109 0a9 9 0 000 18zm-1.7-5.25H5.26v-7.5h2.61l2.8 4.2h.03v-4.2h2.06v7.5h-2.3L7.36 8.07h-.05v4.68z" fill="#F77"></path></svg>
          : null}
          </Link>
        </li>
      )}
    </ul>
  );
}