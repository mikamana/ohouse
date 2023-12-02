import React, { useEffect, useState } from "react";
import ProductionsPrdReviewBox from "./ProductionsPrdReviewBox";
import ProductionsPrdReviewFeedBox from "./ProductionsPrdReviewFeedBox";
import ProductionsPrdReviewReviewList from "./ProductionsPrdReviewList";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function ProductionsPrdReviewWrap() {

    const [list, setList] = useState([]);
    const params = useParams();

    useEffect(() => {

        axios({

            method: "get",
            url: `http://127.0.0.1:8000/review/${params.pid}`

        }).then((result) => {

            setList(result.data)

        })

    }, [])

    console.log(list);


    return (

        <>
            <ProductionsPrdReviewBox />
            <ProductionsPrdReviewFeedBox />
            <ProductionsPrdReviewReviewList review={list} />
        </>

    );

}