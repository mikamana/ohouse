import React from "react";
import SkyImgContent from "./components/SkyImgContent";
import SubtitleMore from "../subtitle_more/Subtitle_more";
import "../../../css/main/skyimg/skyimg.css";
export default function SkyImg(props) {
  return (
    <>
      <SubtitleMore title={props.title}
      />
      <div className="skyimg_section inner">
        <div className="skyimg_contents">
          <SkyImgContent />
        </div>
      </div>
    </>

  );
}