import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import ShopitemContents from '../../main/shopitem/ShopitemContents';
import SubtitleMore from '../../main/subtitle_more/Subtitle_more';
import ShopitemSection from '../../main/shopitem/ShopitemSection';
import "../../../css/sub/search/search.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Search (){
  const {searchKeyword} = useParams();
  const [shopArray, setShopArray] = useState([]);
  const [randomShopArray, setRandomShopArray] = useState([]);
  const [searchTotal, setSearchTotal] = useState([]);
  
  function randomArray(array, maxItems = 12) {
    let randomItem = array.slice(0, Math.min(maxItems, array.length)).slice();

    for (let i = randomItem.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomItem[i], randomItem[j]] = [randomItem[j], randomItem[i]];
    }
  
    return randomItem;
  }

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/search/${searchKeyword}`)
    .then(result => {
      setShopArray(result.data);
      const randomList = randomArray(result.data, 12);
      setRandomShopArray(randomList);
      // setShopArray(result.data)
    })
  }, [searchKeyword])

  useEffect(() => {
    fetch(`/data/iconMenu/search.json`)
      .then((res) => res.json())
      .then((data) => setSearchTotal(data));
  }, []);
  
  console.log(searchKeyword);

  return (
    <>
      <div className="search_container inner">
        <div className="search_keyword">
          <span>추천</span>
          <Link to={''}>{searchKeyword}</Link>
          <Link to={''}>{searchKeyword} 선물</Link>
          <Link to={''}>인기 {searchKeyword}</Link>
          <Link to={''}>{searchKeyword} 감성</Link>
          <Link to={''}>{searchKeyword} 이벤트</Link>
          <Link to={''}>소품 {searchKeyword}</Link>
          <Link to={''}>예쁜 {searchKeyword}</Link>
          <Link to={''}>휴대용 {searchKeyword}</Link>
          <Link to={''}>{searchKeyword} 선물 인기</Link>
        </div>

        <div className="search_total">
          <div className="search_total_style">
            <div className="search_total_sub_title">
              <p>{searchKeyword} 스타일링 노하우</p>
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
          <Link className="search_total_bttn" to={''}>{searchKeyword} 기획전 바로가기</Link>
        </div>

        <div className="searchResults">
          <SubtitleMore title={"쇼핑"} />
          <div key="shopitem_section" className="shopitem_section">
            <Swiper
              slidesPerView={6}
              slidesPerGroup={6}
              spaceBetween={10}
              navigation={{
                prevEl: ".shopitem_prev_btn",
                nextEl: ".shopitem_next_btn",
              }}
              modules={[Navigation]}
              className="mySwiper">
              {randomShopArray.map((list, i) =>
                  <SwiperSlide key={i}>
                    <ShopitemContents
                      shopitemList={list}
                      timecount={false}
                    />
                  </SwiperSlide>
                )}
            </Swiper>
            <button className="shopitem_prev_btn prev_style_opactiy"></button>
            <button className="shopitem_next_btn next_style_opactiy"></button>
          </div>
          

          <SubtitleMore title={"쇼핑"} />
          <div className="search_item">
            {shopArray.map((list, i) =>
              <ShopitemContents
                key={i}
                shopitemList={list}
                timecount={false}
              />
            )}
          </div>

        </div>
      </div>
    </>
  );
}