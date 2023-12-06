import React from "react";

export default function Userimg_Image({img}){
  return(
    <div className="userimg_image_frame">
      <img src={img} alt="" />
    </div>
  );
}