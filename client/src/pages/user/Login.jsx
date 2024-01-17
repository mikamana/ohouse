import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/user/Login.css"
import axios from 'axios';
import { jwtDecode } from "jwt-decode"
import { setCookie } from './../utill/cookie';

export default function Login() {
  const [form, setForm] = useState({ id: "", pass: "" });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleBlur = (e) => {
    const { value } = e.target;
    if (value === "") {
      e.target.className = "LoginNotValue"
    } else {
      e.target.className = ""
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const idregExp = /^.*(?=.*[@]).*$/;
    if (form.id.match(idregExp) != null && form.pass !== "") {
      axios.post("http://192.168.50.31:8001/login", form)
        .then(result => {
          if (result.data.login_result) {
            setCookie("ohouse-jwt", result.data.token);
            const userid = jwtDecode(result.data.token);
            sessionStorage.setItem("userInfo", JSON.stringify(userid));
            navigate("/");
            if (userid.id === "@") {
              setCookie("ohouse-manager", userid.id);
            }
          } else {
            alert("이메일 주소나 비밀번호가 틀립니다")
            e.target.childNodes[1].firstChild.value = ""
          }
        })
    } else {
      e.target.firstChild.firstChild.className = "LoginNotValue"
      e.target.childNodes[1].firstChild.className = "LoginNotValue"
    }
  }

  return (
    <div className="Login">
      <div className="LoginLogo">
        <Link to={"/"}>
          <img src="http://192.168.50.31:3001/images/user/login.png" alt="logo" />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="id" placeholder="이메일" onChange={handleChange} value={form.id} onBlur={handleBlur} />
        </div>
        <div>
          <input type="password" name="pass" placeholder="비밀번호" onChange={handleChange} value={form.pass} onBlur={handleBlur} />
        </div>
        <button className="LoginButton">로그인</button>
      </form>
      <div className="LoginUrl">
        <Link to="/users/password/new"><span>비밀번호 재설정</span> </Link><Link to="/normalUsers/new"><span>회원가입</span></Link>
        <div className="LoginSNS">SNS계정으로 간편 로그인/회원가입</div>
        <div className="LoginSNSLogo">
          <img src="http://192.168.50.31:3001/images/user/facebook.png" alt="facebook" />
          <img src="http://192.168.50.31:3001/images/user/kakao.png" alt="kakao" />
          <img src="http://192.168.50.31:3001/images/user/naver.png" alt="naver" />
        </div>
        <div className="LoginErr">로그인에 문제가 있으신가요?</div>
      </div>
      <div className="LoginNoMember">
        <div className="LoginNoMemberOrder">비회원 주문 조회</div>
      </div>
      <div className="Loginfooter">©  bucketplace, Co., Ltd.. All Rights Reserved</div>
    </div>
  );
}