import React, { useRef, useState } from "react";

export default function Login(){
  const [form, setForm] = useState({"eid":"", "domain":"", "pass":"", "passcheck":"", "nickname":""});
  const [domain, setDomain] = useState(false);
  const [passText, setPassText] = useState("");
  const [passValue, setPassValue] = useState(false);
  const [passCheckText, setPasscheckText] = useState("");
  const [passCheckValue, setPassCheckValue] = useState(false);
  const [allCheck, setAllCheck] = useState(false);
  const [check, setCheck] = useState({"q":false, "w": false, "e":false, "r":false, "t":false})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name] : value});

    if(name === "domain" && value === "self"){
      setForm({...form, domain : ""})
      setDomain(true)
    }
  }

  const handlePass = () => {
    const passRegExp = /^.*(?=^.{8,14}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;
    if(form.pass.match(passRegExp) == null){
      setPassText("비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.")
    }else{
      setPassText("사용가능");
      setPassValue(true)
    }
  }

  const handlePassCheck = () => {
    if(form.pass == form.passcheck){
      setPasscheckText("패스워드 같음")
      setPassCheckValue(true)
    }else{
      setPasscheckText("패스워드 다름")
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
  const inputCheckBox = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(form.eid === ""){
      alert("이메일 등록")
      return inputEid.current.focus();
    }
    
    if(form.domain === ""){
      alert("이메일 등록")
      return inputDomain.current.focus();
    }

    if(!passValue){
      alert("비밀번호 확인")
      return inputPass.current.focus();
    }

    if(!passCheckValue){
      alert("비밀번호 확인")
      return inputPassCheck.current.focus();
    }

    if(form.nickname === ""){
      alert("닉네임 확인")
      return inputNickname.current.focus();
    }

    if(!check.q || !check.w || !check.e){
      alert("필수 동의")
      return inputCheckBox.current.focus();
    }

  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이메일</label>
          <input type="text"  name="eid" onChange={handleChange} value={form.eid} ref={inputEid}/> @
          {domain ? 
          <input type="text" name="domain" onChange={handleChange} ref={inputDomain}/> : 
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
            <span></span>
        </div>

        <div>
          <button type="button">이메일 인증하기</button>
        </div>

        <div>
          <label htmlFor="">비밀번호</label>
          <span>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
          <input type="password" name="pass" onChange={handleChange} onBlur={handlePass} value={form.pass} ref={inputPass}/>
          <span>{passText}</span>
        </div>

        <div>
          <label htmlFor="">비밀번호확인</label>
          <input type="password" name="passcheck" onChange={handleChange} onBlur={handlePassCheck} value={form.passcheck} ref={inputPassCheck}/>
          <span>{passCheckText}</span>
        </div>

        <div>
          <label htmlFor="">닉네임</label>
          <span>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</span>
          <input type="text" name="nickname" onChange={handleChange} value={form.nickname} ref={inputNickname}/>
          <span></span>
        </div>

        <div>
          <div>
            <input type="checkbox" name="all" onChange={handleAllcheck} checked={allCheck} ref={inputCheckBox}/> <span>전체동의 선택항목에 대한 동의 포함</span>
          </div>
          <div>
            <input type="checkbox" name="q" onChange={handlecheck} checked={check.q}/> <span>만 14세 이상입니다 <small>(필수)</small></span>
          </div>
          <div>
            <input type="checkbox" name="w" onChange={handlecheck} checked={check.w}/> <span>이용약관<small>(필수)</small></span>
          </div>
          <div>
            <input type="checkbox" name="e" onChange={handlecheck} checked={check.e}/> <span>개인정보수집 및 이용동의 <small>(필수)</small></span>
          </div>
          <div>
            <input type="checkbox" name="r" onChange={handlecheck} checked={check.r}/> <span>개인정보 마케팅 활용 동의 <small>(선택)</small></span>
          </div>
          <div>
            <input type="checkbox" name="t" onChange={handlecheck} checked={check.t}/> <span>이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신 <small>(선택)</small></span>
          </div>
        </div>
        
        <div>
          <button>회원가입하기</button>
        </div>
      </form>

        <div>이미 아이디가 있으신가요? 로그인</div>
    </>
  );
}