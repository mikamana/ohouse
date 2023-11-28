import React from "react";
import ProductionsPrdReviewFeedNav from "./ProductionsPrdReviewFeedNav";
import ProductionsPrdReviewFeedOption from "./ProductionsPrdReviewFeedOption";


export default function ProductionsPrdReviewFeedBox() {

    return (

        <>
            <div className="production_selling_prd_review_feed_wrap">
                <ProductionsPrdReviewFeedNav />
                <ProductionsPrdReviewFeedOption />
            </div >
        </>

    );

}