import React from "react";
import "../../css/admin/adminpage.css";
import { Outlet } from "react-router-dom";
import { getManager, getUser } from './../utill/sessionStorage';
import AdminNavbar from "./component/AdminNavbar";
import Error from './../../Error';
import { getCookie } from "../utill/cookie";

/* 
1. && 값이 없으면 테이블 열, 행, 값이 출력이 안되게


회원관리 R (oh_member) : 정렬 (이름순) get order by~, 
  회원 : mid, nickname, phone, homepage, gender, birthday, userimg, mdate, 탈퇴일
상품관리 C, R, U, D (oh_product) : 정렬(카테고리별, 갯수별)
주문관리 R, U, D (oh_order) : 정렬
문의관리 R, D  
*/

export default function Adminpage() {
  //const manage = getCookie("ohouse-manager")
  const userInfo = getUser();
  const manage = getManager();

  return (
    <>
      {manage ? (
        <>
          <AdminNavbar />
          <Outlet />
        </>
      ) : (
        <Error />
      )}
    </>
  );
}