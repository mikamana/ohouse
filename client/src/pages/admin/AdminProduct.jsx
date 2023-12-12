import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import ImageUpload from '../user/ImageUpload';
import ShopitemTodayStart from "../main/shopitem/components/Info/ShopitemTodayStart";

export default function AdminProduct() {
  /* get : list */
  const [list, setList] = useState([]);
  const [cateList, setCateList] = useState([]);

  /* 정보수정 */
  const [form, setForm] = useState({ pid: "", category_id: "", product_name: "", product_image: "", price_sale: "", price_origin: "", tag_free: "", delivery_type: "" });
  const [itemForm, setItemForm] = useState({ category_id: "", brand_name: "", product_name: "", product_image: "", price_origin: "", price_sale: "", tag_free: "0", delivery_type: "" });

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

  /* 정렬 */
  const handleChangeSort = (e) => {
    const { value } = e.target;
    setValue(value)
  }

  /* 초기 리스트 조회 */
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/admin/product/${startindex}/${endindex}/${value}`)
      .then((result) => {
        if (result.data.length !== 0) {
          setList(result.data);
          setTotalPage(result.data[0].total);
        }
      })
      .catch(console.err);

    axios.get('/data/admin/adminProductcategory.json')
      .then((result) => {
        setCateList(result.data);
      })
      .catch(console.err);
  }, [value, listPerPages, currentPage])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setItemForm({ ...itemForm, [name]: value })
  };

  /* 정보수정 팝업 생성 */
  const [toggle, setToggle] = useState(false);
  const handleToggle = (e) => {
    const pid = e.target.dataset.id;
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    };//if

    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/admin/product/${pid}/`
    })
      .then((result) => {
        setForm(result.data);
      })
      .catch(console.err);
  };//handleToggle

  /* 정보수정 */
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/admin/product/update/${form.pid}`, form)
      .then((result) => {
        if(result.data === 'ok'){
          alert('상품정보 수정이 완료되었습니다');
          window.location.reload();
        }
      })
      .catch(console.err);
  };

  /* 상품등록 */
  const [register, setRegister] = useState(false);
  const handleRegister = (e) => {
    if (register === false) {
      setRegister(true);
    } else {
      setRegister(false);
    }//if
  };//handleRegister

  const getImage = (e) => {
    setForm({ ...form, product_image: e })
    setItemForm({ ...itemForm, product_image: e });
  }

  /* 상품등록 */
  const handleSubmitReg = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/admin/product/register/', itemForm)
      .then((result) => {
        if(result.data === 'ok'){
          alert('상품 등록이 완료되었습니다.');
          window.location.reload();
        }
      })
      .catch(console.err);
  };

  const handleRemove = (e) => {
    const pid = e.target.dataset.id;
    axios.delete(`http://127.0.0.1:8000/admin/product/remove/${pid}`)
    .then((result)=>{
      if(result.data === 'ok'){
        alert('삭제 완료');
        window.location.reload();
      }
    })
    .catch(console.err);
  };

  return (
    <>
      <div className="admin_section">
        <div className="admin_register">
          <button type="button" className="admin_regbtn" onClick={handleRegister}>신규상품 등록</button>
          <div className={register ? "admin_register_popup active" : "admin_register_popup"}>
            <p>상품 정보</p>
            <form className="admin_register_content" onSubmit={handleSubmitReg}>
              <div className="admin_register_contentwrap">
                <div className="admin_register_contentbox">
                  <label>카테고리</label >
                  <select name="category_id" id="" className="admin_product_category" onChange={handleChange} value={itemForm.category_id}>
                    <option value="default">카테고리 선택</option>
                    {cateList.map((list) =>
                      <option value={list.category_id} key={list.category_name}>{list.category_name}</option>
                    )}
                  </select>
                </div>
                <div className="admin_register_contentbox">
                  <label>상품명</label>
                  <textarea className="admin_update_productname" name="product_name" onChange={handleChange} value={itemForm.product_name} />
                </div>
                <div className="admin_register_contentbox">
                  <label>브랜드명</label>
                  <input type="text" name="brand_name" onChange={handleChange} value={itemForm.brand_name} />
                </div>
                <div className="admin_register_contentbox">
                  <label>대표이미지</label>
                  <ImageUpload getImage={getImage} value={itemForm.product_image} />
                </div>
                <div className="admin_register_contentbox">
                  <label>정상가(원)</label>
                  <input type="text" name="price_origin" onChange={handleChange} value={itemForm.price_origin} />
                </div>
                <div className="admin_register_contentbox">
                  <label>할인율(%)</label>
                  <input type="text" name="price_sale" onChange={handleChange} value={itemForm.price_sale} />
                </div>
                <div className="admin_register_contentbox">
                  <label>쿠폰할인가</label>
                  <div name="sale_price">{(Math.round(Math.round(itemForm.price_origin - (itemForm.price_origin * itemForm.price_sale / 100)) / 100) * 100).toLocaleString() + "원"}</div>
                </div>
                <div className="admin_register_contentbox">
                  <label>배송비</label>
                  <input className="checkbox" type="radio" name="tag_free" value={"1"} onChange={handleChange} /><span>무료배송</span>
                  <input className="checkbox" type="radio" name="tag_free" value={"0"} checked={itemForm.tag_free === "0" ? true : false} onChange={handleChange} /><span>배송비별도</span>
                </div>
                <div className="admin_register_contentbox">
                  <label>배송유형</label>
                  <input className="checkbox" type="radio" name="delivery_type" value={""} checked={itemForm.delivery_type === "" ? true : false} onChange={handleChange} /><span>일반배송</span>
                  <input className="checkbox" type="radio" name="delivery_type" value={"td"} onChange={handleChange} /><span>오늘출발</span>
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
                <th>No.</th>
                <th>카테고리명</th>
                <th>상품명</th>
                <th>브랜드명</th>
                <th>대표이미지</th>
                <th>정상가</th>
                <th>할인율</th>
                <th>쿠폰할인가</th>
                <th>배송유형</th>
                <th>등록일</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              {list.map((menu) =>
                <tr key={menu.pid} /* onClick={handleToggle} data-id={menu.pid} */>
                  <td>{menu.rno}</td>
                  <td>{menu.category_name}</td>
                  <td>{menu.product_name}</td>
                  <td>{menu.brand_name}</td>
                  <td><img className="admin_image" src={menu.product_image.includes("https://") ? menu.product_image : `http://127.0.0.1:8000/${menu.product_image}`} alt="" /></td>
                  <td>{menu.price_origin.toLocaleString() + "원"}</td>
                  <td>{menu.price_sale && menu.price_sale + "%"}</td>
                  <td>{menu.sale_price + "원"}</td>
                  <td>{<ShopitemTodayStart ts={menu.delivery_type} />}</td>
                  <td>{menu.pdate}</td>
                  <td>
                    <button className="admin_update_togglebtn" type="button" onClick={handleToggle} data-id={menu.pid}>수정</button>
                    <button className="admin_update_togglebtn" type="button" onClick={handleRemove} data-id={menu.pid}>삭제</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* 상품 정보 수정 */}
          <div className={toggle ? "admin_update_popup active" : "admin_update_popup"}>
            <p>정보 수정</p>
            <form className="admin_update_content" onSubmit={handleSubmit}>
              <div className="admin_update_contentwrap">
                <div className="admin_update_contentbox">
                  <label>카테고리</label >
                  <select name="category_id" id="" className="admin_product_category" onChange={handleChange} value={form.category_id}>
                    {cateList.map((list) =>
                      <option value={list.category_id} key={list.category_id}>{list.category_name}</option>
                    )}
                  </select>
                </div>
                <div className="admin_update_contentbox">
                  <label>상품명</label>
                  <textarea className="admin_update_productname" type="text" name="product_name" value={form.product_name} onChange={handleChange} />
                </div>
                <div className="admin_update_contentbox">
                  <label>대표이미지</label>
                  <img className="admin_update_image" src={form.product_image.includes("https://") ? form.product_image : (form.product_image === "" ? "" :  `http://127.0.0.1:8000/${form.product_image}`)} alt="상품이미지" />
                  <ImageUpload getImage={getImage} value={form.product_image} />
                </div>
                <div className="admin_update_contentbox">
                  <label>정상가(원)</label>
                  <input type="text" name="price_origin" value={form.price_origin.toLocaleString()} onChange={handleChange} />
                </div>
                <div className="admin_update_contentbox">
                  <label>할인율(%)</label>
                  <input type="text" name="price_sale" value={form.price_sale} onChange={handleChange} />
                </div>
                <div className="admin_update_contentbox">
                  <label>쿠폰할인가</label>
                  <div name="sale_price">{(Math.round(Math.round(form.price_origin - (form.price_origin * form.price_sale / 100)) / 100) * 100).toLocaleString() + "원"}</div>
                </div>
                <div className="admin_update_contentbox">
                  <label>배송유형</label>
                  <input className="checkbox" type="radio" name="delivery_type" value={""} checked={form.delivery_type === '' ? true : false} onChange={handleChange} /><span>일반배송</span>
                  <input className="checkbox" type="radio" name="delivery_type" value={"td"} checked={form.delivery_type === "td" ? true : false} onChange={handleChange} /><span>오늘출발</span>
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