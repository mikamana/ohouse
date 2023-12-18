import React, { useState, useEffect } from "react";
import { getUser } from './../utill/sessionStorage';
import "../../css/user/edit.css"
import axios from "axios";
import ImageUpload from "./ImageUpload";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Edit() {

  const userinfo = getUser();
  const [form, setForm] = useState({ mid: "", nickname: "", phone: '', homepage: "", gender: "", birthday: "", userimg: null, comment: "" });
  const [user, setUser] = useState([])
  const [nicknameValue, setNickNameValue] = useState(true);
  const [nicknameText, setNickNameText] = useState("");
  useEffect(() => {
    if (userinfo) {
      axios.get(`http://127.0.0.1:8000/edit/${userinfo.id}`)
        .then(result => {
          setForm(result.data);
          setUser(result.data.nickname);
        })
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    const nicknameRegExp = /^.*(?=^.{2,15}$).*$/;
    if (name === "nickname" && value.match(nicknameRegExp) != null) {
      axios.post("http://127.0.0.1:8000/normalUsers/new/nickname", { nickname: value })
        .then(result => {
          if (result.data.cnt === 0 || user.nickname == value) {
            setNickNameText("");
            setNickNameValue(true);
          } else {
            setNickNameText("사용 중인 별명입니다.");
            setNickNameValue(false);
          }
        })
    }
  }

  const handleNicName = () => {
    if (form.nickname === "" || !nicknameValue) {
      setNickNameText("필수 입력 항목입니다.");
      setNickNameValue(false);
    } else {
      setNickNameText("");
    }
  }

  const getImage = (e) => {
    setForm({ ...form, userimg: e })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.phone === "") {
      form.phone = null
    }
    if (nicknameValue) {
      axios.post("http://127.0.0.1:8000/edit", form)
        .then(result => {
          if (result.data === "ok") {
            window.location.reload();
            alert("회원정보가 수정되었습니다.")
          }
        })
    }
  }

  const style = {
    none: {
      backgroundImage: "url(https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=640&h=640&c=c&webp=1)",
      backgroundColor: "#d8d8d8"
    },
    imge: {
      backgroundImage: `url(http://127.0.0.1:8000/${form.userimg === null? "" : form.userimg.replace(/\\/, '/')})`,
      backgroundColor: "#fff"
    }
  }

  const imageremove = () => {
    setForm({...form, userimg : null})
  }

  return (
    <div className="edit">
      {userinfo === null ? (<div>잘못된 경로로 접속하셨습니다.</div>)
        : (<div>
          <div className="editTitle">
            <div className="editTitleDiv">회원정보수정</div>
            <Link to="/withdrawals"><span className="editTitleSpan">회원탈퇴</span></Link>
          </div>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="editId">
              <div className="editIdTitle">
                <label>이메일</label>
                <span className="editIdspan">* 필수항목</span>
              </div>
              <div className="editIdinput">
                <input type="text" name="mid" value={form.mid} readOnly />
                <span className="editIdinputText">이메일을 변경하시려면 운영자에게 이메일을 보내주세요.</span>
              </div>
            </div>
            <div className="editNickname">
              <div className="editNicknameTitle">
                <label>별명</label>
                <span className="editNicknamespan">* 필수항목</span>
              </div>
              <div className="editNicknameinput">
                <input type="text" name="nickname" value={form.nickname} onChange={handleChange} onBlur={handleNicName} />
                <span className="editNicknameText">{nicknameText}</span>
              </div>
            </div>
            <div className="editHompage">
              <label>홈페이지</label>
              <input type="text" placeholder="https://ohou.se/" name="homepage" value={form.homepage} onChange={handleChange} />
            </div>
            <div className="editGender">
              <label>성별</label>
              <div className="editGenderINput">
                <input type="radio" name="gender" onChange={handleChange} value="남성" checked={form.gender === "남성" ? true : false} /> <span>남성</span>
                <input type="radio" name="gender" onChange={handleChange} value="여성" checked={form.gender === "여성" ? true : false} /> <span>여성</span>
              </div>
            </div>
            <div className="editBirthday">
              <label>생년월일</label>
              <input type="date" name="birthday" value={form.birthday} onChange={handleChange} />
            </div>
            <div className="editImage">
              <div className="editImageinput">
                <label>프로필이미지</label>
                <ImageUpload getImage={getImage} style={form.userimg === null ? style.none : style.imge}/>
                {form.userimg !== null && <IoIosCloseCircleOutline onClick={imageremove}/>}
              </div>
            </div>
            <div className="editComment">
              <label>한줄소개</label>
              <input type="text" name="comment" value={form.comment} onChange={handleChange} />
            </div>
            <button className="editButton">회원정보수정</button>
          </form>
        </div>)}
    </div>
  );
}