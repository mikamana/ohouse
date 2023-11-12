import React from "react";
import SnsImgTitleText from "./SnsImgTitleText";
import SnsImgSwiper from "./SnsImgSwiper";

export default function SnsImg() {

  return (

    <>
      <section className="snsimg_wrap">
        <div className="snsimg_inner inner">
          <SnsImgTitleText />
          <SnsImgSwiper />
        </div>
      </section >
    </>

  );


}