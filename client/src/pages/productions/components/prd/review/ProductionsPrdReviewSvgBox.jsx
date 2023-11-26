import React from "react";
import ProductionsPrdReviewSvg from "./ProductionsPrdReviewSvg";


export default function ProductionsPrdReviewSvgBox() {

    return (

        <>
            <div className="production_selling_prd_review_total_box">
                <span className="production_selling_prd_review_icon">
                    <ProductionsPrdReviewSvg />
                    <ProductionsPrdReviewSvg />
                    <ProductionsPrdReviewSvg />
                    <ProductionsPrdReviewSvg />
                    <ProductionsPrdReviewSvg />
                    <span>2.0</span>
                </span>
            </div>
        </>

    );

}