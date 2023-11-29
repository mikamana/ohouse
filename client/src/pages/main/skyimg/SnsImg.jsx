import React from "react";
import { Link } from "react-router-dom";

export default function SnsImg(){
  return(
    <div className="snsimg_section inner">
      <div className="snsimg_contents">
        <Link to="/" className="snsimg_section_linkBox">
          <div className="snsimg_image_wrap">
            <img className="snsimg_image_img" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/169910777596669529.png?w=540&h=360&c=c" alt="스카이이미지_첫번째" />
          </div>
          <div className="snsimg_text_wrap">
            <p className="content_skytext">맛있고 귀여워</p>
            <p className="content_normaltext">디저트 정체성 확실한 한남동 카페6</p>
          </div>
        </Link>
      </div>
    </div>
  );
}