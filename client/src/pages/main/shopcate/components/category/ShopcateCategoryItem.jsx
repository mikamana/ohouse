import { useRef } from "react";

export default function ShopcateCategoryItem({category_name,getCategoryItem,category_id,activeBtn,handleClick}){
  return(
    <div className="shopcate_category_item_container">
      <div id={category_id === activeBtn ? "active" : ""} className="shopcate_category_item_wrap" onClick={()=>[getCategoryItem(category_id),handleClick(category_id)]}>
        <span className="shopcate_category_item_text">{category_name}</span>
      </div>
    </div>
  );
}