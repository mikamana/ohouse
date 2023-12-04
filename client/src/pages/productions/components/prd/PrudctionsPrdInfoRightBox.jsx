import React from "react";
import ProductionInfoOption from "../info/ProductionInfoOption";
import ProductionInfoTotPrice from "../info/ProductionInfoTotPrice";
import ProductionCartBtn from "../info/ProductionCartBtn";
import ProductionsInfoQty from "../info/ProductionsInfoQty";

export default function PrudctionsPrdInfoRightBox(props) {



    return (

        <>
            <div className="production_selling_prd_info_right">
                <ProductionInfoOption />
                <div className="production_selling_prd_info_right_btn_box">
                    <ProductionInfoTotPrice price={props.price} priceOrigin={props.priceOrigin} />
                    <ProductionCartBtn />
                </div>
            </div>
        </>

    );

}