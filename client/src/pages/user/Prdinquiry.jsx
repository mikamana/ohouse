import React, { useEffect, useState } from "react";
import { PiLockKeyLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import '../../css/user/prdinquiry.css';
import axios from "axios";
import { getUser } from './../utill/sessionStorage';

export default function Prdinquiry() {
  const userInfo = getUser();
  const [inquiryList, setInquiryList] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/users/prdinquiry/${userInfo.id}`)
      .then((result) => {
        setInquiryList(result.data);
      })
      .catch(console.err);
  }, [reset])

  const handleClick = (e) => {
    const qid = e.target.dataset.id;
    let confirm = window.confirm('정말 문의를 삭제하시겠어요?');
    if (confirm) {
      axios.delete(`http://127.0.0.1:8000/users/prdinquiry/remove/${qid}`)
        .then((result) => {
          if (result.data === 'ok') {
            alert('삭제가 완료되었습니다.');
            setReset(!reset)
          };
        })
        .catch(console.err);
    }
  }

  return (
    <div className="prdinquiry_section inner">
      {inquiryList.length === 0
        ?
        <h1>등록된 문의가 없습니다.</h1>
        :
        inquiryList.map((list) =>
          <div className="prdinquiry_content" key={list.qid}>
            {/* qid, mid, qtype, left(qdate,10) qdate, qcontent, left(adate,10) adate, acontent, secret_check, p.product_name */}
            <div className="prdinquiry_titlebox">
              <span>{list.acontent.includes("대기중") ? "미답변" : "답변완료"}</span>
              <span>{list.qtype}</span>
              <span>
                {list.secret_check === 1 ? <PiLockKeyLight className="prdinquiry_lockkey" size="20" /> : null}
              </span>
              <span>
                <Link to={`/production/${list.pid}`}>{list.product_name}</Link>
              </span>
              <span>{list.qdate}</span>
            </div>
            <div className="prdinquiry_question">
              <span>Q</span>
              <div className="prdinquiry_question_content">
                {list.qcontent}
              </div>
            </div>
            <div className="prdinquiry_answer">
              {list.acontent}
              <p>{list.adate}</p>
            </div>
            <button onClick={handleClick} data-id={list.qid}>삭제</button>
          </div>
        )}
    </div>
  );
}