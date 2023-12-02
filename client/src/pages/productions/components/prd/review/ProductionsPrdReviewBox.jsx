import React from "react";
import ProductionsPrdReviewSvgBox from "./ProductionsPrdReviewSvgBox";
// import ProductionsPrdReviewAsterionBox from "./ProductionsPrdReviewAsterionBox";
import ProductionsPrdReviewAsterion from "./ProductionsPrdReviewAsterion";

export default function ProductionsPrdReviewBox() {

    return (

        <>
            <div className="production_selling_prd_review_box">
                <div className="production_selling_prd_review_left">
                    <ProductionsPrdReviewSvgBox />
                </div>
                <div className="production_selling_prd_review_right">
                    {/* <ProductionsPrdReviewAsterionBox /> */}
                    <ul className="production_selling_prd_review_asterion_list">
                        <li className="production_selling_prd_review_asterion_list_li">
                            <ProductionsPrdReviewAsterion score={"5점"}
                                count={0} />
                        </li>
                        <li className="production_selling_prd_review_asterion_list_li">
                            <ProductionsPrdReviewAsterion score={"4점"}
                                count={0} />
                        </li>
                        <li className="production_selling_prd_review_asterion_list_li">
                            <ProductionsPrdReviewAsterion score={"3점"}
                                count={0} />
                        </li>
                        <li className="production_selling_prd_review_asterion_list_li">
                            <ProductionsPrdReviewAsterion score={"2점"}
                                count={0} />
                        </li>
                        <li className="production_selling_prd_review_asterion_list_li">
                            <ProductionsPrdReviewAsterion score={"1점"}
                                count={0} />
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );

}