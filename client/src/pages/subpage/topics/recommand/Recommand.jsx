import React, { useEffect, useState } from "react";
import ShopcateCategoryItem from "../../../main/shopcate/components/category/ShopcateCategoryItem";

export default function Recommand() {
  const [catelist, setCatelist] = useState([]);
  useEffect(() => {
    fetch('/data/topics/recommandMenu.json')
      .then(res => res.json())
      .then(data => setCatelist(data))
  }, [])
  return (
    <section className="topics_recommand_section">
      <div className="topics_recommand_inner inner">
        <div className="topics_recommand_content">
          {
            catelist.map((list) =>
              <ShopcateCategoryItem
                category_name={list.category_name}
              />)
          }
        </div>
      </div>
    </section>
  );
}