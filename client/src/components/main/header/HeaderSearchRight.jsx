import React, { createContext, useEffect, useState } from "react";
import { PiBellLight, PiBookmarkSimpleLight, PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import HeaderProfile from "./HeaderProfile";
import { getUser } from './../../../pages/utill/sessionStorage';
import axios from "axios";

export default function HeaderSearchRight({showProfile, handleClick}) {
  const userInfo = getUser();
  const [cartCnt, setCartCnt] = useState();
  const [image, setimage] = useState(null);
  useEffect(() => {

    if (userInfo) {
      axios.get(`http://127.0.0.1:8000/cart/${userInfo.id}/`)
        .then((result) => {
          setCartCnt(result.data.length);
        })
        .catch(console.err);

      axios.get(`http://127.0.0.1:8000/edit/${userInfo.id}`)
        .then((result) => {
          setimage(result.data.userimg);
        })
        .catch(console.err);
    }

  }, [cartCnt]);

  return (
    <>
      {!userInfo ? (
        <>
          <div className="header_logo_right">
            <Link to="/login" className="header_logo_cart"><PiShoppingCartLight className="header_logo_cart_icon" /></Link>
            <Link to="/login" className="header_logo_menu">로그인</Link>
            <Link to="/normalUsers/new" className="header_logo_menu">회원가입</Link>
            <Link to="/customer_center" className="header_logo_menu">고객센터</Link>
          </div>

        </>
      ) : (
        <>
          <div className="header_logo_right_loginver">
            <Link to="/collections" className="header_logo_scrap"><PiBookmarkSimpleLight /></Link>
            <Link to="/notifications/feed" className="header_logo_feed"><PiBellLight /></Link>
            <Link to={`/cart`} className="header_logo_cart">
              <PiShoppingCartLight />
              {cartCnt !== 0 ? <span className="header_logo_cart_num">{cartCnt}</span> : null}
            </Link>
            <button className="header_logo_profile" id='profile' onClick={(e) => handleClick(e)} >
              <img className="header_logo_profile_icon" src={image === null ? "https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?w=72&h=72&c=c&webp=1" : "http://127.0.0.1:8000/" + image} alt="프로필 사진" />
            </button>
            <div className={showProfile} >
              <HeaderProfile />
            </div>
          </div>
        </>
      )}
    </>
  );
}