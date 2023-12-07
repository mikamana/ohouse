import React, { useState } from "react";
import { getUser, removeUser } from "../utill/sessionStorage";
import "../../css/user/EditPassword.css"
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EditPassword(){
  const uerinfo = getUser();
  const [form, setForm] = useState({pass : "", newPass : "", newPassCheck : ""});
  const [passText, setpassText] = useState("");
  const [newPassText, setNewPassText] = useState("");
  const [newPassCheckText, setNewPassCheckText] = useState("");
  const [pass, setPass] = useState(false);
  const [passValue, setPassValue] = useState(false);
  const [passCheckValue, setPassCheckValue] = useState(false);
  const navigate = useNavigate();

  const handlepass = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name] : value});
  }

  const passCheck = (e) => {
    const {value} = e.target;
    if(value === ""){
      setpassText("필수 입력 항목입니다.");
      setPass(false)
    }else{
      setpassText("");
      setPass(true)
    }
  }

  const passRegExp = /^.*(?=^.{8,14}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;

  const newPassCheck  = () => {
    if(form.newPass.match(passRegExp) == null){
      setNewPassText("필수 입력 항목입니다.");
      setPassValue(false);
    }else{
      setNewPassText("");
      setPassValue(true);
    }
  }

  const newPassCheck2 = () => {
    if(form.newPassCheck.match(passRegExp) == null){
      setNewPassCheckText("확인을 위해 비밀번호를 한 번 더 입력해주세요.");
    }else{
      if(form.newPass === form.newPassCheck){
        setNewPassCheckText("");
        setPassCheckValue(true);
      }else{
        setNewPassCheckText("확인을 위해 비밀번호를 한 번 더 입력해주세요.");
        setPassCheckValue(false);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(pass && passValue && passCheckValue){
      axios.post(`http://127.0.0.1:8000/edit/password/password/${uerinfo.id}`, form)
      .then(result =>{
        if(result.data === "ok"){
          alert("비밀번호 변경완료 다시로그인 해주세요");
          navigate("/");
          removeUser();
        }else if(result.data === "no"){
          alert("비밀번호가 틀렸습니다.");
        }
      })
    }
  }

  return(
    <div className="EditPassword">
      {uerinfo === null ? (<div>잘못된 경로로 접속하셨습니다.</div>) : 
      (<div className="EditPasswordMain">
        <h2>비밀번호 변경</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>현재 비밀번호</label>
            <input type="password" name="pass" value={form.pass} onChange={handlepass} onBlur={passCheck}/>
            <p>{passText}</p>
          </div>
          <div>
            <label>새 비밀번호</label>
            <span>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
            <input type="password" name="newPass" value={form.newPass} onChange={handlepass} onBlur={newPassCheck}/>
            <p>{newPassText}</p>
          </div>
          <div>
            <label>새 비밀번호확인</label>
            <input type="password" name="newPassCheck" value={form.newPassCheck} onChange={handlepass} onBlur={newPassCheck2}/>
            <p>{newPassCheckText}</p>
          </div>
          <button>비밀번호 확인</button>
        </form>
      </div>)}
    </div>
  );
}