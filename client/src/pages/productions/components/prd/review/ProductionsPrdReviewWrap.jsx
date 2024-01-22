import React, { forwardRef, useEffect, useState } from "react";
import ProductionsPrdReviewBox from "./ProductionsPrdReviewBox";
// import ProductionsPrdReviewFeedBox from "./ProductionsPrdReviewFeedBox";
import ProductionsPrdReviewReviewList from "./ProductionsPrdReviewList";
import axios from 'axios';
import { useParams } from "react-router-dom";
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import { getUser } from "../../../../utill/sessionStorage";


const ProductionsPrdReviewWrap = forwardRef((props, ref) => {

    const params = useParams();
    const [check, setCheck] = useState(0);

    //베스트순,최신순
    const [kindList, setKindList] = useState("best");
    //페이징 처리
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [list, setList] = useState([]);

    const userInfo = getUser();

    useEffect(() => {

        axios({

            method: "get",
            url: `http://127.0.0.1:8000/review/product/all/${params.pid}`

        }).then((result) => {

            props.getList(result.data)

        })

    }, [])

    useEffect(() => {
        let startIndex = 0;
        // let endIndex = 0;
        startIndex = (currentPage - 1) * pageSize; //1-1*3+1 : 1, 4 .. 몇번째 데이터부터 몇개를 보여줄 것인지(데이터기준)
        // endIndex = currentPage * pageSize; //1*3 : 3, 6 ..

        if (userInfo) {
            axios({
                method: "get",
                url: `http://127.0.0.1:8000/review/product/${kindList}/${userInfo.id}/${params.pid}/${startIndex}/5`
            }).then((result) => {
                setList(result.data);
            })
        } else {
            axios({
                method: "get",
                url: `http://127.0.0.1:8000/review/product/${kindList}/${params.pid}/${startIndex}/5`
            }).then((result) => {
                setList(result.data);
            })

        }



    }, [currentPage, kindList]);

    return (

        <div >
            <ProductionsPrdReviewBox count={props.count} avg={props.avg} />
            <div className="production_selling_prd_review_feed_wrap" ref={ref}>
                <ul className="production_selling_prd_review_feed_list">
                    <li className={check === 0 ? "production_selling_prd_review_feed_list_li active" : "production_selling_prd_review_feed_list_li"} onClick={() => {
                        setCheck(0)
                        setKindList('best')
                    }}>
                        <span>베스트순</span>
                    </li>
                    <li className={check === 1 ? "production_selling_prd_review_feed_list_li active" : "production_selling_prd_review_feed_list_li"} onClick={() => {
                        setCheck(1)
                        setKindList('latest')
                    }}>
                        <span>최신순</span>
                    </li>
                </ul>
            </div >
            <ProductionsPrdReviewReviewList review={list} />
            <Pagination
                current={currentPage}
                total={props.totCount}
                pageSize={pageSize}
                onChange={(page) => setCurrentPage(page)} />
        </div>

    );

})
// export default function ProductionsPrdReviewWrap(props) {



// }

export default ProductionsPrdReviewWrap;