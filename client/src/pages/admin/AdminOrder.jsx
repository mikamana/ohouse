import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

export default function AdminOrder() {
  /* get : 회원list */
  const [list, setList] = useState([]);

  /* 회원정보수정 */
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
    axios.get(`http://127.0.0.1:8000/admin/order/${startindex}/${endindex}/${value}`)
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
    axios.put('http://127.0.0.1:8000/admin/update/', form)
      .then((result) => {
        alert('회원정보 수정이 완료되었습니다')
        setToggle(false);
      })
      .catch(console.err);
  };

  const handleChangeSort = (e) => {
    const { value } = e.target;
    setValue(value)

    // axios.get(`http://127.0.0.1:8000/admin/${startindex}/${endindex}/${value}`)
    // .then((result)=>{
    //   setMemberList(result.data)
    // })
  }

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
                <th>주문번호</th>
                <th>주문일</th>
                <th>주문고객 / 연락처</th>
                <th>상품명</th>
                <th>총 수량</th>
                <th>총 주문금액</th>
                <th>배송지정보</th>
              </tr>
            </thead>
            <tbody>
                {/* select row_number() over(order by orderer_name) as rno, p.common_id, orderer_name, orderer_phone, odate, qty, line_total, paydate, payment, reciever_address from oh_pay p, oh_order_save o where p.common_id=o.common_id; */}
              {list.map((menu) =>
                <tr key={menu.mid}>
                  <td>{menu.rno}</td>
                  <td className="admin_order_td">{menu.common_id}</td>
                  <td>{menu.odate}</td>
                  <td className="admin_order_td2">{menu.orderer_name}<br></br> {menu.orderer_phone}</td>
                  <td>{menu.product_name}</td>
                  <td>{menu.qty}</td>
                  <td>{menu.line_total}</td>
                  <td className="admin_order_td">{menu.reciever_address}</td>
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