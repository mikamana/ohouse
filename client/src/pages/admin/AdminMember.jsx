import React from "react";
import AdminContent from "./component/AdminContent";

export default function AdminMember() {
  return (
    <div>
      <AdminContent 
        category = "member"
        menuList = {[' ', '회원이름', '회원아이디', '휴대폰번호', '생일', '가입일시', '주문건수', '리뷰수', '비고']}
      />
    </div>
  );
};