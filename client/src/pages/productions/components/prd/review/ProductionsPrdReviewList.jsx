import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductionSvg from "../../ProductionSvg";
import ImageUpload from "../../../../components/ImageUpload";
import { getUser } from "../../../../utill/sessionStorage";
import axios from "axios";
import ProductionsPrdReviewUpdateBtn from "./ProductionsPrdReviewUpdateBtn";
// import ProductionsPrdReviewUserItem from "./ProductionsPrdReviewUserItem";

export default function ProductionsPrdReviewList(props) {


    const userInfo = getUser();
    const [image, setImage] = useState('');
    const [content, setContent] = useState("");
    const [toggle, setToggle] = useState(false);
    const params = useParams();

    const getImage = (e) => {

        setImage(e)

    }

    const fnUpdate = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);

        const formDataObject = {};

        formData.forEach((value, key) => {

            formDataObject[key] = value

        })

        axios({

            method: "put",
            url: `http://127.0.0.1:8000/review/product`,
            data: { mid: userInfo.id, pid: params.pid, formObject: formDataObject }

        }).then((result) => {

            alert("리뷰가 수정되었습니다.")
            window.location.reload();
        })

    }




    const fnClick = (e) => {

        setToggle(e)

    }

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
                                {userInfo ? lst.mid === userInfo.id ?
                                    <div className="production_selling_prd_review_item_user_info_ud_wrap">
                                        <ProductionsPrdReviewUpdateBtn onClick={fnClick}
                                            kind={"review"}
                                        />
                                    </div>
                                    : null
                                    : null
                                }
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
                        {toggle ? lst.mid === userInfo.id ?
                            <form className="production_selling_review_input_wrap" onSubmit={fnUpdate}>
                                <p className="production_selling_review_input_p">
                                    <label id="content">리뷰내용</label>
                                    <input type="text" id="content" name="content" className="production_selling_review_input" />
                                </p>
                                <p className="production_selling_review_input_p">
                                    <label id="image">이미지업로드</label>
                                    {<input type="hidden" name="image" placeholder="image"
                                        value={image} />}
                                    <ImageUpload getImage={getImage} />
                                    {/* <input type="text" id="url" name="image" className="production_selling_review_input" onChange={handleChange} /> */}
                                </p>
                                <p className="production_selling_review_input_p">
                                    <label id="score">별점</label>
                                    <select name="score" id="score" className="production_review_score_box">
                                        <option value="1">1점</option>
                                        <option value="2">2점</option>
                                        <option value="3">3점</option>
                                        <option value="4">4점</option>
                                        <option value="5">5점</option>
                                    </select>
                                </p>
                                <button type="submit" className="production_selling_review_input_btn">
                                    리뷰수정
                                </button>
                            </form>
                            : null
                            : null}
                    </li>
                )}
            </ul >
        </>

    );

}