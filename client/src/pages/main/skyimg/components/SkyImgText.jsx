import React from "react";

export default function SkyImgText(props) {
  return (
    <div className="skyimg_text_wrap">
      <p className="skyimg_text_content">
        <span className="skyimg_text_sky">{props.skytext}</span>
        {props.text}
      </p>
    </div>
  );
}