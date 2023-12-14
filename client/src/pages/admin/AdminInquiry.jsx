import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

export default function AdminInquiry() {
  /* get : list */
  const [list, setList] = useState([]);

  /* 회원정보수정 */
  const [content, setContent] = useState({ qid: "", acontent: "" });

  /* 페이지네이션 */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [listPerPages, setListPerPages] = useState(10);
  const [value, setValue] = useState('default');

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
    axios.get(`http://127.0.0.1:8000/admin/inquiry/${startindex}/${endindex}/${value}`)
      .then((result) => {
        if (result.data.length !== 0) {
          setList(result.data);
          setTotalPage(result.data[0].total);
        }
      })
      .catch(console.err);
  }, [value, listPerPages, currentPage])

  const [toggle, setToggle] = useState("");
  const handleToggle = (e, idx) => {
    if (toggle !== idx) {
      setToggle(idx)
    } else {
      setToggle("")
    }
  };//handleToggle

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
    //console.log(content);
  };

  const handleChangeSort = (e) => {
    const { value } = e.target;
    console.log(value);
    setValue(value);
  };

  /* 정보수정 */
  const handleRegister = (e) => {
    const qid = e.target.dataset.id;
    axios.put(`http://127.0.0.1:8000/admin/inquiry/update/${qid}`, content)
      .then((result) => {
        alert('답변 등록이 완료되었습니다');
        window.location.reload();
      })
      .catch(console.err);
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
              <select name="sort" id="sort" onChange={handleChangeSort}>
                <option value="default">답변여부</option>
                <option value="N">미답변</option>
                <option value="Y">답변완료</option>
              </select>
            </div>
          </div>

          <table className="admin_table">
            <colgroup>
              <col style={{ width: '63px'}}/>
              <col style={{ width: '165px'}}/>
              <col style={{ width: '125px'}}/>
              <col style={{ width: '400px'}}/>
              <col style={{ width: '500px'}}/>
              <col style={{ width: '100px'}}/>
              <col style={{ width: '128px'}}/>
              <col style={{ width: '160px'}}/>
            </colgroup>
            <thead>
              <tr>
                <th>No.</th>
                <th>문의날짜</th>
                <th>문의유형</th>
                <th>상품명</th>
                <th>문의내용</th>
                <th>닉네임</th>
                <th>답변여부</th>
                <th>답변작성일</th>
              </tr>
            </thead>
            <tbody>
              {/* 글자수 체크 기능 넣어보기!! */}
              {list.map((menu, idx) =>
                <React.Fragment key={menu.qid}>
                  <tr className="admin_inquiry_tr" onClick={(e) => handleToggle(e, idx)} title="클릭해서 답변을 작성해주세요">
                    <td>{menu.rno}</td>
                    <td>{menu.qdate}</td>
                    <td>{menu.qtype}</td>
                    <td>{menu.product_name}</td>
                    <td>{menu.qcontent}</td>
                    <td>{menu.mid}</td>
                    {/* {menu.secret_check === "0" ? (<td>N</td>) : (<td>Y</td>)} */}
                    {menu.acontent.includes("대기중") ? (<td>N</td>) : (<td>Y</td>)}
                    {!menu.adate ? (<td>미답변</td>) : (<td>{menu.adate}</td>)}
                  </tr>
                  <tr className={idx === toggle ? "admin_inquiry_answer active" : "admin_inquiry_answer"}>
                    <td colSpan={8} className="admin_inquiry_td">
                      <span>답변내용</span>
                      <textarea cols="200" rows="3" name="acontent" value={content.acontent} placeholder={menu.acontent} onChange={handleChange}></textarea>
                      <button onClick={handleRegister} data-id={menu.qid}>등록</button>
                    </td>
                  </tr>
                </React.Fragment>
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


