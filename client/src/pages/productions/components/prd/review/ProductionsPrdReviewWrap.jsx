import React, { useEffect, useState } from "react";
import ProductionsPrdReviewBox from "./ProductionsPrdReviewBox";
// import ProductionsPrdReviewFeedBox from "./ProductionsPrdReviewFeedBox";
import ProductionsPrdReviewReviewList from "./ProductionsPrdReviewList";
import axios from 'axios';
import { useParams } from "react-router-dom";
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';

export default function ProductionsPrdReviewWrap(props) {

    const params = useParams();
    const [check, setCheck] = useState(0);

    //페이징 처리
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [list, setList] = useState([]);


    useEffect(() => {

        let startIndex = 0;
        let endIndex = 0;

        startIndex = (currentPage - 1) * pageSize; //1-1*3+1 : 1, 4 .. 몇번째 데이터부터 몇개를 보여줄 것인지(데이터기준)
        // endIndex = currentPage * pageSize; //1*3 : 3, 6 ..

        axios({

            method: "get",
            url: `http://127.0.0.1:8000/review/product/${params.pid}/${startIndex}/5`

        }).then((result) => {

            setList(result.data);

        })

    }, [currentPage]);

    return (

        <>
            <ProductionsPrdReviewBox count={props.count} avg={props.avg} />
            {/* <ProductionsPrdReviewFeedBox /> */}
            <div className="production_selling_prd_review_feed_wrap">
                {/* <ul className="production_selling_prd_review_feed_list">
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
                </ul> */}
                {/* <ul className="production_selling_prd_review_feed_option_list">
                    <li className="production_selling_prd_review_feed_option_list_li">
                        <button className="production_selling_prd_review_feed_asterion_btn">별점</button>
                    </li>
                    <li className="production_selling_prd_review_feed_option_list_li">
                        <button className="production_selling_prd_review_feed_option_btn">옵션</button>
                    </li>
                </ul> */}
            </div >
            <ProductionsPrdReviewReviewList review={list} />
            <Pagination
                current={currentPage}
                total={props.totCount}
                pageSize={pageSize}
                onChange={(page) => setCurrentPage(page)} />
        </>

    );

}