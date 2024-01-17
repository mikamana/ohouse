import React, { useState } from "react";
import { getUser, removeUser } from './../utill/sessionStorage';
import "../../css/user/Withdrawals.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Withdrawals() {
  const userinfo = getUser();
  const [form, setForm] = useState({ agree: false, lowuse: false, rejoin: false, lackOfContent: false, privacy: false, lackOfBenefits: false, etc: false });
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");
  const [length, setLength] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.agree) {
      if (form.lowuse || form.rejoin || form.lackOfContent || form.privacy || form.lackOfBenefits || form.etc) {
        axios.delete(`http://192.168.50.31:8001/edit/Withdrawals/${userinfo.id}`)
          .then(result => {
            if (result.data === "ok") {
              removeUser();
              navigate("/");
            }
          })
      } else {
        setText("필수 동의 항목입니다.");
      }
    } else {
      setText("필수 동의 항목입니다.");
    }
  }

  const textlength = (e) => {
    setLength(e.target.value.length);
    setTextarea(e.target.value);
  }

  return (
    <div className="Withdrawals">
      {userinfo === null ? (<div>잘못된 경로로 접속하셨습니다.</div>) : (
        <form onSubmit={handleSubmit}>
          <h1>회원탈퇴 신청</h1>
          <div>
            <h2>회원 탈퇴 신청에 앞서 아래 내용을 반드시 확인해주세요.</h2>
            <div className="WithdrawalsRead">
              <div className="WithdrawalsRead1">
                <h3>회원탈퇴 시 처리내용</h3>
                <ul>
                  <li>오늘의집 포인트·쿠폰은 소멸되며 환불되지 않습니다.</li>
                  <li>오늘의집 구매 정보가 삭제됩니다.</li>
                  <li>소비자보호에 관한 법률 제6조에 의거,계약 또는 청약철회 등에 관한 기록은 5년, 대금결제 및 재화등의 공급에 관한 기록은 5년, 소비자의 불만 또는 분쟁처리에 관한 기록은 3년 동안 보관됩니다. 동 개인정보는 법률에 의한 보유 목적 외에 다른 목적으로는 이용되지 않습니다.</li>
                </ul>
              </div>
              <div className="WithdrawalsRead2">
                <h3>회원탈퇴 시 게시물 관리</h3>
                <p>
                  회원탈퇴 후 오늘의집 서비스에 입력한 게시물 및 댓글은 삭제되지 않으며, 회원정보 삭제로 인해 작성자 본인을 확인할 수 없으므로 게시물 편집 및 삭제 처리가 원천적으로 불가능 합니다. 게시물 삭제를 원하시는 경우에는 먼저 해당 게시물을 삭제 하신 후, 탈퇴를 신청하시기 바랍니다.
                </p>
              </div>
              <div className="WithdrawalsRead3">
                <h3>회원탈퇴 후 재가입 규정</h3>
                <p>탈퇴 회원이 재가입하더라도 기존의 오늘의집 포인트는 이미 소멸되었기 때문에 양도되지 않습니다.</p>
              </div>
            </div>
            <div className="WithdrawalsReadCheck">
              <div><input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} /> <span>위 내용을 모두 확인하였습니다. <span>필수</span></span></div>
              <div className="WithdrawalsReadTel">고객센터 <b>1670-0876</b></div>
            </div>

            <div className="WithdrawalsText">{text}</div>

            <div>
              <h2>오늘의집 회원에서 탈퇴하려는 이유가 무엇인가요? (복수선택 가능) <span>필수</span></h2>
              <div className="WithdrawalsCheckbox">
                <div><input type="checkbox" name="lowuse" checked={form.lowuse} onChange={handleChange} /> <span>이용빈도 낮음</span></div>
                <div><input type="checkbox" name="rejoin" checked={form.rejoin} onChange={handleChange} /> <span>재가입</span></div>
                <div><input type="checkbox" name="lackOfContent" checked={form.lackOfContent} onChange={handleChange} /> <span>콘텐츠/제품정보/상품 부족</span></div>
                <div><input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange} /> <span>개인정보보호</span></div>
                <div><input type="checkbox" name="lackOfBenefits" checked={form.lackOfBenefits} onChange={handleChange} /> <span>회원특혜/쇼핑혜택 부족</span></div>
                <div><input type="checkbox" name="etc" checked={form.etc} onChange={handleChange} /> <span>기타</span></div>
              </div>

              <div className="WithdrawalsText">{text}</div>

            </div>
            <div className="WithdrawalsWrite">
              <h2>오늘의집 서비스 이용 중 어떤 부분이 불편하셨나요? <span className="WithdrawalsChoice">선택</span></h2>
              <p>오늘의집에 떠나는 이유를 자세히 알려주시겠어요? 여러분의 소중한 의견을 반영해 더 좋은 서비스로 꼭 찾아뵙겠습니다.</p>
              <textarea name="" id="" cols="30" rows="10" maxLength={2000} placeholder="선택하신 항목에 대한 자세한 이유를 남겨주시면 서비스 개선에 큰 도움이 됩니다." onChange={textlength}></textarea>
              <span className="length">{length}/2000</span>
            </div>
          </div>
          <div className="WithdrawalsButton">
            <button>탈퇴신청</button>
            <Link to="/users/edit"><button type="button">취소하기</button></Link>
          </div>
        </form>
      )}
    </div>
  );
}