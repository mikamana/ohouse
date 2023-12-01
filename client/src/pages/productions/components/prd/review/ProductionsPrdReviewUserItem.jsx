import React from 'react';
import ProductionsPrdReviewUserTitle from './ProductionsPrdReviewUserTitle';
import { Link } from "react-router-dom";

export default function ProductionsPrdReviewUserItem(props) {
    return (
        <>
            <div className="production_selling_prd_review_item_user">
                <Link to="#" className="production_selling_prd_review_item_user_img">
                    <img src={props.userImg} alt="유저리뷰이미지" />
                </Link>
                <ProductionsPrdReviewUserTitle isNew={props.isNew}
                    mid={props.mid}
                />
            </div>
        </>
    );
}

