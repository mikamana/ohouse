import React, { useEffect, useRef, useState } from "react";
import ProductionsPrdTitleBox from "./userstyle/ProductionsPrdTitleBox";
import ProductionsPrdUserImgBox from "./userstyle/ProductionsPrdUserImgBox";
import ProductionsPrdReviewWrap from "./review/ProductionsPrdReviewWrap";
import axios from 'axios';
import { getUser } from "../../../utill/sessionStorage";
import { useParams } from "react-router-dom";
import ImageUpload from "../../../components/ImageUpload";
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';


export default function ProductionsPrdInfoLeftBox(props) {

    const [toggle, setToggle] = useState(false);
    const userInfo = getUser();
    let params = useParams();

    const [image, setImage] = useState(null);
    const [list, setList] = useState([]);
    const [countList, setCountList] = useState([]);
    const [avgList, setAvgList] = useState([]);
    const [quiryToggle, setQuiryToggle] = useState(false);
    const [typeBtn, setTypeBtn] = useState(0);
    const [focus, setFocus] = useState(false);
    const [type, setType] = useState('');
    const [content, setContent] = useState('');
    const [check, setCheck] = useState(false);
    //문의
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [quiryList, setQuiryList] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

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

    useEffect(() => {

        if (typeBtn === 0) {

            setType('상품')
            // useEffect안에 콘솔을 찍으면 console.log가 먼저 실행될 가능성이 있어 배송을 클릭하면 type이 바뀌기 전 상품이 콘솔에 나타났을 가능성이 있음
            // 만약 useEffect 안에서 사용하는 상태나 props 를 deps 에 넣지 않게 된다면 useEffect 에 등록한 함수가 실행 될 때 최신 props / 상태를 가르키지 않게 됩니다.
        } else if (typeBtn === 1) {

            setType('배송')

        } else if (typeBtn === 2) {

            setType('반품')

        } else if (typeBtn === 3) {

            setType('교환')

        } else if (typeBtn === 4) {

            setType('환불')

        } else if (typeBtn === 5) {

            setType('기타')

        }


    }, [typeBtn])

    const fnInputHandler = (e) => {

        setContent(e.target.value)

    };//input onChange > content에 데이터 삽입


    const fnSubmitModal = (e) => {

        axios({

            method: "post",
            url: "http://127.0.0.1:8000/inquiry",
            data: { type: type, content: content, pid: params.pid, mid: userInfo.id, check: check }

        }).then((result) => {

            window.location.reload();
            alert("문의가 등록되었습니다.")

        })

    };

    useEffect(() => {

        let startIndex = 0;
        let endIndex = 0;

        startIndex = (currentPage - 1) * pageSize + 1; //1-1*3+1 : 1, 4 .. 몇번째 데이터부터 몇개를 보여줄 것인지(데이터기준)
        endIndex = currentPage * pageSize; //1*3 : 3, 6 ..

        axios({

            method: 'get',
            url: `http://127.0.0.1:8000/inquiry/${params.pid}/${startIndex}/${endIndex}`

        }).then((result) => {

            setQuiryList(result.data)
            setTotalPage(result.data[0].cnt)

        })

    }, [currentPage])


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
                                        <span className="quiry_modal_close" onClick={() => {

                                            setQuiryToggle(false)

                                        }}></span>
                                        <h3 className="production_quiry_modal_title">
                                            상품 문의하기
                                        </h3>
                                        <ul className="production_quiry_modal_list">
                                            <li className="production_quiry_modal_list_li">
                                                <p className="production_quiry_modal_list_type">
                                                    문의유형
                                                </p>
                                                <ul className="production_quiry_modal_type_list">
                                                    <li className={typeBtn === 0 ? "production_quiry_modal_type_list_li actvie" : "production_quiry_modal_type_list_li"} onClick={() => {

                                                        setTypeBtn(0)

                                                    }}>
                                                        상품
                                                    </li>
                                                    <li className={typeBtn === 1 ? "production_quiry_modal_type_list_li actvie" : "production_quiry_modal_type_list_li"} onClick={() => {

                                                        setTypeBtn(1)

                                                    }}>
                                                        배송
                                                    </li>
                                                    <li className={typeBtn === 2 ? "production_quiry_modal_type_list_li actvie" : "production_quiry_modal_type_list_li"} onClick={() => {

                                                        setTypeBtn(2)

                                                    }}>
                                                        반품
                                                    </li>
                                                    <li className={typeBtn === 3 ? "production_quiry_modal_type_list_li actvie" : "production_quiry_modal_type_list_li"} onClick={() => {

                                                        setTypeBtn(3)

                                                    }}>
                                                        교환
                                                    </li>
                                                    <li className={typeBtn === 4 ? "production_quiry_modal_type_list_li actvie" : "production_quiry_modal_type_list_li"} onClick={() => {

                                                        setTypeBtn(4)

                                                    }}>
                                                        환불
                                                    </li>
                                                    <li className={typeBtn === 5 ? "production_quiry_modal_type_list_li actvie" : "production_quiry_modal_type_list_li"} onClick={() => {

                                                        setTypeBtn(5)

                                                    }}>
                                                        기타
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="production_quiry_modal_list_li">
                                                <p className="production_quiry_modal_list_type">
                                                    문의내용
                                                </p>
                                                <input className={focus ? "production_quiry_modal_list_content active" : "production_quiry_modal_list_content"} type="text" name="content" onChange={fnInputHandler} value={content} placeholder="문의 내용을 입력하세요" onFocus={() => {
                                                    setFocus(true)
                                                }} onBlur={() => {
                                                    setFocus(false)
                                                }} />
                                                <p className="production_quiry_modal_list_checkbox_wrap">
                                                    <label id="secret">비밀글 여부 체크</label>
                                                    <input type="checkbox" className="production_quiry_modal_list_checkbox" name="secret" onChange={() => {
                                                        setCheck((check) => !check);
                                                    }} />
                                                </p>
                                            </li>
                                        </ul>
                                        <button className="production_quiry_modal_btn" onClick={() => {

                                            fnSubmitModal();

                                        }}>
                                            완료
                                        </button>
                                    </div>
                                </div>
                                :
                                null
                        }
                        <ul className="production_inquiry_list_box">
                            {quiryList.map((lst, key) =>
                                <li key={key} className="production_inquiry_list_box_li">
                                    <div className="production_inquiry_list_box_purchase_check">
                                        <span className="production_inquiry_list_box_purchase_check_span">구매</span>
                                        <span className="production_inquiry_list_box_purchase_check_span">{lst.qtype}</span>
                                        <span className="production_inquiry_list_box_purchase_check_span">{lst.adate ? "답변완료" : "대기중"}</span>
                                    </div>
                                    <div className="production_inquiry_list_box_user">
                                        <span className="production_inquiry_list_box_user">{lst.nickname}***</span>
                                        <span className="production_inquiry_list_box_user">{lst.qdate}</span>
                                    </div>
                                    <div className="production_inquiry_list_box_qna">
                                        <div className="production_inquiry_list_icon_box">
                                            <span className="production_inquiry_list_icon_text">
                                                Q
                                            </span>
                                            <span className="production_inquiry_list_box_qna_content">
                                                {lst.qcontent}
                                            </span>
                                        </div>
                                        <div className="production_inquiry_list_icon_box">
                                            <span className="production_inquiry_list_icon_text">
                                                A
                                            </span>
                                            <div className="production_inquiry_list_answer_box">
                                                <span className="production_inquiry_list_answer_brand">{lst.acontent} <span className="production_inquiry_list_answer_date">2023년 11월 22일 09시 48분</span></span>
                                                {/* <span className="production_inquiry_list_answer_span">
                                                    {lst.acontent}
                                                </span> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>



                            )}

                        </ul>
                        <Pagination
                            current={currentPage}
                            total={totalPage}
                            pageSize={pageSize}
                            onChange={(page) => setCurrentPage(page)}
                        />
                    </li>
                </ul>
            </div >

        </>

    );

}