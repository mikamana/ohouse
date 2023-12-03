import React, { useState } from "react";
import ProductionsPrdReviewBox from "./ProductionsPrdReviewBox";
import ProductionsPrdReviewFeedBox from "./ProductionsPrdReviewFeedBox";
import ProductionsPrdReviewReviewList from "./ProductionsPrdReviewList";
import axios from 'axios';
import { useParams } from "react-router-dom";


export default function ProductionsPrdReviewWrap(props) {

    const params = useParams();
    const [check, setCheck] = useState(0);



    const fnBestReview = (kind) => {


        if (kind === "best") {

            axios({

                method: "get",
                url: `http://127.0.0.1:8000/review/product/best/${params.pid}`

            }).then((result) => {

                props.getList(result.data)

            })

        }

        if (kind === "latest") {

            axios({

                method: "get",
                url: `http://127.0.0.1:8000/review/product/latest/${params.pid}`

            }).then((result) => {

                props.getList(result.data)

            })

        }


    }



    return (

        <>
            <ProductionsPrdReviewBox count={props.count} avg={props.avg} />
            {/* <ProductionsPrdReviewFeedBox /> */}
            <div className="production_selling_prd_review_feed_wrap">
                {/* <ProductionsPrdReviewFeedNav /> */}
                <ul className="production_selling_prd_review_feed_list">
                    <li className={check === 0 ? "production_selling_prd_review_feed_list_li active" : "production_selling_prd_review_feed_list_li"} onClick={() => {
                        setCheck(0)
                        fnBestReview('best')
                    }}>
                        <span>베스트순</span>
                    </li>
                    <li className={check === 1 ? "production_selling_prd_review_feed_list_li active" : "production_selling_prd_review_feed_list_li"} onClick={() => {
                        setCheck(1)
                        fnBestReview('latest')

                    }}>
                        <span>최신순</span>
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
            <ProductionsPrdReviewReviewList review={props.review} />
        </>

    );

}