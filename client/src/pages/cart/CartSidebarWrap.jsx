import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CartSidebarsWrap({handleOrder,count,sumPrice,totalPrice,salePrice}){
  

  return(
    <div className='cart_sidebar_wrap'>
      <div className="cart_sidebar_container">
        <div className="cart_sidebar_box">
          <div className="cart_sidebar_summary">
            <div className="cart_sidebar_summary_row">
              <div>총 상품금액</div>
              <div className="cart_sidebar_summary_row_price_box">
                <span className="cart_sidebar_price">{sumPrice.toLocaleString()}원</span>
              </div>
            </div>
            <div className="cart_sidebar_summary_row">
              <div>총 배송금액</div>
              <div className="cart_sidebar_summary_row_price_box">
                <span className="cart_sidebar_price">+ 0원</span>
              </div>
              </div>
            <div className="cart_sidebar_summary_row">
              <div>총 할인금액</div>
              <div className="cart_sidebar_summary_row_price_box">
                <span className="cart_sidebar_price">- {salePrice.toLocaleString()}원</span>
              </div>
              </div>
            <div className="cart_sidebar_summary_row_total">
              <div className="cart_sidebar_summary_row_total_text">결제금액</div>
              <div className="cart_sidebar_summary_row_price_box">
                <span className="cart_sidebar_total_price">{totalPrice.toLocaleString()}원</span>
              </div>
            </div>
          </div>
          <div className="cart_sidebar_order">
            <button type="button" onClick={()=>handleOrder()} className="cart_sidebar_order_btn">{count}개 상품 구매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}