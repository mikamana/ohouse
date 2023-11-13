import React from "react";
import MainVisualImgBox from "./MainVisualImgBox";
import MainVisualSlideBox from "./MainVisualSlideBox";

export default function MainVisual() {

  return (
    <>
      <section className="main_visual_section">
        <div className="main_visual_inner inner">
          <MainVisualImgBox />
          <MainVisualSlideBox />
        </div>
      </section>
    </>

  )

};