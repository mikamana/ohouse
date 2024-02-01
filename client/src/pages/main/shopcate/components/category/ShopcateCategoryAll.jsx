export default function ShopcateCategoryAll({getCategoryItem,activeBtn,handleClick}){
  return(
    <div className="shopcate_category_item_container">
      <div id={0 === activeBtn ? "active" : ""} className="shopcate_category_item_wrap" onClick={()=>[getCategoryItem(0),handleClick(0)]}>
        <span className="shopcate_category_item_text">전체</span>
      </div>
    </div>
  );
}