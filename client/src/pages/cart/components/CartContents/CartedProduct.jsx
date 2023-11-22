import RemoveBtn from "./button/RemoveBtn";
import CartCheckBox from "./checkbox/CartCheckBox";

export default function CartedProduct(){
  return(
    <div className="carted_product">
      <div className="carted_product_select">
        <CartCheckBox/>
      </div>
      <span className="carted_product_today_delivery">
        (오늘출발 or 마감)
        <span className="carted_product_today_deadline">11/23 (목) 발송 예정(날짜데이터필요)</span>
      </span>
      <a href="" className="carted_product_link">
        <div className="carted_product_link_small_item_image">
          <picture>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166959984055892294.jpg?w=360&h=360&c=c&webp=1" alt="" />
          </picture>
        </div>
        <div className="carted_product_link_small_item_content">
          <h1 className="carted_product_link_small_item_content_title">

          </h1>
          <p className="carted_product_link_small_item_content_deltype">
            무료배송
            &nbsp;|&nbsp;
            일반택배
          </p>
        </div>
        
      </a>
      <RemoveBtn/>
      <div className="carted_product_option"></div>
      {/* <div className="carted_product_footer"> 이 div는 사용하지 않을 것</div> */}
    </div>
  );
}