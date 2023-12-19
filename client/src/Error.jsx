import React from "react";
import './css/layout/error.css';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="error_content inner">
      <Link to="/">
        <img src="/images/user/login.png" alt="" />
      </Link>
      <h1>404</h1>
      <div className="error_text">요청하신 페이지를 찾을 수 없습니다!</div>
      <p>
        방문하시려는 페이지의 주소가 잘못 입력되었거나, 삭제되어 사용하실 수 없습니다.
        입력하신 주소가 정확한지 다시 한번 확인해 주세요.
      </p>
    </div>
  );
}