import React, { useEffect, useState } from "react";
import ProductionsPrdTitleBox from "./userstyle/ProductionsPrdTitleBox";
import ProductionsPrdUserImgBox from "./userstyle/ProductionsPrdUserImgBox";
import ProductionsPrdReviewWrap from "./review/ProductionsPrdReviewWrap";
import axios from 'axios';
import { getUser } from "../../../utill/sessionStorage";
import { useParams } from "react-router-dom";
import ImageUpload from "../../../components/ImageUpload";

export default function ProductionsPrdInfoLeftBox(props) {

    const [toggle, setToggle] = useState(false);
    const userInfo = getUser();
    let params = useParams();

    const [image, setImage] = useState(null);
    const [list, setList] = useState([]);
    const [countList, setCountList] = useState([]);
    const [avgList, setAvgList] = useState([]);
    const [quiryToggle, setQuiryToggle] = useState(false);


    useEffect(() => {

        axios({

            method: "get",
            url: `http://127.0.0.1:8000/review/product/${params.pid}`

        }).then((result) => {

            setList(result.data)

        })

    }, [])

    useEffect(() => {

        axios({

            method: 'get',
            url: `http://127.0.0.1:8000/review/product/count/${params.pid}`

        }).then((result) => {

            setCountList(result.data)

        })

    }, [])

    useEffect(() => {

        axios({

            method: 'get',
            url: `http://127.0.0.1:8000/review/product/avg/${params.pid}`

        }).then((result) => {

            setAvgList(result.data[0])
            props.getCount(result.data[0])

        })

    }, [])

    const getList = (e) => {

        setList(e);

    }

    const getReview = (e) => {

        setToggle(e.toggle)
        setQuiryToggle(e.queryToggle)

    }

    const getImage = (e) => {

        alert(`new file ==>> ${JSON.stringify(e)}`);
        setImage(e)

    }

    const fnReviewSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);

        const formDataObject = {};


        formData.forEach((value, key) => {

            formDataObject[key] = value

        })



        axios({

            method: "post",
            url: `http://127.0.0.1:8000/review/product`,
            data: { mid: userInfo.id, pid: params.pid, formObject: formDataObject }

        }).then((result) => {

            if (result.status === 204) {

                window.location.reload();
                alert("리뷰가 등록되었습니다.")

            }

        })

    }



    return (

        <>
            <div className="production_selling_prd_info_left">
                <ul className="production_selling_prd_info_list">
                    <li className="production_selling_prd_info_list_li">
                        <ProductionsPrdTitleBox title={"유저들의 스타일링샷"}
                            count={"240"}
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
                            count={avgList.count}
                            more={userInfo ? "리뷰쓰기" : null}
                            deck={"active"}
                            getReview={getReview}
                            kind={"review"}
                        />
                        {
                            toggle ?
                                <form className="production_selling_review_input_wrap" onSubmit={fnReviewSubmit}>
                                    <p className="production_selling_review_input_p">
                                        <label id="content">리뷰내용</label>
                                        <input type="text" id="content" name="content" className="production_selling_review_input" />
                                    </p>
                                    <p className="production_selling_review_input_p">
                                        <label id="image">이미지업로드</label>
                                        <input type="hidden" name="image" placeholder="image"
                                            value={image} />
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
                                        리뷰등록
                                    </button>
                                </form>
                                : null
                        }
                        <ProductionsPrdReviewWrap
                            avg={avgList.avg_score}
                            totCount={avgList.sum}
                            count={countList}
                            getList={getList}
                        />
                    </li>
                    <li className="production_selling_prd_info_list_li">
                        <ProductionsPrdTitleBox title={"문의"}
                            more={userInfo ? "문의하기" : null}
                            kind={"quiry"}
                            getReview={getReview}
                        />
                        {
                            quiryToggle
                                ?
                                <div className="production_quiry_modal_wrap">
                                    <div className="production_quiry_modal">
                                        <span className="quiry_modal_close"></span>
                                        <h3 className="production_quiry_modal_title">
                                            상품 문의하기
                                        </h3>
                                        <ul className="production_quiry_modal_list">
                                            <li className="production_quiry_modal_list_li">
                                                <p className="production_quiry_modal_list_type">
                                                    문의유형
                                                </p>
                                                <ul className="production_quiry_modal_type_list">
                                                    <li className="production_quiry_modal_type_list_li">
                                                        상품
                                                    </li>
                                                    <li className="production_quiry_modal_type_list_li">
                                                        배송
                                                    </li>
                                                    <li className="production_quiry_modal_type_list_li">
                                                        반품
                                                    </li>
                                                    <li className="production_quiry_modal_type_list_li">
                                                        교환
                                                    </li>
                                                    <li className="production_quiry_modal_type_list_li">
                                                        환불
                                                    </li>
                                                    <li className="production_quiry_modal_type_list_li">
                                                        기타
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="production_quiry_modal_list_li">
                                                <p className="production_quiry_modal_list_type">
                                                    문의내용
                                                </p>
                                                <input className="production_quiry_modal_list_content" type="text" placeholder="문의 내용을 입력하세요" />
                                            </li>
                                        </ul>
                                        <button className="production_quiry_modal_btn">
                                            완료
                                        </button>
                                    </div>
                                </div>
                                :
                                <div>없음</div>
                        }
                    </li>
                </ul>
            </div >

        </>

    );

}