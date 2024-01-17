import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from 'rc-pagination';
import { useParams } from 'react-router-dom';
import 'rc-pagination/assets/index.css';

export default function AdminContent() {

  const { category } = useParams();

  const [menuList, setMenuList] = useState([]);

  //const menuList = [' ', '회원이름', '회원아이디', '생일', '가입일시', '주문건수', '리뷰수', '비고'];

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

  const [newDataList, setNewDataList] = useState([]);

  function createNewData(obj) {
    // setNewDataList();
    newDataList.length = 0;

    obj.map((person) => {
      const newData = [];
      Object.getOwnPropertyNames(person).forEach(function (val, idx, array) {
        if(val === 'total'){
          return 
        }else if (val === 'pid'){
          newData.push('')
          return 
        }
        newData.push(JSON.stringify(person[val]));
      });
      newDataList.push(newData);
      // setNewDataList([newData])
    })
  }

  useEffect(() => {
    if (category === 'member') {
      setMenuList(['No.', '닉네임', '아이디', '생일', '가입일시', '주문건수', '리뷰수', '비고']);
    } else if (category === 'product') {
      setMenuList(['No.', '카테고리명', '상품명', '브랜드명', '대표이미지', '정상가', '할인율(%)', '쿠폰할인가', '배송유형', '등록일', '비고']);
    }
    axios.get(`http://192.168.50.31:8001/admin/${category}/${startindex}/${endindex}/${value}`)
      .then((result) => {
        if (result.data.length !== 0) {
          setList(result.data);
          setTotalPage(result.data[0].total);
          createNewData(result.data);
        }
      })
      .catch(console.err);
  }, [value, listPerPages, currentPage, category])


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
      url: `http://192.168.50.31:8001/admin/member/${mid}/`
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
    axios.put('http://192.168.50.31:8001/admin/update/', form)
      .then((result) => {
        alert('회원정보 수정이 완료되었습니다')
        setToggle(false);
      })
      .catch(console.err);
  };

  const handleChangeSort = (e) => {
    const { value } = e.target;
    setValue(value)

    // axios.get(`http://192.168.50.31:8001/admin/${startindex}/${endindex}/${value}`)
    // .then((result)=>{
    //   setmenuList(result.data)
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
              {/* <tr>
                <th>NO.</th>
                <th>닉네임</th>
                <th>아이디</th>
                <th>휴대폰번호</th>
                <th>생일</th>
                <th>가입일시</th>
                <th>주문건수</th>
                <th>리뷰수</th>
                <th>비고</th>
              </tr> */}
              <tr>
                {menuList.map((menu) =>
                  <th key={menu}>{menu}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {newDataList.map((obj1) =>
                <tr>
                  {obj1.map((person) => 
                    person.includes("image") ? (<td key={person.rno}><img className="admin_image" src={person.replace(/"/g, "")} alt="dd" /></td>) : <td key={person.rno}>{person.replace(/"/g, "")}</td>
                    )}
                  <td><button>삭제</button></td>
                </tr>
              )}

              {/* {list.map((menu) =>
                <tr key={menu.mid}>
                  <td>{menu.rno}</td>
                  <td>{menu.nickname}</td>
                  <td>{menu.mid}</td>
                  <td>{menu.phone}</td>
                  <td>{menu.birthday}</td>
                  <td>{menu.mdate}</td>
                  <td>{menu.count_order}</td>
                  <td>{menu.count_review}</td>
                  <td>
                    <button className="admin_update_togglebtn" type="button" onClick={handleToggle} data-id={menu.mid}>정보수정</button>
                  </td>
                </tr>
              )} */}
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