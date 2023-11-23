import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(){
  const [form, setForm] = useState({id : "", pass : ""});

  const handleChange = (e) => {
    const{name, value} = e.target;
    setForm({...form, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="id" placeholder="이메일" onChange={handleChange} value={form.id}/>
      </div>
      <div>
        <input type="password" name="pass" placeholder="비밀번호" onChange={handleChange} value={form.pass}/>
      </div>
      <button>로그인</button>
    </form>
    <span>비밀번호 재설정</span> <Link to="/normalUsers/new"><span>회원가입</span></Link>
    </>
  );
}