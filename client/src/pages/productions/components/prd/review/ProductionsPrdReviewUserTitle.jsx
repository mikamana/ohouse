import React, { useState } from 'react';
import ProductionSvg from '../../ProductionSvg';

export default function ProductionsPrdReviewUserTitle(props) {
    const [isNew, setIsNew] = useState(props.isNew)

    return (
        <>
            <div className="production_selling_prd_review_item_user_info_wrap">
                <p className="production_selling_prd_review_item_user_info_title">
                    <span>{props.mid}</span>
                </p>
                <button className="production_selling_prd_review_item_user_info_btn">
                    {
                        isNew === true ?
                            <span span className="production_selling_prd_review_item_user_info_btn_span">
                                <ProductionSvg />
                                <ProductionSvg />
                                <ProductionSvg />
                                <ProductionSvg />
                                <ProductionSvg />
                            </span>
                            : null
                    }
                </button>
                {isNew === true ? <span className="production_selling_prd_review_item_user_info_btn_span_date">2023.11.23 ∙ 오늘의집 구매</span> : null}
            </div >
        </>
    );
}

