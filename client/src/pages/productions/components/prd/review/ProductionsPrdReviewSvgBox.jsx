import React from "react";
import ProductionSvg from "../../ProductionSvg";

export default function ProductionsPrdReviewSvgBox(props) {

    return (

        <>
            <div className="production_selling_prd_review_total_box">
                <span className="production_selling_prd_review_icon">
                    <ProductionSvg />
                    <ProductionSvg />
                    <ProductionSvg />
                    <ProductionSvg />
                    <ProductionSvg />
                    <span>{props.avg}</span>
                </span>
            </div>
        </>

    );

}