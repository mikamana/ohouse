import React, { useEffect, useState } from "react";
import ShopcateCategoryItem from "../../../main/shopcate/components/category/ShopcateCategoryItem";
import RecommandImgContent from "./component/RecommandImgContent";
import SubtitleMore from "../../../main/subtitle_more/Subtitle_more";
import SnsImgSwiper from "../../../main/snsimg/components/SnsImgSwiper";
import SnsImg from "../../../main/snsimg/components/SnsImg";

export default function Recommand() {
  /* 메뉴 */
  const [catelist, setCatelist] = useState([]);
  useEffect(() => {
    fetch('/data/topics/recommandMenu.json')
      .then(res => res.json())
      .then(data => setCatelist(data))
  }, [])

  return (
    <section className="topics_recommand_section">
      <div className="topics_recommand_inner inner">
        {/* ShopcateCategoryItem.jsx */}
        <div className="topics_recommand_menu">
          {
            catelist.map((list) =>
              <ShopcateCategoryItem
                category_name={list.category_name}
              />)
          }
        </div>
        {/* RecommandImgContent.jsx */}
        <div className="recommand_content_section">
          <RecommandImgContent />
          <RecommandImgContent />
        </div>
      </div>
      {/* subTitlemore.jsx SnsImg.jsx */}
      <div className="recommand_snsimg_section ">
        {/* <section className="snsimg_wrap">
            <SubtitleMore title={"산타들 주목 🎅🏼 이런 선물 어때요?"} />
            <div className="snsimg_inner inner">
            <SnsImgSwiper />
            </div>
          </section > */}

        <SnsImg />
      </div>
    </section>
  );
}