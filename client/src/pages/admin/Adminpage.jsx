import React, { useEffect, useState } from "react";
import "../../css/admin/adminpage.css";
import { Link } from "react-router-dom";
import axios from "axios";
/* 
회원관리 R, U, D (oh_member) : 정렬 (이름순, 주문순), 
  회원 : mid, nickname, phone, homepage, gender, birthday, userimg, mdate, 탈퇴일
상품관리 C, R, U, D (oh_product) : 정렬(카테고리별, 갯수별)
주문관리 R 만 (oh_order) : 정렬
리뷰관리 R 만  
*/

export default function Adminpage() {
  const [memberList, SetMemberList] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/admin')
    .then((result)=>{
      console.log(result.data);
      SetMemberList(result.data)
    })
    .catch(console.err);
  },[])

  return (
    <div className="admin_section">
      <div className="admin_banner">
        <div className="admin_logowrap">
          <img className="admin_logo" src="http://localhost:3000/images/user/signup.png" alt="ohouse logo" />
        </div>
        <h1 className="admin_title">Admin</h1>
        <nav className="admin_navmenu">
          <Link to="/oh_member">회원관리</Link>
          <Link to="/oh_product">상품관리</Link>
          <Link to="/oh_order">주문관리</Link>
          <Link to="/oh_review">리뷰관리</Link>
        </nav>
      </div>
      <div className="admin_content">
        <table className="admin_table">
          <thead>
            <tr>
              <th> </th>
              <th>회원이름</th>
              <th>회원아이디</th>
              <th>휴대폰번호</th>
              <th>생일</th>
              <th>가입일시</th>
              <th>주문건수</th>
              <th>리뷰수</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {memberList.map((member)=>
            <tr key={member.mid}>
              <td>{member.rno}</td>
              <td>{member.nickname}</td>
              <td>{member.mid}</td>
              <td>{member.phone}</td>
              <td>{member.birthday}</td>
              <td>{member.mdate}</td>
              <td>{member.count_order}</td>
              <td>{member.count_review}</td>
              <td>
                <button>회원탈퇴</button>
              </td>
            </tr>
            )}
            {/* <tr>
              <td>cell1_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell4_1</td>
            </tr>
            <tr>
              <td>cell1_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell4_1</td>
            </tr>
            <tr>
              <td>cell1_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell4_1</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}