import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { GrPowerReset } from "react-icons/gr";

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
  const [toggle, setToggle] = useState(false);

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
    axios.get(`http://192.168.50.31:8001/admin/order/${startindex}/${endindex}/${value}`)
      .then((result) => {
        if (result.data.length !== 0) {
          setList(result.data);
          setTotalPage(result.data[0].total);
        } else {
          alert('해당하는 날짜의 주문건이 없습니다');
        }
      })
      .catch(console.err);
    }, [value, listPerPages, currentPage])
    
  const handleToggle = (e) => {
    const mid = e.target.dataset.id;
    if (toggle === false) {
      setToggle(true)
    } else {
      setToggle(false)
    }//if

    axios({
      method: 'get',
      url: `http://192.168.50.31:8001/admin/${mid}/`
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
    axios.put('http://192.168.50.31:8001/admin/update/', form)
      .then((result) => {
        alert('회원정보 수정이 완료되었습니다')
        setToggle(false);
      })
      .catch(console.err);
  };

  const handleChangeSort = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const maskingName = (name) => {
    if (name.length >= 2) {
      return name.replace(/(?<=.{1})./gi, '*');
    } else {
      return name;
    }
  };

  const maskingAddress = (address) => {
    const addressArray = address.split(" ")
    let maskAddress = '';
    for (let i = 0; i < addressArray.length - 1; i++) {
      if (i > addressArray.length - 5) {
        maskAddress += '*** ';
      } else {
        maskAddress += addressArray[i] + ' ';
      }
    }
    return maskAddress.trim();
  };

  const handleReset = (e) => {
    window.location.reload();
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
              <label htmlFor="sort">주문일자</label>
              <input name="odate" type="date" onChange={handleChangeSort} />
              <button onClick={handleReset}>
                <GrPowerReset className="admin_resetbtn" />
              </button>
            </div>
          </div>

          <table className="admin_table">
            <colgroup>
              <col style={{ width: '60px' }}/>
              <col style={{ width: '230px' }}/>
              <col style={{ width: '150px' }}/>
              <col style={{ width: '130px' }}/>
              <col style={{ width: '600px' }}/>
              <col style={{ width: '100px' }}/>
              <col style={{ width: '140px' }}/>
              <col style={{ width: '230px' }}/>
            </colgroup>
            <thead>
              <tr>
                <th>No.</th>
                <th>주문번호</th>
                <th>주문일</th>
                <th>주문자</th>
                <th>상품명</th>
                <th>수량</th>
                <th>주문금액(원)</th>
                <th>배송지정보</th>
              </tr>
            </thead>
            <tbody>
              {list.map((menu) =>
                <tr key={menu.rno}>
                  <td>{menu.rno}</td>
                  <td>{menu.common_id}</td>
                  <td>{menu.odate}</td>
                  <td>{maskingName(menu.orderer_name)}</td>
                  <td>{menu.product_name}</td>
                  <td>{menu.qty}</td>
                  <td>{menu.line_total.toLocaleString()}</td>
                  <td className="admin_order_address">{maskingAddress(menu.reciever_address)}</td>
                </tr>
              )}
            </tbody>
          </table>

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