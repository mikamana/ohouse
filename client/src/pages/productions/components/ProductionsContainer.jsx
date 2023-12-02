import React, { useState } from "react";
import ProductionContainerImageBox from "./ProductionContainerImageBox";
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
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import ProductionsInfoQty from "./info/ProductionsInfoQty";
// import ProductionContainerInfoList from "./ProductionContainerInfoList";
export default function ProductionsContainer() {
  const params = useParams();
  const [list, setList] = useState([]);
  const [prc, setPrc] = useState(list.sale_price);
  const [qty, setqty] = useState(1);

  useEffect(() => {
    axios({

      method: "get",
      url: `http://127.0.0.1:8000/production/${params.pid}`

    }).then((result) => {

      setList(result.data[0])

    }).catch(console.log("error"))

  }, [])



  // const pricePercent = (list.price_origin / 100) * list.price_sale
  // const price = list.price_origin - pricePercent

  const getQty = (e) => {

    setqty(e.qty);
    setPrc(e.price);

    // const price = e.price * e.qty;
    // const result = list.sale_price * parseInt(e.qty)

    // setPrc(price);

  }





  return (

    <>
      <div className="production_selling_container">
        <div className="production_selling_container_left">
          <ProductionContainerImageBox prdImg={list.product_image} />
        </div>
        <div className="production_selling_container_right">
          {/* <ProductionContainerInfoList /> */}
          <ul className="production_selling_container_info_list">
            <li className="production_selling_container_info_list_li">
              <ProductionInfoTitle title={list.brand_name} />
            </li>
            <li className="production_selling_container_info_list_li">
              <h4 className="production_selling_info_title">
                <ProductionInfoSubTitle subTitle={list.product_name} />
                <ProductionInfoIconWrap />
              </h4>
            </li>
            <li className="production_selling_container_info_list_li">
              <ProductionInfoReviewBox rating={list.rating_review} />
            </li>
            <li className="production_selling_container_info_list_li">
              <ProductionInfoSeilBox prcSale={list.price_sale}
                prcOrigin={list.price_origin}
              />
            </li>
            <li className="production_selling_container_info_list_li">
              <ProductionInfoPriBox price={list.sale_price} />
            </li>
            <li className="production_selling_container_info_list_li">
              <ProductionInfoCouponBox price={list.sale_price} />
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
              <ProductionsInfoQty subTitle={list.product_name}
                price={list.sale_price}
                getQty={getQty}
              />
            </li>
            <li className="production_selling_container_info_list_li">
              <ProductionInfoTotPrice price={prc}
                priceOrigin={list.sale_price}
              />
            </li>
            <li className="production_selling_container_info_list_li">
              <ProductionCartBtn price={prc}
                qty={qty}
              />
            </li>
            <li className="production_selling_container_info_list_li">
              <ProductionInfoBanner />
            </li>
          </ul>
        </div>
      </div>
    </>
  );

}