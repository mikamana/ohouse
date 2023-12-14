import React from "react";


export default function ProductionInfoTotPrice(props) {

  return (

    <>
      <p className="production_selling_totprice_wrap">
        <span className="production_selling_totprice_text">주문금액</span>
        <span className="production_selling_totprice_price">{props.price ? parseInt(props.price).toLocaleString() : parseInt(props.priceOrigin).toLocaleString()}원</span>
      </p>
    </>

  );

}