import React, { useEffect, useState } from "react";
import "../../css/admin/adminpage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import AdminCateList from "./component/AdminCateList";

/* 
회원관리 R, U (oh_member) : 정렬 (이름순, 주문순) get order by~, 
  회원 : mid, nickname, phone, homepage, gender, birthday, userimg, mdate, 탈퇴일
상품관리 C, R, U, D (oh_product) : 정렬(카테고리별, 갯수별)
주문관리 R, U, D (oh_order) : 정렬
리뷰관리 R, D 
문의관리 R, D  
*/

export default function Adminpage() {
  /* get : 회원list */
  const [memberList, setMemberList] = useState([]);

  /* 회원정보수정 */
  const [form, setForm] = useState({ mid: "", nickname: "", phone: "", birthday: "" });

  /* 페이지당 게시물수 표시 */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  //let num = 10;
  const [listPerPages, setListPerPages] = useState(10);
  const [value, setValue] = useState('asc');

  /*  페이지당 게시물 수 변경 함수  */
  const handleChangeNum = (e) => {
    const { value } = e.target;
    setListPerPages(Number(value));
  };

  let startindex = 0;
  let endindex = 0;
  startindex = (currentPage - 1) * listPerPages + 1;
  endindex = currentPage * listPerPages;

  useEffect(() => {
    

    axios.get(`http://127.0.0.1:8000/admin/${startindex}/${endindex}/${value}`)
      .then((result) => {

        setMemberList(result.data);
        setTotalPage(result.data[0].total);
        //console.log(result.data[0]);

      })
      .catch(console.err);
  }, [value, listPerPages, currentPage])

  const [toggle, setToggle] = useState(false);
  const handleToggle = (e) => {
    const mid = e.target.dataset.id;
    //alert(`${mid}`)
    if (toggle === false) {
      setToggle(true)
    } else {
      setToggle(false)
    }//if

    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/admin/${mid}/`
    })
      .then((result) => {
        //alert(JSON.stringify(result))
        setForm(result.data);
      })
      .catch(console.err);
  };//handleUpdate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /* 정보수정 */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios.put('http://127.0.0.1:8000/admin/update/', form)
      .then((result) => {
        alert('회원정보 수정이 완료되었습니다')
        setToggle(false);
      })
      .catch(console.err);
  };

  const fnGetMember = (e) => {

    console.log(e)
    setMemberList(e)

  }

  //console.log(memberList);

  const handleChangeSort = (e) => {
    const {name, value} = e.target;
    console.log({name, value});
    setValue(value)

    // axios.get(`http://127.0.0.1:8000/admin/${startindex}/${endindex}/${value}`)
    // .then((result)=>{
    //   console.log(result.data);
    //   setMemberList(result.data)
    // })
  }

  return (
    <div className="admin_section">
      <div className="admin_banner">
        <div className="admin_logowrap">
          <Link to="/">
            <img className="admin_logo" src="http://127.0.0.1:3000/images/user/signup.png" alt="ohouse logo" />
          </Link>
        </div>
        <h1 className="admin_title">Admin</h1>
        <nav className="admin_navmenu">
          <Link to="/oh_member">회원관리</Link>
          <Link to="/oh_product">상품관리</Link>
          <Link to="/oh_order">주문관리</Link>
          <Link to="/oh_review">리뷰관리</Link>
          <Link to="/oh_review">문의관리</Link>
        </nav>
      </div>
      <div className="admin_content">
        <div className="admin_content_count">
          <label htmlFor="displaycount">페이지 당 게시물 수</label>
          <select className="admin_count" id="displaycount" onChange={handleChangeNum}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </div>
        <label htmlFor="sort">정렬</label>
        <select name="sort" id="sort" onChange={handleChangeSort}>
          <option value="default">정렬</option>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
        {/* <AdminCateList 
          list = {fnGetMember}
          startindex={startindex}
          endindex={endindex}
        /> */}
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
            {memberList.map((member) =>
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
                  <button className="admin_member_update" type="button" onClick={handleToggle} data-id={member.mid}>정보수정</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className={toggle ? "admin_update_popup active" : "admin_update_popup"}>
          <p>회원 정보 수정</p>
          <form className="admin_update_content" onSubmit={handleSubmit}>
            <div className="admin_update_contentwrap">
              <div className="admin_update_contentbox">
                <label htmlFor="">회원이름</label>
                <input type="text" name="nickname" value={form.nickname} onChange={handleChange} />
              </div>
              <div className="admin_update_contentbox">
                <label htmlFor="">회원아이디</label>
                <input type="text" name="mid" value={form.mid} onChange={handleChange} />
              </div>
              <div className="admin_update_contentbox">
                <label htmlFor="">휴대폰번호</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
              </div>
              <div className="admin_update_contentbox">
                <label htmlFor="">생일</label>
                <input type="date" name="birthday" value={form.birthday} onChange={handleChange} />
              </div>
            </div>
            <button className="admin_editbtn">수정완료</button>
          </form>
        </div>

        <Pagination
          className="admin-pagination"
          current={currentPage}
          total={totalPage}
          pageSize={listPerPages}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}