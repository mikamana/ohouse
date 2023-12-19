import React from "react";
import { PiLockKeyLight } from "react-icons/pi";
import '../../css/user/prdinquiry.css';
import { Link } from 'react-router-dom';

export default function Prdinquiry() {
  return (
    <div className="prdinquiry_section inner">
      <div className="prdinquiry_content">
        <div className="prdinquiry_titlebox">
          <span>답변완료</span>
          <span>교환</span>
          <span><PiLockKeyLight className="prdinquiry_lockkey" size="20" /></span>
          <span>2022.10.10</span>
        </div>
        <p>
          <Link to="/">어반 모던 커트러리 2P세트 (포크+나이프) 3colors</Link>
        </p>
        <div className="prdinquiry_question">
          <span>Q</span>
          <div className="prdinquiry_question_content">
            구매했는데 엘리베이터없는 5층입니다. 사다리없이 택배로만 배송이 가능할까요? 추가비용은 얼마나 나올까요?
            구매했는데 엘리베이터없는 5층입니다. 사다리없이 택배로만 배송이 가능할까요? 추가비용은 얼마나 나올까요?
          </div>
        </div>
      </div>
    </div>
  );
}