import React, { useState } from "react";
import "../../css/user/PasswordNew.css"
import axios from 'axios';
import { setCookie } from './../utill/cookie';
import { useNavigate } from 'react-router-dom';

export default function PasswordNew(){
  const [id, setId] = useState({id : ""});
  const [idText, setIdText] = useState("");
  const [idCheck, setIdCheck] = useState(false);
  const [idValue, setIdValue] = useState([]);
  const [phone, setphone] = useState ([]);
  const [phoneInput, setPhoneInput] = useState({first : "", middle : "", last : ""});
  const [phoneText, setPhoneText] = useState("");
  const [emailButton, setEmailButton] = useState(false);
  const [email, setEmai] = useState([]);
  const [emailCode, setEmaiCode] = useState({code : ""});
  const [emailCodeText, setEmaiCodeText] = useState("")
  const [emailPage, setEmaiPage] = useState(false);
  const navigate = useNavigate()

  const handleIdValue = (e) => {
    if(id.id === ""){
      setIdText("필수 입력 항목입니다.");
      setIdCheck(false);
    }else{
      setIdText("");
      setIdCheck(true);
    }
  }

  const handleId = (e) => {
    const {name, value} = e.target;
    setId({...id, [name] : value});
  }

  const handleIdCheck = () => {
    if(idCheck){
      axios.post("http://localhost:8000/users/password/new", id)
      .then(result => {
        if(result.data.cntid === 1){
          setIdValue(result.data.cntid);
          if(result.data.cnt === 1){
            setphone(result.data);
          }else{
            alert("인증완료");
            setEmailButton(true);
          }
        }else{
          setIdText("등록된 이메일 주소가 아닙니다.");
        }
      })
    }
  }

  const handlePhone = (e) => {
    const {name, value} = e.target;
    setPhoneInput({...phoneInput, [name]:value});
  }

  const handlePhoneValue = (e) => {
    const {value} = e.target;
    if(value === "" || phoneInput.first.length < 3 || phoneInput.middle.length < 4 || phoneInput.last.length <4){
      setPhoneText("필수 입력 항목입니다.");
    }else{
      setPhoneText("");
    }
  }

  const handlePhoneCheck = () => {
    const userphone = phoneInput.first + phoneInput.middle + phoneInput.last
    if(userphone === phone.phone){
      alert("인증완료");
      setEmailButton(true);
    }else{
      alert("인증실패");
    }
  }

  const handleEmail = () => {
    if(emailButton){
      axios.post("http://localhost:8000/users/password/new/email", id)
      .then(result => {
        console.log(result.data);
        setEmai(result.data);
        setEmaiPage(true)
      })
    }
  }

  const handleEmailCode = (e) => {
    const {name, value} = e.target;
    setEmaiCode({...emailCode, [name] : value})
  }

  const handleEmailCodeCheck = (e) => {
    const {name, value} = e.target;
    if(value === ""){
      setEmaiCodeText("필수 입력 항목입니다.");
    }else{
      setEmaiCodeText("");
    } 
  }

  const handleEmailCheck = () => {
    if(email === emailCode.code){
      setCookie("ohouse-new",id.id);
      navigate("/users/password/new1")
    }else{
      setEmaiCodeText("이메일 코드가 같지 않습니다.");
    }
  }

  return(
    <div className="PasswordNew">
    {!emailPage ? (
      <>
      <div className="PasswordNewTitle">가입한 이메일 주소를 입력해주세요.</div>
      <div className="PasswordNewIdCheck">
        <input type="text" placeholder="이메일" name="id" value={id.id} onChange={handleId} onBlur={handleIdValue} className={(idText === "")? "": "PasswordNewInput"} readOnly={idValue === 1}/>
        <button type="button" onClick={handleIdCheck} disabled={idValue === 1}>확인</button>
      </div>
        <div className="PasswordNewIdText">{idText}</div>
        {phone.cnt === 1 &&
        <div className="PasswordNewPhone">
          <div className="PasswordNewPhoneTitle">오늘의집에서 사용한 휴대폰 번호를 입력해주세요.</div>
          <div className="PasswordNewPhoneHint">{"힌트:(" + phone.phoneleft + "-" + "****" + "-" + "**" + phone.phoneright + ")"}</div>
          <div className="PasswordNewPhoneDiv" onBlur={handlePhoneValue}>
            <input type="text" name="first" id="" maxLength={3} placeholder="010" onChange={handlePhone} value={phoneInput.first} readOnly={emailButton} className={phoneText === "" || "PasswordNewPhoneInput"}/>
            <span>-</span>
            <input type="text" name="middle" id="" maxLength={4} placeholder="0000" onChange={handlePhone} value={phoneInput.middle} readOnly={emailButton} className={phoneText === "" || "PasswordNewPhoneInput"}/>
            <span>-</span>
            <input type="text" name="last" id="" maxLength={4} placeholder="0000" onChange={handlePhone} value={phoneInput.last}  readOnly={emailButton} className={phoneText === "" || "PasswordNewPhoneInput"}/>
            <button type="button" onClick={handlePhoneCheck} disabled={emailButton}>확인</button>
            <div className="PasswordNewPhoneText">{phoneText}</div>
          </div>
        </div>
        }
      <button className="PasswordNewEmailButton" type="button" onClick={handleEmail}>이메일로 인증코드 받기</button>
      </>
      ) : (
      <>
      <div className="PasswordNewEmail">
          <div className="PasswordNewEmailTitle">이메일로 전송된 인증코드를 입력해주세요.</div>
          <div>
            <input type="text" placeholder="인증코드입력" name="code" value={emailCode.code} onChange={handleEmailCode} onBlur={handleEmailCodeCheck}/>
            <div className="PasswordNewEmailText">{emailCodeText}</div>
            <span>이메일을 받지 못하셨나요? <span className="PasswordNewEmailReturn" onClick={handleEmail}>이메일 재전송하기</span></span>
            <button className="PasswordNewEmailButton" type="button" onClick={handleEmailCheck}>비밀번호 재설정하기</button>
          </div>
        </div>
        <div className="PasswordNewAsk">
          <div>회원가입시 입력한 정보가 기억나지 않는다면?</div>
          <div>고객센터문의하기(1670-0876)</div>
        </div>
    </>
    )}
    </div>
  );
}