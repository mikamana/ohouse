import React, { useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../css/user/Signup.css'
import axios from "axios"

export default function Signup() {
  const [form, setForm] = useState({ "eid": "", "domain": "", "pass": "", "passcheck": "", "nickname": "" });
  const [idText, setIdText] = useState("");
  const [domain, setDomain] = useState(false);
  const [mailValue, setMailValue] = useState("");
  const [mailuserValue, setMailuserValue] = useState("");
  const [mailtext, setMailtext] = useState(false);
  const [mailCheck, setmailCheck] = useState(false);
  const [passText, setPassText] = useState("");
  const [passValue, setPassValue] = useState(false);
  const [passCheckText, setPasscheckText] = useState("");
  const [passCheckValue, setPassCheckValue] = useState(false);
  const [nickNameText, setNickNameText] = useState("");
  const [nickNameValue, setNickNameValue] = useState(false);
  const [checkText, setCheckText] = useState("");
  const [allCheck, setAllCheck] = useState(false);
  const [check, setCheck] = useState({ "q": false, "w": false, "e": false, "r": false, "t": false })

  const navigate = useNavigate();
  const inputEid = useRef(null);
  const inputDomain = useRef(null);
  const inputPass = useRef(null);
  const inputPassCheck = useRef(null);
  const inputNickname = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "domain" && value === "self") {
      setForm({ ...form, domain: "" });
      setDomain(true);
    }
    const nicknameRegExp = /^.*(?=^.{2,15}$).*$/;
    if (name === "nickname" && value.match(nicknameRegExp) != null) {
      axios.post("http://localhost:8000/normalUsers/new/nickname", { nickname: value })
        .then(result => {
          if (result.data.cnt === 0) {
            setNickNameText("");
            setNickNameValue(true);
          } else {
            setNickNameText("사용 중인 별명입니다.");
            setNickNameValue(false);
          }
        })
    }
  }

  const selectChange = () => {
    setDomain(false);
  }

  const handleId = () => {
    if (form.eid === "") {
      setIdText("필수 입력 항목입니다.")
    } else {
      setIdText("")
    }
  }

  const handleDomain = () => {
    if (form.domain === "") {
      setIdText("필수 입력 항목입니다.")
    }
  }

  const passRegExp = /^.*(?=^.{8,14}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;

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

  const handleNicName = () => {
    if (form.nickname === "" || !nickNameValue) {
      setNickNameText("필수 입력 항목입니다.");
    } else {
      setNickNameText("");
    }
  }

  const handlecheck = (e) => {
    const { name, checked } = e.target;
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

  const emailinput = (e) => {
    const { value } = e.target;
    setMailuserValue(value);
  }

  const handelMail = (e) => {
    if (form.eid !== "" && form.domain !== "") {
      axios.post("http://localhost:8000/normalUsers/new/email", { eid: form.eid, domain: form.domain })
        .then(result => {
          if (result.data.result.cnt === 0) {
            setMailValue(result.data.number);
            setMailtext(true);
            setIdText("");
          } else {
            setIdText("아이디 중복");
          }
        })
    }
  }

  const handleMailCheck = () => {
    if (mailValue == mailuserValue) {
      alert("인증완료");
      setMailtext(false);
      setmailCheck(true);
    } else {
      alert("인증실패");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mailCheck && nickNameValue && passValue && passCheckValue && check.q && check.w && check.e) {
      axios.post("http://localhost:8000/normalUsers/new", form)
        .then(result => {
          if (result.data === "ok") {
            navigate("/")
          }
        })
    } else if (!mailCheck) {
      setIdText("필수 입력 항목입니다.")
      return inputEid.current.focus();
    }
    else if (!passValue) {
      setPassText("필수 입력 항목입니다.");
      return inputPass.current.focus();
    } else if (!passCheckValue) {
      setPasscheckText("확인을 위해 비밀번호를 한 번 더 입력해주세요.");
      return inputPassCheck.current.focus();
    } else if (!nickNameValue) {
      setNickNameText("필수 입력 항목입니다.")
    } else if (!check.q || !check.w || !check.e) {
      setCheckText("필수 항목에 동의해주세요.")
    }
  }

  return (
    <div className="Signup">
      <div className="SignupLogo">
        <Link to={"/"}>
          <img src="http://127.0.0.1:3000/images/user/signup.png" alt="" />
        </Link>
      </div>

      <h3 className="SignupTitle">회원가입</h3>

      <div className="SignupSNS">
        <div className="SignupSNSText">SNS계정으로 간편하게 회원가입</div>
        <div className="SignupSNSImg">
          <img src="http://127.0.0.1:3000/images/user/facebook.png" alt="" />
          <img src="http://127.0.0.1:3000/images/user/kakao.png" alt="" />
          <img src="http://127.0.0.1:3000/images/user/naver.png" alt="" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="SingupForm">
        <div className="SingupId">
          <label className={(idText === "") ? "" : "SingupLabelNotValue"}>이메일</label>
          <div className="SingupIdInput">
            <input className={(idText === "") ? "" : "SingupNotValue"} type="text" name="eid" onBlur={handleId} onChange={handleChange} value={form.eid} ref={inputEid} placeholder="이메일" readOnly={mailCheck ? true : false} />
            <span className="SingupIdspan">@</span>
            {domain ?
              <>
                <input type="text" name="domain" onChange={handleChange} onBlur={handleDomain} ref={inputDomain} className={(idText === "") ? "" : "SingupNotValue"} readOnly={mailCheck ? true : false} />
                <button className="SinupEmailClose" type="button" onClick={selectChange} disabled={mailCheck ? true : false}>x</button>
              </> :
              <select name="domain" onChange={handleChange} onBlur={handleDomain} ref={inputDomain} className={(idText === "") ? "" : "SingupNotValue"} disabled={mailCheck ? true : false}>
                <option value="default">선택해주세여</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="nate.net">nate.com</option>
                <option value="hotmail.net">hotmail.com</option>
                <option value="outlook.net">outlook.com</option>
                <option value="icloud.net">icloud.com</option>
                <option value="self">직접선택하기</option>
              </select>}
          </div>
          <span className="SingupText">{idText}</span>
          <div>
            <button type="button" className={(form.eid !== "" && form.domain !== "") ? "SignupIdButtonActive" : "SignupIdButton"} onClick={handelMail} disabled={mailCheck ? true : false}>이메일 인증하기</button>
          </div>
        </div>

        {mailtext &&
          <div className="SignupEmail">
            <div className="SignupEmailTitle">이메일로 전송된 인증코드를 입력해주세요.</div>
            <div>
              <input className="SignupEmailInput" type="text" placeholder="인증코드입력" onChange={emailinput} value={mailuserValue} />
              <button className="SignupEmailButton" type="button" onClick={handleMailCheck}>확인</button>
            </div>
            <span>이메일을 받지 못하셨나요? <span className="SignupEmailReturn" onClick={handelMail}>이메일 재전송하기</span></span>
          </div>
        }

        <div className="SignupPass">
          <label className={(passText === "") ? "" : "SingupLabelNotValue"}>비밀번호</label>
          <span className="SignupText">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
          <input type="password" name="pass" onChange={handleChange} onBlur={handlePass} value={form.pass} ref={inputPass} placeholder="비밀번호" className={(passText === "") ? "" : "SingupNotValue"} />
          <span className="SingupText">{passText}</span>
        </div>

        <div className="SignupPassCheck">
          <label className={(passCheckText === "") ? "" : "SingupLabelNotValue"}>비밀번호확인</label>
          <input type="password" name="passcheck" onChange={handleChange} onBlur={handlePassCheck} value={form.passcheck} ref={inputPassCheck} placeholder="비밀번호 확인" className={(passCheckText === "") ? "" : "SingupNotValue"} />
          <span className="SingupText">{passCheckText}</span>
        </div>

        <div className="SignupNickName">
          <label className={(nickNameText === "") ? "" : "SingupLabelNotValue"}>닉네임</label>
          <span className="SignupText">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</span>
          <input type="text" name="nickname" onBlur={handleNicName} onChange={handleChange} value={form.nickname} ref={inputNickname} placeholder="별명 (2~15자)" className={(nickNameText === "") ? "" : "SingupNotValue"} />
          <span className="SingupText">{nickNameText}</span>
        </div>

        <div className={(checkText === "") ? "SignupAgree" : "SignupAgreeNotValue"}>
          <label className={(checkText === "") ? "" : "SingupLabelNotValue"}>약관동의</label>
          <div>
            <input type="checkbox" name="all" onChange={handleAllcheck} checked={allCheck} /> <span>전체동의 선택항목에 대한 동의 포함</span>
          </div>
          <hr />
          <div className="SingupAgreeCheckbox">
            <input type="checkbox" name="q" onChange={handlecheck} checked={check.q} /> <span>만 14세 이상입니다 <small>(필수)</small></span>
          </div>
          <div className="SingupAgreeCheckbox">
            <input type="checkbox" name="w" onChange={handlecheck} checked={check.w} /> <span>이용약관<small>(필수)</small></span>
          </div>
          <div className="SingupAgreeCheckbox">
            <input type="checkbox" name="e" onChange={handlecheck} checked={check.e} /> <span>개인정보수집 및 이용동의 <small>(필수)</small></span>
          </div>
          <div className="SingupAgreeCheckbox">
            <input type="checkbox" name="r" onChange={handlecheck} checked={check.r} /> <span>개인정보 마케팅 활용 동의 <small>(선택)</small></span>
          </div>
          <div className="SingupAgreeCheckbox">
            <input type="checkbox" name="t" onChange={handlecheck} checked={check.t} /> <span>이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신 <small>(선택)</small></span>
          </div>
          <span className="SingupText">{checkText}</span>
        </div>

        <div>
          <button className="SignupSubmitButton">회원가입하기</button>
        </div>
      </form>
      <Link to="/login"><span className="SinupLogin">이미 아이디가 있으신가요? 로그인</span></Link>
    </div>
  );
}