import ShopitemTodayStart from "../../../main/shopitem/components/Info/ShopitemTodayStart";
import CartQuantity from "../quantity/CartQuantity";
import RemoveBtn from "./button/RemoveBtn";
import CartCheckBox from "./checkbox/CartCheckBox";

export default function CartedProduct({checkedItemHandler,checked,id,delivery_type}){
  return(
      <div className="carted_product">
        <div className="carted_product_select">
          <CartCheckBox
          checkedItemHandler={checkedItemHandler}
          checked={checked}
          id={id}
          />
        </div>
        {delivery_type === 'td' && <span className="carted_product_today_delivery">
          <ShopitemTodayStart
          ts={delivery_type}
          />
          SCSS 수정 필요
          <span className="carted_product_today_deadline">11/23 (목) 발송 예정(날짜데이터필요)</span>
        </span>}
        <a href="" className="carted_product_link">
          <div className="carted_product_link_small_item_image_wrap">
            <picture>
              <img className="carted_product_link_small_item_image" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162324120930876959.jpg?w=360&h=360&c=c&webp=1"/>
            </picture>
          </div>
          <div className="carted_product_link_small_item_content">
            <h1 className="carted_product_link_small_item_content_title">
            {'brand_name'}
            {'product_name'}
            </h1>
            <p className="carted_product_link_small_item_content_deltype">
              무료배송
              &nbsp;|&nbsp;
              {delivery_type === 'td' ? '일반택배' : <ShopitemTodayStart ts={delivery_type}/>}
            </p>
          </div>
        </a>
        <RemoveBtn
        weight={'bold'}
        />
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