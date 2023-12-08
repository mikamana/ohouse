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
export default function ProductionsContainer(props) {
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

    })


  }, [])

  // console.log(list.sale_price);


  const getQty = (e) => {

    setqty(e.qty);
    setPrc(e.price);

    props.getPrice({ price: e.price, qty: e.qty })

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
              <ProductionInfoReviewBox count={props.count} />
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
              {/* <ProductionInfoOption /> */}
              <ProductionsInfoQty subTitle={list.product_name}
                price={props.price}
                getQty={getQty}
                qty={props.qty}
                priceOrigin={list.sale_price}
              />
            </li>
            <li className="production_selling_container_info_list_li">
              <ProductionInfoTotPrice price={props.price}
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