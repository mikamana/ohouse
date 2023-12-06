import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <div className="admin_navbar inner">
      <div className="admin_logowrap">
        <Link to="/">
          <img className="admin_logo" src="http://127.0.0.1:3000/images/user/signup.png" alt="ohouse logo" />
        </Link>
      </div>
      <h1 className="admin_title">
        <Link to="/admin" className="admin_titlelink">Admin</Link>
      </h1>
      <nav className="admin_navmenu">
        <Link to="/admin/oh_member">회원관리</Link>
        <Link to="/admin/oh_product">상품관리</Link>
        <Link to="/admin/oh_order">주문관리</Link>
        <Link to="/admin/oh_review">리뷰관리</Link>
        <Link to="/admin/oh_review">문의관리</Link>
      </nav>
    </div>
  );
}