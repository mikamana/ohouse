import React, { useState } from "react";


export default function ProductionsPrdTitleBox(props) {

    const [reviewToggle, setReviewToggle] = useState(true);
    const [quiryToggle, setQuiryToggle] = useState(true);
    // const [count, setCount] = useState(props.count[0].count);

    const fnCreateReview = (kind) => {

        if (kind === "review") {

            props.getReview({ toggle: reviewToggle });

        } else if (kind === "quiry") {

            props.getReview({ queryToggle: quiryToggle });

        }

    };

    return (
        <>
            <div className="production_selling_prd_title_wrap">
                <h4 className="production_selling_prd_title">
                    {props.title}
                    <span className="production_selling_prd_title_point"> {props.count}</span>
                </h4>
                <button className={'production_selling_prd_title_span ' + props.deck} onClick={() => {
                    setReviewToggle((toggle) => !toggle)
                    setQuiryToggle((toggle) => !toggle)
                    fnCreateReview(props.kind)
                }}>
                    {props.more}
                </button>
            </div>
        </>
    );

}