import React from "react";
import ProductionsPrdReviewSvgBox from "./ProductionsPrdReviewSvgBox";
import ProductionsPrdReviewAsterionBox from "./ProductionsPrdReviewAsterionBox";


export default function ProductionsPrdReviewBox() {

    return (

        <>
            <div className="production_selling_prd_review_box">
                <div className="production_selling_prd_review_left">
                    <ProductionsPrdReviewSvgBox />
                </div>
                <div className="production_selling_prd_review_right">
                    <ProductionsPrdReviewAsterionBox />
                </div>
            </div>
        </>

    );

}