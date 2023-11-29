import React from "react";
import ProductionsPrdInfoLeftBox from "./prd/ProductionsPrdInfoLeftBox";
import PrudctionsPrdInfoRightBox from "./prd/PrudctionsPrdInfoRightBox";


export default function ProductionsPrdWrap() {

    return (

        <>
            <div className="production_selling_prd_info_wrap">
                <div className="production_selling_prd_info_inner inner">
                    <ProductionsPrdInfoLeftBox />
                    <PrudctionsPrdInfoRightBox />
                </div>
            </div>
        </>

    );

}