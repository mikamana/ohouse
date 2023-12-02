import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ProjectsCateList(props) {

    const [showModal, setShowModal] = useState(false);
    const [fade, setFade] = useState("");
    // 초기값 '' 공백으로 모달창 생성 안되게 설정
    const [modalBtn, setModalBtn] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {

        if (showModal === true) {
            // true일 경우에만 setTimeout 후 active를 넣어주었다.
            setTimeout(() => {
                setFade('active');
            }, 10);

        }

        return () => {
            // useEffect에서 반환한 콜백함수가 호출이됌
            // 컴포넌트가 unmount 될 때 실행되는 리턴함수이다.
            // 반환 함수는 다음 렌더링이 일어나기 전이나 컴포넌트가 제거되기 전에 실행됩니다.
            // 이 부분은 컴포넌트가 언마운트되기 전 또는 다음 effect가 실행되기 전에 실행됩니다
            // clearInterval, clearTimout, 라이버리 인스턴스 제거 , useEffect 반환되는 함수는 cleanup 함수 (뒷정리)
            setFade('');

        }

    }, [showModal])
    // showModal이 변경될 때 실행도록 만들어주었다.

    const fnSortFirstBtn = (kind) => {

        if (kind === "warming") {

            axios({

                method: "get",
                url: "http://127.0.0.1:8000/house/first"

            }).then((res) => {

                setList(res.data)

            })

        }

        // if (kind === "picture") {


        // }


    }

    const fnSortlastBtn = (kind) => {

        if (kind === "warming") {

            axios({

                method: "get",
                url: "http://127.0.0.1:8000/house/last"

            }).then((res) => {

                setList(res.data)

            })

        };

        // if (kind === "picture") {


        // }

    }

    useEffect(() => {

        props.getSort({ list: list })

    }, [list])

    return (
        <>
            <ul className='house_cate_list'>
                <li className={`house_cate_list_li ${fade}`} onMouseEnter={() => {
                    setShowModal(true)
                }} onMouseLeave={() => {
                    setShowModal(false)
                }}>
                    <div className='house_cate_list_box'>
                        <button className='house_cate_list_btn'>
                            <span className='house_cate_list_span'>정렬</span>
                        </button>
                    </div>
                    <div className="house_cate_list_modal">
                        <ul className='house_cate_list_modal_list'>
                            <li className='house_cate_list_modal_list_li'>
                                <button className={modalBtn === 0 ? 'house_cate_list_modal_list_li_btn active' : 'house_cate_list_modal_list_li_btn'} onClick={() => {
                                    fnSortFirstBtn(props.kind);
                                    setModalBtn(0);
                                }}>
                                    최신순
                                </button>
                            </li>
                            <li className='house_cate_list_modal_list_li'>
                                <button className={modalBtn === 1 ? 'house_cate_list_modal_list_li_btn active' : 'house_cate_list_modal_list_li_btn'} onClick={() => {
                                    fnSortlastBtn(props.kind);
                                    setModalBtn(1);
                                }}>
                                    과거순
                                </button>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </>
    );
}

