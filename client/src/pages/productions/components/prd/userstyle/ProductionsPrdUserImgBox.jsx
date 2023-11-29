import React from "react";
import ProductionsPrdBtnBox from "./ProductionsPrdBtnBox";
import ProductionsPrdSwiperBox from "./ProductionsPrdSwiperBox";

export default function ProductionsPrdUserImgBox() {

    return (
        <>
            <div className="production_selling_prd_userimg_wrap">
                <ProductionsPrdSwiperBox />
                <ProductionsPrdBtnBox />
            </div >
        </>

    );

}