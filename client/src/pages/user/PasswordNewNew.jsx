import React, { useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getCookie } from "../utill/cookie";
import "../../css/user/PasswordNewNew.css"
import axios from 'axios';
import { removeCookie } from './../utill/cookie';

export default function PasswordNewNew() {
  const id = getCookie("ohouse-new");
  const [form, setForm] = useState({ pass: "", passcheck: "" });
  const [passText, setPassText] = useState("");
  const [passValue, setPassValue] = useState(false);
  const [passCheckText, setPasscheckText] = useState("");
  const [passCheckValue, setPassCheckValue] = useState(false);
  const navigate = useNavigate();
  const inputPass = useRef(null);
  const inputPassCheck = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handlePass = () => {
    const passRegExp = /^.*(?=^.{8,14}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;
    if (form.pass.match(passRegExp) == null) {
      setPassText("필수 입력 항목입니다.");
      setPassValue(false);
    } else {
      setPassText("");
      setPassValue(true);
    }
  }

  const handlePassCheck = () => {
    if (form.passcheck === "") {
      setPasscheckText("확인을 위해 비밀번호를 한 번 더 입력해주세요.");
    } else {
      if (form.pass == form.passcheck) {
        setPasscheckText("");
        setPassCheckValue(true);
      } else {
        setPasscheckText("확인을 위해 비밀번호를 한 번 더 입력해주세요.");
        setPassCheckValue(false);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passValue && passCheckValue) {
      axios.post("http://127.0.0.1:8000/users/password/new/new", { id: id, pass: form.pass })
        .then(result => {
          if (result.data === "ok") {
            removeCookie("ohouse-new");
            navigate("/");
          }
        })
    }
  }

  return (
    <>
      {id !== undefined ? (
        <div className="PasswordNewNew">
          <div className="PasswordNewNewLogo">
            <Link to={"/"}>
              <img src="http://127.0.0.1:3000/images/user/login.png" alt="logo" />
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="PasswordNewNewPass">
              <label className={(passText === "") ? "" : "PasswordNewNewLabelNotValue"}>비밀번호</label>
              <span className="PasswordNewNewTitle">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
              <input type="password" name="pass" onChange={handleChange} onBlur={handlePass} value={form.pass} ref={inputPass} placeholder="새비밀번호" className={(passText === "") ? "" : "PasswordNewNewNotValue"} />
              <span className="PasswordNewNewText">{passText}</span>
            </div>

            <div className="PasswordNewNewCheck">
              <label className={(passCheckText === "") ? "" : "PasswordNewNewLabelNotValue"}>비밀번호확인</label>
              <input type="password" name="passcheck" onChange={handleChange} onBlur={handlePassCheck} value={form.passcheck} ref={inputPassCheck} placeholder="새비밀번호 확인" className={(passCheckText === "") ? "" : "PasswordNewNewNotValue"} />
              <span className="PasswordNewNewText">{passCheckText}</span>
            </div>

            <button>비밀번호 변경하기</button>
          </form>

        </div>
      ) : (<div>잘못된 경로로 접속하셨습니다.</div>)}
    </>

  );
}