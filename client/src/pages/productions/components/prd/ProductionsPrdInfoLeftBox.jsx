import React from "react";
import ProductionsPrdTitleBox from "./userstyle/ProductionsPrdTitleBox";
import ProductionsPrdUserImgBox from "./userstyle/ProductionsPrdUserImgBox";
import ProductionsPrdReviewWrap from "./review/ProductionsPrdReviewWrap";



export default function ProductionsPrdInfoLeftBox() {

    return (

        <>
            <div className="production_selling_prd_info_left">
                <ul className="production_selling_prd_info_list">
                    <li className="production_selling_prd_info_list_li">
                        <ProductionsPrdTitleBox title={"유저들의 스타일링샷"}
                            count={" 675"}
                            more={true}
                        />
                        <ProductionsPrdUserImgBox />
                    </li>
                    <li className="production_selling_prd_info_list_li">
                        <ProductionsPrdTitleBox title={"상품정보"}
                            more={"＞"}
                        />
                        <img className="production_selling_prd_info_list_img" src="https://gi.esmplus.com/ghltks4713/SALESTALK/WF24DV20.jpg" alt="상품정보이미지1" />
                    </li>
                    <li className="production_selling_prd_info_list_li">
                        <ProductionsPrdTitleBox title={"리뷰"}
                            count={" 502"}
                            more={"리뷰쓰기"}
                            deck={"active"}
                        />
                        <ProductionsPrdReviewWrap />
                    </li>
                </ul>
            </div >
        </>

    );

}