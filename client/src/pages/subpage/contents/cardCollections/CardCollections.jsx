import React, { useEffect, useState } from 'react';
import ProjectsCateList from '../projects/components/ProjectsCateList';
import axios from 'axios';
import "../../../../css/sub/contents/cardCollections/collections.css";
import CardCollectionsUserBox from "./CardCollectionsUserBox";
import ProductionSvg from '../../../productions/components/ProductionSvg';
export default function CardCollections() {

    const [list, setList] = useState([]);

    const getSort = (e) => {

        setList(e.list)

    }

    useEffect(() => {

        axios({

            method: 'get',
            url: 'http://127.0.0.1:8000/house/collections'

        }).then((result) => {

            setList(result.data)

        })

    }, [])



    return (
        <>
            <div className='card_collections_wrap'>
                <div className="card_collections_inner_wrap inner">
                    <div className="card_collections_house">
                        <ul className='card_collections_house_list'>
                            {list.map((lst, val) =>
                                <li key={val} className='card_collections_house_list_li'>
                                    <div className='card_collections_house_list_div'>
                                        <div className="card_collections_house_list_user_info">
                                            <CardCollectionsUserBox userImg={lst.userimg}
                                                nickName={lst.nickname}
                                                userId={lst.mid}
                                            />
                                        </div>
                                        <fieldset className='card_collections_house_list_img_wrap'>
                                            <img src={lst.house_img} alt="유저상품이미지" />
                                        </fieldset>
                                        <div className='card_collections_house_list_icon_wrap'>
                                            <span>
                                                <svg aria-label="좋아요" width="24" height="24" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                                    <path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path>
                                                </svg>
                                                <span>255</span>
                                            </span>
                                            <span>
                                                <svg aria-label="스크랩" width="24" height="24" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                                    <path d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path>
                                                </svg>
                                                <span>23</span>
                                            </span>
                                            <span>
                                                <svg aria-label="댓글 달기" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                                    <path d="M13.665 18.434l.53-.066C19.69 17.679 23 14.348 23 10c0-4.942-4.235-8.5-11-8.5S1 5.058 1 10c0 4.348 3.31 7.68 8.804 8.368l.531.066L12 21.764l1.665-3.33zm-3.985.926C3.493 18.585 0 14.69 0 10 0 4.753 4.373.5 12 .5S24 4.753 24 10c0 4.69-3.493 8.585-9.68 9.36l-1.647 3.293c-.374.75-.974.744-1.346 0L9.68 19.36z"></path>
                                                </svg>
                                                <span>10</span>
                                            </span>
                                        </div>
                                        <p className='card_collections_house_list_content'>
                                            {lst.house_content}
                                        </p>
                                    </div>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

