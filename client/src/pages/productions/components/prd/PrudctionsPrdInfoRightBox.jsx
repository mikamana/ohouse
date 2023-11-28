import React from "react";
import ProductionInfoOption from "../info/ProductionInfoOption";
import ProductionInfoTotPrice from "../info/ProductionInfoTotPrice";
import ProductionCartBtn from "../info/ProductionCartBtn";

export default function PrudctionsPrdInfoRightBox() {

    return (

        <>
            <div className="production_selling_prd_info_right">
                <ProductionInfoOption />
                {/* <ul className="production_selling_prd_info_gap">

                </ul> */}
                <div className="production_selling_prd_info_right_btn_box">
                    <ProductionInfoTotPrice />
                    <ProductionCartBtn />
                </div>

            </div>
        </>

    );

}