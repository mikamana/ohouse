import { Link } from "react-router-dom";
import ShopitemTodayStart from "../../../main/shopitem/components/Info/ShopitemTodayStart";
import CartQuantity from "../quantity/CartQuantity";
import RemoveBtn from "./button/RemoveBtn";
import CartCheckBox from "./checkbox/CartCheckBox";
import { useEffect, useState } from "react";

export default function CartedProduct({checkedItemHandler,checked,delivery_type,cartList,removeCart,getQty}){
  const [endTime,setEndTime] = useState(false)
  const todayMonth = new Date().getMonth() + 1 ;
  const tomorrow = new Date().getDate() + 1;
  const now = new Date();
  const day = new Date();
  day.setDate(day.getDate() + +1 );
  const days = ["일", "월", "화", "수", "목", "금", "토"]
  const hours = now.getHours();
  let endTimeCheck = false
  
  
  useEffect(()=>{
    function handleEnd(){
      if(hours >= 14){
        return endTimeCheck = false
      }else{
        return endTimeCheck = true
      }
    }
    setEndTime(handleEnd());
  },[])
  const [calcQty,setCalcQty] = useState(parseInt(cartList.sale_price*cartList.qty).toLocaleString())
  function getCalcQty(sale_price,qty){
    setCalcQty(sale_price*qty)
  }
  return(
      <div className="carted_product">
        <div className="carted_product_select">
          <CartCheckBox
          checkedItemHandler={checkedItemHandler}
          checked={checked}
          cart_id={cartList.cart_id}
          />
        </div>
        {delivery_type === 'td' && <span className="carted_product_today_delivery"> {endTime ? <ShopitemTodayStart ts={delivery_type} /> : ''} <span className="carted_product_today_deadline_time">{endTime ? '평일 14:00까지 결제시' : '오늘출발 마감'}</span>
          {endTime ? '' : <span className="carted_product_today_deadline">{`${todayMonth}/${tomorrow}`} ({days[day.getDay()]}) 발송 예정</span>}
        </span>}
        <Link to={`/production/${cartList.pid}`} className="carted_product_link">
          <div className="carted_product_link_small_item_image_wrap">
            <picture>
              <img className="carted_product_link_small_item_image" src={cartList.product_image}/>
            </picture>
          </div>
          <div className="carted_product_link_small_item_content">
            <h1 className="carted_product_link_small_item_content_title">
            [{cartList.brand_name}]
            {cartList.product_name}
            </h1>
            <p className="carted_product_link_small_item_content_deltype">
              무료배송
              &nbsp;|&nbsp;
              {delivery_type ? delivery_type === 'td' ? '일반택배' : <ShopitemTodayStart ts={delivery_type}/> : '일반택배'}
            </p>
          </div>
        </Link>
        <RemoveBtn
        weight={'bold'}
        removeCart={removeCart}
        cart_id={cartList.cart_id}
        />
        <div className="carted_product_option_list">
          <div className="carted_product_option_list_item">
            <h2 className="carted_product_option_list_item_title">단일상품</h2>
            <div className="carted_product_option_list_item_info">
              <CartQuantity
              cart_id={cartList.cart_id}
              getQty={getQty}
              qty={cartList.qty}
              price_origin={cartList.price_origin}
              sale_price={cartList.sale_price}
              price_change={cartList.price_change}
              getCalcQty={getCalcQty}
              />
              <div className="carted_product_option_list_item_price">
                <span className="carted_product_option_list_item_price_span">
                  {/* {cartList.sale_price} */}
                  {typeof(calcQty) === 'string' ? calcQty : calcQty.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="carted_product_footer"> 이 div는 사용하지 않을 것</div> */}
      </div>
      
  );
}