import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import ImageUpload from '../user/ImageUpload';
import ShopitemTodayStart from "../main/shopitem/components/Info/ShopitemTodayStart";

export default function AdminProduct() {
  /* get : list */
  const [list, setList] = useState([]);

  /* 정보수정 */
  const [form, setForm] = useState({ product_name: "", product_image: "", price_sale: "", price_origin: "", coupon_percent: "" });

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
    axios.get(`http://127.0.0.1:8000/admin/product/${startindex}/${endindex}/${value}`)
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
    //   setmenuList(result.data)
    // })
  }

  const [register, setRegister] = useState(false);
  const handleRegister = (e) => {
    const mid = e.target.dataset.id;
    //alert(`${mid}`)
    if (register === false) {
      setRegister(true)
    } else {
      setRegister(false)
    }//if

    // axios({
    //   method: 'post',
    //   url: `http://127.0.0.1:8000/admin/${mid}/`
    // })
    //   .then((result) => {
    //     //alert(JSON.stringify(result))
    //     setForm(result.data);
    //   })
    //   .catch(console.err);
  };//handleUpdate

  const getImage = (e) => {
    setForm({ ...form, product_image: e })
  }

  const handleSubmitReg = (e) => {
    e.preventDefault();
    // axios({
    //   method: 'post',
    //   url: 'http://127.0.0.1:8000/admin/product/register/',
    //   body: form
    // })
    //   .then((result) => {
    //   })
    //   .catch(console.err);
  };


  return (
    <>
      <div className="admin_section">
        <div className="admin_register">
          <button type="button" className="admin_regbtn" onClick={handleRegister}>신규상품 등록</button>
          <div className={register ? "admin_register_popup active" : "admin_register_popup"}>
            <p>신규상품 등록</p>
            <form className="admin_register_content" onSubmit={handleSubmitReg}>
              <div className="admin_register_contentwrap">
                <div className="admin_register_contentbox">
                  <label htmlFor="">상품명</label>
                  <input type="text" name="product_name" value={form.product_name} onChange={handleChange} />
                </div>
                <div className="admin_register_contentbox">
                  <label htmlFor="">상품이미지</label>
                  <ImageUpload getImage={getImage} />
                </div>
                <div className="admin_register_contentbox">
                  <label htmlFor="">정상가</label>
                  <input type="number" name="price_origin" value={form.price_origin} onChange={handleChange} />
                </div>
                <div className="admin_register_contentbox">
                  <label htmlFor="">할인가</label>
                  <input type="number" name="price_sale" value={form.price_sale} onChange={handleChange} />
                </div>
                <div className="admin_register_contentbox">
                  <label htmlFor="">쿠폰할인</label>
                  <input type="number" name="coupon_percent" value={form.coupon_percent} onChange={handleChange} />
                </div>
              </div>
              <button className="admin_editbtn">등록완료</button>
            </form>
          </div>
        </div>

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
                <th>NO.</th>
                <th>카테고리명</th>
                <th>상품명</th>
                <th>브랜드명</th>
                <th>대표이미지</th>
                <th>정상가</th>
                <th>할인율(%)</th>
                <th>쿠폰할인가</th>
                <th>배송유형</th>
                <th>등록일</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              {list.map((menu) =>
                <tr key={menu.pid}>
                  <td>{menu.rno}</td>
                  <td>{menu.category_name}</td>
                  <td>{menu.product_name}</td>
                  <td>{menu.brand_name}</td>
                  <td><img className="admin_image" src={menu.product_image} alt="" /></td>
                  <td>{menu.price_origin.toLocaleString() + "원"}</td>
                  <td>{menu.price_sale && menu.price_sale + "%"}</td>
                  <td>{menu.sale_price + "원"}</td>
                  <td>{<ShopitemTodayStart ts={menu.delivery_type} />}</td>
                  <td>{menu.pdate}</td>
                  <td>
                    <button className="admin_update_togglebtn" type="button" onClick={handleToggle} data-id={menu.mid}>정보수정</button>
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
    </>
  );
}