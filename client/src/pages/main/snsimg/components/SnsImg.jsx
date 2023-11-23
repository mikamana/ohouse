import React from "react";
// import SnsImgTitleText from "./SnsImgTitleText";
import SnsImgSwiper from "./SnsImgSwiper";
import SubtitleMore from "../../subtitle_more/Subtitle_more";
export default function SnsImg() {

  return (

    <>
      <section className="snsimg_wrap">
        <SubtitleMore title={"이런 사진 찾고있나요?"}
          subTitle={"좋아하실 만한 인테리어 콘텐츠를 추천해드려요"}
        />

        <div className="snsimg_inner inner">
          {/* <SnsImgTitleText /> */}
          <SnsImgSwiper />
        </div>
      </section >
    </>

  );


}