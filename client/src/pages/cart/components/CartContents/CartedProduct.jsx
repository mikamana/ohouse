import CartQuantity from "../quantity/CartQuantity";
import RemoveBtn from "./button/RemoveBtn";
import CartCheckBox from "./checkbox/CartCheckBox";

export default function CartedProduct(){
  return(
      <div className="carted_product">
        <div className="carted_product_select">
          <CartCheckBox/>
        </div>
        <span className="carted_product_today_delivery">
          (오늘출발 or 마감 오늘출발인 상품만 떠야함 없으면 삭제)
          <span className="carted_product_today_deadline">11/23 (목) 발송 예정(날짜데이터필요)</span>
        </span>
        <a href="" className="carted_product_link">
          <div className="carted_product_link_small_item_image_wrap">
            <picture>
              <img className="carted_product_link_small_item_image" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162324120930876959.jpg?w=360&h=360&c=c&webp=1"/>
            </picture>
          </div>
          <div className="carted_product_link_small_item_content">
            <h1 className="carted_product_link_small_item_content_title">
            회사명 :[오디너리라이프]
            상품명 :[단하루 49,900원] 더월드시리즈 호텔 수건 40수 코마사200g 10장 5colors
            </h1>
            <p className="carted_product_link_small_item_content_deltype">
              무료배송
              &nbsp;|&nbsp;
              일반택배
            </p>
          </div>
        </a>
        <RemoveBtn/>
        <div className="carted_product_option_list">
          <div className="carted_product_option_list_item">
            <h2 className="carted_product_option_list_item_title">옵션이름 (옵션 하나만 할 거라 일부러 버튼 구현 X)</h2>
            <div className="carted_product_option_list_item_info">
              <CartQuantity/>
              <div className="carted_product_option_list_item_price">
                <span className="carted_product_option_list_item_price_span">
                  59,000원
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="carted_product_footer"> 이 div는 사용하지 않을 것</div> */}
      </div>
      
  );
}