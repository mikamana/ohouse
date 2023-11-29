import React from "react";
import ProductionsPrdReviewBox from "./ProductionsPrdReviewBox";
import ProductionsPrdReviewFeedBox from "./ProductionsPrdReviewFeedBox";
import ProductionsPrdReviewReviewList from "./ProductionsPrdReviewList";


export default function ProductionsPrdReviewWrap() {

    return (

        <>
            <ProductionsPrdReviewBox />
            <ProductionsPrdReviewFeedBox />
            <ProductionsPrdReviewReviewList />
        </>

    );

}