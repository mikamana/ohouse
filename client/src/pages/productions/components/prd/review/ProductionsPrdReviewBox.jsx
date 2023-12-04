import React, { useEffect, useState } from "react";
import ProductionsPrdReviewSvgBox from "./ProductionsPrdReviewSvgBox";
// import ProductionsPrdReviewAsterionBox from "./ProductionsPrdReviewAsterionBox";
import ProductionsPrdReviewAsterion from "./ProductionsPrdReviewAsterion";

export default function ProductionsPrdReviewBox(props) {

    return (

        <>
            <div className="production_selling_prd_review_box">
                <div className="production_selling_prd_review_left">
                    <ProductionsPrdReviewSvgBox avg={props.avg} />
                </div>
                <div className="production_selling_prd_review_right">
                    {/* <ProductionsPrdReviewAsterionBox /> */}
                    <ul className="production_selling_prd_review_asterion_list">
                        {props.count.length !== 0 ?
                            props.count.map((lst, key) =>
                                <li key={key} className="production_selling_prd_review_asterion_list_li">
                                    <ProductionsPrdReviewAsterion score={`${lst.review_score}점`}
                                        count={lst.rcount} />
                                </li>)
                            :
                            <li>리뷰가 없습니다.</li>
                        }
                    </ul>
                </div>
            </div>
        </>

    );

}