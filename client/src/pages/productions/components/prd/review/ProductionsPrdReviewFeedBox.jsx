import React from "react";
// import ProductionsPrdReviewFeedNav from "./ProductionsPrdReviewFeedNav";
// import ProductionsPrdReviewFeedOption from "./ProductionsPrdReviewFeedOption";


export default function ProductionsPrdReviewFeedBox() {

    return (

        <>
            <div className="production_selling_prd_review_feed_wrap">
                {/* <ProductionsPrdReviewFeedNav /> */}
                <ul className="production_selling_prd_review_feed_list">
                    <li className="production_selling_prd_review_feed_list_li">
                        <span>베스트순</span>
                    </li>
                    <li className="production_selling_prd_review_feed_list_li">
                        <span>최신순</span>
                    </li>
                    <li className="production_selling_prd_review_feed_list_li">
                        <span>사진리뷰</span>
                    </li>
                </ul>
                {/* <ProductionsPrdReviewFeedOption /> */}
                <ul className="production_selling_prd_review_feed_option_list">
                    <li className="production_selling_prd_review_feed_option_list_li">
                        <button className="production_selling_prd_review_feed_asterion_btn">별점</button>
                    </li>
                    <li className="production_selling_prd_review_feed_option_list_li">
                        <button className="production_selling_prd_review_feed_option_btn">옵션</button>
                    </li>
                </ul>
            </div >
        </>

    );

}