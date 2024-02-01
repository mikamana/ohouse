import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

export default function Banner() {
  const [isClose, setIsClose] = useState(true);

  const closeBanner = (expireDays) =>{
    let expire = new Date();
    expire.setTime(expire.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    localStorage.setItem("popup_hide", expire.getTime());
  }
  
  const checkBannerClose = () =>{
    const expireDay = localStorage.getItem("popup_hide");
    let today = new Date();
  

  if(today.getTime() > expireDay){
    return false;
  }else{
    return true;
  }
  }

  const closeBannerToday = ()=>{
    closeBanner(1);
    setIsClose(false);
  }

  useEffect(()=>{
    checkBannerClose() ? setIsClose(false) : setIsClose(true)
  },[]);

  return (
    <>
      {isClose && <div className="banner_wrap">
        <Link to="#" className="banner_wrap_left"></Link>
        <Link to="#" className="banner_wrap_right">
          <button onClick={closeBannerToday}>
            <MdOutlineClose className="banner_wrap_close"/>
          </button>
        </Link>
      </div>}
    </>
  );
}