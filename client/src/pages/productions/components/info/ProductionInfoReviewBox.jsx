import React from "react";
import ProductionSvg from "../ProductionSvg";


export default function ProductionInfoReviewBox(props) {

  return (


    <>
      <p className="production_selling_container_info_review_wrap">
        <span className="production-selling-header__review__icon">
          <ProductionSvg />
          <ProductionSvg />
          <ProductionSvg />
          <ProductionSvg />
          <ProductionSvg />
        </span>
        <span className="production-selling-header__review_text">
          {props.rating + '개 리뷰'}
        </span>
      </p>
    </>

  );

}