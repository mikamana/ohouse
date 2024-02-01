import React from "react";
import RecommandImgBox from "./RecommandImgBox";
import { SwiperSlide } from "swiper/react";
import SubtitleMore from "../../../../main/subtitle_more/Subtitle_more";
import RecommandImgContent from "./RecommandImgContent";

export default function Recommandcontent() {
  return (
    <>
      {/* RecommandImgContent.jsx */}
      <RecommandImgContent />
      {/* subTitlemore.jsx SnsImg.jsx */}
      <section className="snsimg_wrap">
        <SubtitleMore title={"산타들 주목 🎅🏼 이런 선물 어때요?"} />
        <div className="snsimg_inner inner">
          <SwiperSlide>
            <RecommandImgBox />
          </SwiperSlide>
        </div>
      </section>
    </>
  );
}