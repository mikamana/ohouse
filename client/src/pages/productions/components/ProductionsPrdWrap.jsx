import React from "react";
import ProductionsPrdInfoLeftBox from "./prd/ProductionsPrdInfoLeftBox";
import PrudctionsPrdInfoRightBox from "./prd/PrudctionsPrdInfoRightBox";


export default function ProductionsPrdWrap(props) {



    return (
        <>
            <div className="production_selling_prd_info_wrap">
                <div className="production_selling_prd_info_inner inner">
                    <ProductionsPrdInfoLeftBox getCount={props.getCount}
                        getQuiryCount={props.getQuiryCount}
                    />
                    <PrudctionsPrdInfoRightBox
                        getPrice={props.getPrice}
                        priceOrigin={props.priceOrigin}
                        price={props.price}
                        qty={props.qty}
                        subTitle={props.subTitle}
                        qtyFlag={props.qtyFlag}
                    />
                </div>
            </div>
        </>
    );

}