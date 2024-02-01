import React from "react";



export default function ProductionInfoCouponBox(props) {

  return (

    <>
      <p className="production_selling_coupon_price_info_wrap">
        <span className="production_selling_coupon_price_info_wrap_span">
          <span className="production_selling_coupon_price_info_span">{parseInt(props.price).toLocaleString()}<span> 원</span></span>
          <span className="production_selling_coupon_price_info_text_span">쿠폰적용시</span>
        </span>
        <button type="button" className="production_selling_price_coupon" onClick={() => {

          alert("쿠폰이 추가되었습니다.")

        }}>
          쿠폰 받기
        </button>
      </p>
    </>

  )

}