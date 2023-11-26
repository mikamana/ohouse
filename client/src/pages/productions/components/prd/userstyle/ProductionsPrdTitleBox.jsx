import React from "react";
import { Link } from "react-router-dom";

export default function ProductionsPrdTitleBox(props) {

    return (

        <>
            <div className="production_selling_prd_title_wrap">
                <h4 className="production_selling_prd_title">
                    {props.title}
                    <span className="production_selling_prd_title_point">{props.count}</span>
                </h4>
                <Link to="#" className={'production_selling_prd_title_span ' + props.deck}>
                    {props.more}
                </Link>
            </div>
        </>

    );

}