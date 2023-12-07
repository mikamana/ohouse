import React, { useEffect, useState } from "react";
import ShopcateCategoryItem from "../../../main/shopcate/components/category/ShopcateCategoryItem";
import RecommandImgContent from "./component/RecommandImgContent";
import RecommandContent from "./component/RecommandContent";
import "../../../../css/sub/topics/recommand/recommand.css";

export default function Recommand() {
  /* 메뉴 */
  const [catelist, setCatelist] = useState([]);
  useEffect(() => {
    fetch('/data/topics/recommandMenu.json')
      .then(res => res.json())
      .then(data => setCatelist(data))
    /* axios.get('http://127.0.0.1:8000/community/')
    .then((result)=>{
      console.log(result.data);
    })
    .catch(console.err); */
  }, [])

  return (
    <section className="topics_recommand_section">
      {/* ShopcateCategoryItem.jsx */}
      <div className="topics_recommand_menu_section inner">
        <div className="topics_recommand_menu">
          {
            catelist.map((list) =>
              <ShopcateCategoryItem
              key={list.category_name}
                category_name={list.category_name}
              />)
          }
        </div>
      </div>
      <RecommandContent />
      <RecommandContent />
      <RecommandContent />
      <RecommandContent />
      <RecommandImgContent />
    </section>
  );
}