import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import '../../css/user/Signup.css'

export default function Signup(){
  const [form, setForm] = useState({"eid":"", "domain":"", "pass":"", "passcheck":"", "nickname":""});
  const [idText, setIdText] = useState("");
  const [domain, setDomain] = useState(false);
  const [passText, setPassText] = useState("");
  const [passValue, setPassValue] = useState(false);
  const [passCheckText, setPasscheckText] = useState("");
  const [passCheckValue, setPassCheckValue] = useState(false);
  const [nickNameText, setNickNameText] = useState("");
  const [checkText, setCheckText] = useState("");
  const [allCheck, setAllCheck] = useState(false);
  const [check, setCheck] = useState({"q":false, "w": false, "e":false, "r":false, "t":false})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name] : value});

    if(name === "domain" && value === "self"){
      setForm({...form, domain : ""});
      setDomain(true);
    }
  }

  const selectChange = () => {
    setDomain(false);
  }

  const handlePass = () => {
    const passRegExp = /^.*(?=^.{8,14}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;
    if(form.pass.match(passRegExp) == null){
      setPassText("필수 입력 항목입니다.");
    }else{
      setPassText("");
      setPassValue(true);
    }
  }

  const handlePassCheck = () => {
    if(form.passcheck === ""){
      setPasscheckText("확인을 위해 비밀번호를 한 번 더 입력해주세요.");
    }else{
      if(form.pass == form.passcheck){
        setPasscheckText("");
        setPassCheckValue(true);
      }else{
      setPasscheckText("확인을 위해 비밀번호를 한 번 더 입력해주세요.");
      }
    }


  }

  const handlecheck = (e) => {
    const {name, checked} = e.target;
    setCheck((checks) => ({ ...checks, [name]: checked }));
    
    const allChecked = Object.values({ ...check, [name]: checked }).every((value) => value === true);
    setAllCheck(allChecked);
  }

  const handleAllcheck = (e) => {
    const { checked } = e.target;

    setCheck((checks) => Object.keys(checks).reduce(
      (newCheck, checkKey) => ({
        ...newCheck,
        [checkKey]: checked,
      }),
      {}
    )
  );
  setAllCheck(checked);
  }

  const inputEid = useRef(null);
  const inputDomain = useRef(null);
  const inputPass = useRef(null);
  const inputPassCheck = useRef(null);
  const inputNickname = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(form.eid === ""){
      setIdText("필수 입력 항목입니다.")
      return inputEid.current.focus();
    }
    
    if(form.domain === ""){
      setIdText("필수 입력 항목입니다.")
      return inputDomain.current.focus();
    }

    if(!passValue){
      setPassText("필수 입력 항목입니다.");
      return inputPass.current.focus();
    }

    if(!passCheckValue){
      setPasscheckText("확인을 위해 비밀번호를 한 번 더 입력해주세요.");
      return inputPassCheck.current.focus();
    }

    if(form.nickname === ""){
      setNickNameText("필수 입력 항목입니다.")
      return inputNickname.current.focus();
    }else{
      setNickNameText("")
    }

    if(!check.q || !check.w || !check.e){
      setCheckText("필수 항목에 동의해주세요.")
    }else{
      setCheckText("")
    }

  }

  return(
    <div className="Signup">
      <h3 className="SignupTitle">회원가입</h3>
      <form onSubmit={handleSubmit} className="SingupForm">
        <div className="SingupId">
          <label>이메일</label>
            <div className="SingupIdInput">
              <input className="SignupEid" type="text"  name="eid" onChange={handleChange} value={form.eid} ref={inputEid} placeholder="이메일"/> 
              <span className="SingupIdspan">@</span>
              {domain ? 
              <>
                  <input type="text" name="domain" onChange={handleChange} ref={inputDomain}/> 
                  <button className="SinupEmailClose" type="button" onClick={selectChange}>x</button>
              </>: 
              <select name="domain" onChange={handleChange} ref={inputDomain}>
                <option value="default">선택해주세여</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.net">gmail.com</option>
                <option value="nate.net">nate.com</option>
                <option value="hotmail.net">hotmail.com</option>
                <option value="outlook.net">outlook.com</option>
                <option value="icloud.net">icloud.com</option>
                <option value="self">직접선택하기</option>
              </select>}
              </div>
                <span>{idText}</span>
              <div>
                <button type="button" className="SignupIdButton">이메일 인증하기</button>
              </div>
        </div>

        <div className="SignupPass">
          <label htmlFor="">비밀번호</label>
          <span className="SignupText">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
          <input type="password" name="pass" onChange={handleChange} onBlur={handlePass} value={form.pass} ref={inputPass} placeholder="비밀번호"/>
          <span>{passText}</span>
        </div>

        <div className="SignupPassCheck">
          <label htmlFor="">비밀번호확인</label>
          <input type="password" name="passcheck" onChange={handleChange} onBlur={handlePassCheck} value={form.passcheck} ref={inputPassCheck} placeholder="비밀번호 확인"/>
          <span>{passCheckText}</span>
        </div>

        <div className="SignupNickName">
          <label htmlFor="">닉네임</label>
          <span className="SignupText">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</span>
          <input type="text" name="nickname" onChange={handleChange} value={form.nickname} ref={inputNickname} placeholder="별명 (2~15자)"/>
          <span>{nickNameText}</span>
        </div>

        <div className="SignupAgree">
          <label htmlFor="">약관동의</label>
          <div>
            <input type="checkbox" name="all" onChange={handleAllcheck} checked={allCheck}/> <span>전체동의 선택항목에 대한 동의 포함</span>
          </div>
          <hr />
          <div className="SingupAgreeCheckbox">
            <input type="checkbox" name="q" onChange={handlecheck} checked={check.q}/> <span>만 14세 이상입니다 <small>(필수)</small></span>
          </div>
          <div className="SingupAgreeCheckbox">
            <input type="checkbox" name="w" onChange={handlecheck} checked={check.w}/> <span>이용약관<small>(필수)</small></span>
          </div>
          <div className="SingupAgreeCheckbox">
            <input type="checkbox" name="e" onChange={handlecheck} checked={check.e}/> <span>개인정보수집 및 이용동의 <small>(필수)</small></span>
          </div>
          <div className="SingupAgreeCheckbox">
            <input type="checkbox" name="r" onChange={handlecheck} checked={check.r}/> <span>개인정보 마케팅 활용 동의 <small>(선택)</small></span>
          </div>
          <div className="SingupAgreeCheckbox"> 
            <input type="checkbox" name="t" onChange={handlecheck} checked={check.t}/> <span>이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신 <small>(선택)</small></span>
          </div>
          <span>{checkText}</span>
        </div>
        
        <div>
          <button className="SignupSubmitButton">회원가입하기</button>
        </div>
      </form>
        <Link to="/login"><span className="SinupLogin">이미 아이디가 있으신가요? 로그인</span></Link>
    </div>
  );
}