import React from "react";


export default function ProductionInfoTotPrice(props) {

  return (

    <>
      <p className="production_selling_totprice_wrap">
        <span className="production_selling_totprice_text">주문금액</span>
        <span className="production_selling_totprice_price">{props.price ? props.price : props.priceOrigin}원</span>
      </p>
    </>

  );

}