import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiBookmarkLine } from "react-icons/ri";
import { RiBookmarkFill } from "react-icons/ri";

export default function SkyImg(){
  const [scrapClick, setScrapClick] = useState("snsimg_image_img_scrapbtn");
  const handleClick = (e)=>{
    e.preventDefault();
    if(scrapClick === "snsimg_image_img_scrapbtn"){
      setScrapClick("snsimg_image_img_scrapbtn active")
    }else{
      setScrapClick("snsimg_image_img_scrapbtn")
    }
  }
  //handleClick

  return(
    /* "snsimg_image_img_scrapbtn" */
    <div className="snsimg_section inner">
      <div className="snsimg_contents">
        <Link to="/img" className="snsimg_section_linkBox">
          
          <div className="snsimg_image_wrap">
            <img className="snsimg_image_img" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/169910777596669529.png?w=540&h=360&c=c" alt="스카이이미지_첫번째" />
            <span className={scrapClick} onClick={handleClick}>
              <RiBookmarkFill className="snsimg_image_img_scrapbtn"/>
            </span>
          </div>


          <div className="snsimg_text_wrap">
            <p className="snsimg_text_content">
              <span className="snsimg_text_sky">맛있고 귀여워🌰</span>
              디저트 정체성 확실한 한남동 카페6
            </p>
          </div>

        </Link>
      </div>
    </div>
  );
}