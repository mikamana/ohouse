export default function ShopcateCategoryItem({category_name}){
  return(
    <div className="shopcate_category_item_container">
      <div className="shopcate_category_item_wrap">
        <span className="shopcate_category_item_text">{category_name}</span>
      </div>
    </div>
  );
}