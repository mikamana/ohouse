import React, { useEffect, useState } from "react";
import "../../css/admin/adminpage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

/* 
회원관리 R, U (oh_member) : 정렬 (이름순, 주문순) get order by~, 
  회원 : mid, nickname, phone, homepage, gender, birthday, userimg, mdate, 탈퇴일
상품관리 C, R, U, D (oh_product) : 정렬(카테고리별, 갯수별)
주문관리 R, U, D (oh_order) : 정렬
리뷰관리 R, D  
*/

export default function Adminpage() {
  /* get : 회원list */
  const [memberList, SetMemberList] = useState([]); 

  /* 페이지당 게시물수 표시 */
  const [currentPage, SetCurrentPage] = useState(1);
  const [totalPage, SetTotalPage] = useState(0);
  const [listPerPages, SetListPerPages] = useState(10);

  /*  페이지당 게시물 수 변경 함수  */
  const handleChange = (e) => {
    const {value} = e.target;
    SetListPerPages(Number(value));
    SetCurrentPage(1);
  };

  useEffect(()=>{
    let startindex = 0;
    let endindex = 0;
    startindex = (currentPage - 1) * listPerPages + 1; 
    endindex = currentPage * listPerPages; 

    axios.get(`http://localhost:8000/admin/${startindex}/${endindex}`)
      .then((result) => {
        SetMemberList(result.data);
        SetTotalPage(result.data[0].total);
        //console.log(result.data[0]);
      })
      .catch(console.err);
  }, [memberList])

  const handleUpdate = () => {
    alert(``)
  }

  return (
    <div className="admin_section">
      <div className="admin_banner">
        <div className="admin_logowrap">
          <Link to ="/">
            <img className="admin_logo" src="http://localhost:3000/images/user/signup.png" alt="ohouse logo" />
          </Link>
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
        <div className="admin_content_count">
          <label htmlFor="displaycount">페이지 당 게시물 수</label>
          <select className="admin_count" id="displaycount" onChange={handleChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </div>
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
                <button className="admin_member_update" type="button" onClick={handleUpdate} data-id={member.mid}>정보수정</button>
                <button>탈퇴승인</button>
              </td>
            </tr>
            )}
          </tbody>  
        </table>
        <Pagination 
          className="admin-pagination"
          current = {currentPage}
          total = {totalPage}
          pageSize = {listPerPages}
          onChange = {(page) => SetCurrentPage(page)}
        />
      </div>
    </div>
  );
}