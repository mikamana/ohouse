import React from "react";
import MainVisualUserImg from "./MainVisualUserImg";
import MainVisualUserName from "./MainVisualUserName";
import MainVisualInfoTitle from "./MainVisualInfoTitle";
export default function MainVisualInfoBox() {

  return (

    <>
      <div className="main_visual_info_wrap">
        <MainVisualInfoTitle />
        <p className="main_visual_info_user">
          <MainVisualUserImg />
          <MainVisualUserName />
        </p>
      </div>
    </>

  );

}