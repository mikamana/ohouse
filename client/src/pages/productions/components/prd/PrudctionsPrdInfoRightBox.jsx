import React, { useState } from "react";
import ProductionInfoOption from "../info/ProductionInfoOption";
import ProductionInfoTotPrice from "../info/ProductionInfoTotPrice";
import ProductionCartBtn from "../info/ProductionCartBtn";
import ProductionsInfoQty from "../info/ProductionsInfoQty";

export default function PrudctionsPrdInfoRightBox(props) {

    const getQty = (e) => {

        props.getPrice({ price: e.price, qty: e.qty, flag: e.qtyFlag })

    }

    return (

        <>
            <div className="production_selling_prd_info_right">
                {/* <ProductionInfoOption /> */}
                <ProductionsInfoQty subTitle={props.subTitle} price={props.price} getQty={getQty} qtyFlag={props.qtyFlag} qty={props.qty} priceOrigin={props.priceOrigin} />
                <div className="production_selling_prd_info_right_btn_box">
                    <ProductionInfoTotPrice price={props.price} priceOrigin={props.priceOrigin} />
                    <ProductionCartBtn />
                </div>
            </div>
        </>

    );

}