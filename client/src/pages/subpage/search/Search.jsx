import React, { useState, useEffect } from 'react';
import "../../../css/sub/search/search.css";
import { Link } from "react-router-dom";
import ShopitemContents from '../../main/shopitem/ShopitemContents';
import SubtitleMore from '../../main/subtitle_more/Subtitle_more';
import axios from 'axios'


export default function Search() {

  const [shopArray, setShopArray] = useState([]);
  useEffect(() => {
    axios('http://127.0.0.1:8000/product/shopitem')
      .then(result => {
        setShopArray(result.data)
      }
      )
  }, [])

  const [searchResults, setSearchResults] = useState([]);

  const [searchTotal, setSearchTotal] = useState([]);
  useEffect(() => {
    fetch(`/data/iconMenu/search.json`)
      .then((res) => res.json())
      .then((data) => setSearchTotal(data));
  }, []);

  return (
    <>
      <div className="search_container inner">
        <div className="search_keyword">
          <span>연관</span>
          <Link to={''}>크리스마스</Link>
          <Link to={''}>소품크리스마스</Link>
          <Link to={''}>조명오너먼트크리스마스</Link>
          <Link to={''}>트리트리크리스마스</Link>
          <Link to={''}>선물크리스마스</Link>
          <Link to={''}>리스크리스마스</Link>
          <Link to={''}>포스터크리스마스</Link>
          <Link to={''}>식탁보크리스마스</Link>
          <Link to={''}>장식크리스마스</Link>
          <Link to={''}>가랜드크리스마스</Link>
          <Link to={''}>인테리어크리스마스</Link>
          <Link to={''}>홈파티크리스마스</Link>
          <Link to={''}>패브릭산타인형</Link>
        </div>
        <div className="search_total">
          <div className="search_total_style">
            <div className="search_total_sub_title">
              <p>크리스마스 스타일링 노하우</p>
              <span>올해는 더 예쁜 기억을 만들어보세요.</span>
            </div>
            <ul className="search_total_image">
              {searchTotal.slice(0, 3).map((total) => (
                <li key={total.id}>
                  <Link to={''}>
                    <figure style={{ backgroundImage: `url(${total.image})` }}>
                    </figure>
                    <p>{total.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="search_total_item">
            <div className="search_total_sub_title">
              <p>필수품 빠짐없이 준비하기</p>
              <span>많이 찾는 상품들을 모았어요.</span>
            </div>
            <ul className="search_total_image">
              {searchTotal.slice(4, 12).map((total) => (
                <li key={total.id}>
                  <Link to={''}>
                    <figure style={{ backgroundImage: `url(${total.image})` }}>
                    </figure>
                    <p>{total.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link className="search_total_bttn" to={''}>크리스마스 기획전 바로가기</Link>
        </div>
        <div className="searchResults">
          <SubtitleMore title={"쇼핑"} />
          {shopArray.map((list, i) =>
            <ShopitemContents
              key={i}
              shopitemList={list}
              timecount={false}
            />
          )}
        </div>
      </div>

    </>
  );
}