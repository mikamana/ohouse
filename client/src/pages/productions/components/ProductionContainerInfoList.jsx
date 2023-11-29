import React from "react";
import ProductionInfoTitle from "./info/ProductionInfoTitle";
import ProductionInfoSubTitle from "./info/ProductionInfoSubTitle";
import ProductionInfoIconWrap from "./info/ProductionInfoIconWrap";
import ProductionInfoReviewBox from "./info/ProductionInfoReviewBox";
import ProductionInfoSeilBox from "./info/ProductionInfoSeilBox";
import ProductionInfoPriBox from "./info/ProductionInfoPriBox";
import ProductionInfoCouponBox from "./info/ProductionInfoCouponBox";
import ProductionInfoBenefit from "./info/ProductionInfoBenefit";
import ProductionInfoBenefitSecond from "./info/ProductionInfoBenefitSecond";
import ProductionInfoLife from "./info/ProductionInfoLife";
import ProductionInfoOption from "./info/ProductionInfoOption";
import ProductionInfoTotPrice from "./info/ProductionInfoTotPrice";
import ProductionCartBtn from "./info/ProductionCartBtn";
import ProductionInfoBanner from "./info/ProductionInfoBanner";

export default function ProductionContainerInfoList() {

  return (

    <>
      <ul className="production_selling_container_info_list">
        <li className="production_selling_container_info_list_li">
          <ProductionInfoTitle />
        </li>
        <li className="production_selling_container_info_list_li">
          <h4 className="production_selling_info_title">
            <ProductionInfoSubTitle />
            <ProductionInfoIconWrap />
          </h4>
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionInfoReviewBox />
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionInfoSeilBox />
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionInfoPriBox />
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionInfoCouponBox />
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionInfoBenefit />
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionInfoBenefitSecond />
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionInfoLife />
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionInfoOption />
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionInfoTotPrice />
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionCartBtn />
        </li>
        <li className="production_selling_container_info_list_li">
          <ProductionInfoBanner />
        </li>
      </ul>
    </>

  );

}