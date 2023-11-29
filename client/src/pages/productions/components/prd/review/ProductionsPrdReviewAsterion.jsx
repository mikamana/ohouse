import React from "react";


export default function ProductionsPrdReviewAsterion(props) {

    return (

        <>
            <span className="production_selling_prd_review_asterion_list_text">{props.score}</span>
            <div className="production_selling_prd_review_asterion_list_bar"></div>
            <span className="production_selling_prd_review_asterion_list_number">{props.count}</span>
        </>

    );

}