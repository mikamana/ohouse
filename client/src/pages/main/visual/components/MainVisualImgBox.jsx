import React from "react";
import MainVisualInfoBox from "./MainVisualInfoBox";



export default function MainVisualImgBox() {


  return (

    <>
      <fieldset className="main_visual_img_wrap">
        <img className="main_visual_img" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/169802263205525053.jpeg?w=850&h=509.79929161747344&c=c" alt="메인사진" />
        <MainVisualInfoBox />
      </fieldset>
    </>


  );

}