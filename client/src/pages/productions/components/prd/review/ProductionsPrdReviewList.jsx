import React from "react";
import { Link } from "react-router-dom";
import ProductionSvg from "../../ProductionSvg";
// import ProductionsPrdReviewUserItem from "./ProductionsPrdReviewUserItem";

export default function ProductionsPrdReviewList(props) {

    return (

        <>
            <ul className="production_selling_prd_review_item_list">
                {props.review.map((lst, key) =>
                    <li key={key} className="production_selling_prd_review_item_list_li">
                        <div className="production_selling_prd_review_item_box">
                            <div className="production_selling_prd_review_item_user">
                                <Link to="#" className="production_selling_prd_review_item_user_img">
                                    <img src={lst.userimg} alt="유저리뷰이미지" />
                                </Link>
                                <div className="production_selling_prd_review_item_user_info_wrap">
                                    <p className="production_selling_prd_review_item_user_info_title">
                                        {lst.nickname}
                                    </p>
                                    <button className="production_selling_prd_review_item_user_info_btn">
                                        <span className="production_selling_prd_review_item_user_info_btn_span">
                                            <ProductionSvg />
                                            <ProductionSvg />
                                            <ProductionSvg />
                                            <ProductionSvg />
                                            <ProductionSvg />
                                        </span>
                                    </button>
                                    <span className="production_selling_prd_review_item_user_info_btn_span_date">{lst.rdate} ∙ 별점 {lst.review_score}</span>
                                </div>
                            </div>
                            <div className="production_selling_prd_review_item_detail_star">
                                <p className="production_selling_prd_review_item_name">
                                    단품
                                </p>
                                <button className="production_selling_prd_review_item_btn_img">
                                    <img src={`http://127.0.0.1:8000/${lst.review_img}`} alt="유저리뷰사진" />
                                </button>
                                <p className="production_selling_prd_review_item_text">
                                    {lst.review_content}
                                </p>
                                <button className="production_selling_prd_review_item_help_btn">
                                    도움이 돼요
                                </button>
                                <span className="production_selling_prd_review_item_help_span">
                                    2명에게 도움이 되었습니다.
                                </span>
                            </div>
                        </div>
                    </li>
                )}
            </ul >
        </>

    );

}