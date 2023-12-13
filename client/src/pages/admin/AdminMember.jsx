import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

export default function AdminMember() {
  /* get : list */
  const [list, setList] = useState([]);

  /* 정보수정 */
  const [form, setForm] = useState({ mid: "", nickname: "", phone: "", birthday: "" });

  /* 페이지네이션 */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [listPerPages, setListPerPages] = useState(10);
  const [value, setValue] = useState('asc');

  let startindex = 0;
  let endindex = 0;
  startindex = (currentPage - 1) * listPerPages + 1;
  endindex = currentPage * listPerPages;

  /*  페이지당 게시물 수 변경  */
  const handleChangeNum = (e) => {
    const { value } = e.target;
    setListPerPages(Number(value));
  };

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/admin/member/${startindex}/${endindex}/${value}`)
      .then((result) => {
        if (result.data.length !== 0) {
          setList(result.data);
          setTotalPage(result.data[0].total);
        }
      })
      .catch(console.err);
  }, [value, listPerPages, currentPage])

  const [toggle, setToggle] = useState(false);
  const handleToggle = (e) => {
    const mid = e.target.dataset.id;
    if (toggle === false) {
      setToggle(true)
    } else {
      setToggle(false)
    }//if

    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/admin/member/${mid}/`
    })
      .then((result) => {
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
    axios.put('http://127.0.0.1:8000/admin/update/', form)
      .then((result) => {
        alert('회원정보 수정이 완료되었습니다')
        setToggle(false);
        window.location.reload();
      })
      .catch(console.err);
  };

  const handleChangeSort = (e) => {
    const { value } = e.target;
    setValue(value)
  }

  const maskingMail = (email) => {
    let id = email.split("@")
    let id2 = id[1].split(".")
    if(id2[0] === ""){
      return id[0].replace(/(?<=.{1})./gi, '*') + "@" + id2[0].replace(/(?<=.{2})./gi, '*');
    }else if(id2[2]){
      return id[0].replace(/(?<=.{1})./gi, '*') + "@" + id2[0].replace(/(?<=.{2})./gi, '*')+ "." + id2[2] ;
    }else if(id2[2] === undefined){
      return id[0].replace(/(?<=.{1})./gi, '*') + "@" + id2[0].replace(/(?<=.{2})./gi, '*')+ "." + id2[1] ;
    }
  };

  const maskingBirthday = (birthday) => {
    let day = birthday.split("-")
    if(birthday !== '미입력'){
      return day[0].replace(/(?<=.{2})./gi, '*') + '-' + '**'+ '-' + '**';
    }else{
      return '미입력'
    }
  };

  return (
    <>
      <div className="admin_section">
        <div className="admin_content">
          <div className="admin_content_option">
            <div className="admin_content_count">
              <label htmlFor="displaycount">페이지 당 게시물 수</label>
              <select className="admin_count" id="displaycount" onChange={handleChangeNum}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
            </div>
            <div className="admin_content_sort">
              <label htmlFor="sort">정렬</label>
              <select name="sort" id="sort" onChange={handleChangeSort}>
                <option value="default">이름순</option>
                <option value="asc">오름차순</option>
                <option value="desc">내림차순</option>
              </select>
            </div>
          </div>

          <table className="admin_table">
            <thead>
              <tr>
                <th>No.</th>
                <th>닉네임</th>
                <th>아이디</th>
                <th>생일</th>
                <th>가입일시</th>
                <th>주문건수</th>
                <th>리뷰수</th>
              </tr>
            </thead>
            <tbody>
              {list.map((menu) =>
                <tr key={menu.mid}>
                  <td>{menu.rno}</td>
                  <td>{menu.nickname}</td>
                  <td>{maskingMail(menu.mid)}</td>
                  <td>{maskingBirthday(menu.birthday)}</td>
                  <td>{menu.mdate}</td>
                  <td>{menu.count_order}</td>
                  <td>{menu.count_review}</td>
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
    </>
  );
}