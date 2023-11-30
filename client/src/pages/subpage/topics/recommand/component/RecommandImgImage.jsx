import React, { useState } from "react";
import { RiBookmarkFill } from "react-icons/ri";

export default function RecommandImgImage({url, text}) {
  const [scrapClick, setScrapClick] = useState("recommand_image_img_scrapbtn");
  const handleClick = (e)=>{
    e.preventDefault();
    if(scrapClick === "recommand_image_img_scrapbtn"){
      setScrapClick("recommand_image_img_scrapbtn active")
    }else{
      setScrapClick("recommand_image_img_scrapbtn")
    }
  }//handleClick

  return (
    <div className="recommand_image_wrap">
      <img className="recommand_image_img" src={url} alt={text} />
      <span className={scrapClick} onClick={handleClick}>
        <RiBookmarkFill className="recommand_image_img_scrapbtn" />
      </span>
    </div>
  );
}