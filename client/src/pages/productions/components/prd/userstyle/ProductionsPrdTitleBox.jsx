import React, { useState } from "react";


export default function ProductionsPrdTitleBox(props) {

    const [reviewToggle, setReviewToggle] = useState(true);
    const fnCreateReview = () => {




        props.getReview({ toggle: reviewToggle });

    };




    return (
        <>
            <div className="production_selling_prd_title_wrap">
                <h4 className="production_selling_prd_title">
                    {props.title}
                    <span className="production_selling_prd_title_point">{props.count}</span>
                </h4>
                <button className={'production_selling_prd_title_span ' + props.deck} onClick={() => {
                    setReviewToggle((toggle) => !toggle)
                    fnCreateReview()
                }}>
                    {props.more}
                </button>
            </div>
        </>
    );

}