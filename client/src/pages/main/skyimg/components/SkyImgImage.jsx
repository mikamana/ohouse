import React, { useState } from "react";
import { RiBookmarkFill } from "react-icons/ri";

export default function SkyImgImage({url}) {
  const [scrapClick, setScrapClick] = useState("skyimg_image_img_scrapbtn");
  const handleClick = (e)=>{
    e.preventDefault();
    if(scrapClick === "skyimg_image_img_scrapbtn"){
      setScrapClick("skyimg_image_img_scrapbtn active")
    }else{
      setScrapClick("skyimg_image_img_scrapbtn")
    }
  }//handleClick

  return (
    <div className="skyimg_image_wrap">
      <img className="skyimg_image_img" src={url} alt="스카이이미지" />
      <span className={scrapClick} onClick={handleClick}>
        <RiBookmarkFill className="skyimg_image_img_scrapbtn" />
      </span>
    </div>
  );
}