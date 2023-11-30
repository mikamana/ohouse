import React, { useEffect, useState } from "react";
import ShopcateCategoryItem from "../../../main/shopcate/components/category/ShopcateCategoryItem";
import RecommandImgContent from "./component/RecommandImgContent";
import { SwiperSlide } from "swiper/react";
import SubtitleMore from "../../../main/subtitle_more/Subtitle_more";
import RecommandImgBox from "./component/RecommandImgBox";
import "../../../../css/sub/topics/recommand/recommand.css";
import Recommandcontent from "./component/RecommandContent";

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
      {/* ShopcateCategoryItem.jsx */}
      <div className="topics_recommand_menu_section inner">
        <div className="topics_recommand_menu">
          {
            catelist.map((list) =>
              <ShopcateCategoryItem
                category_name={list.category_name}
              />)
          }
        </div>
      </div>
      <Recommandcontent />
      <Recommandcontent />
      <Recommandcontent />
      <Recommandcontent />
    </section>
  );
}