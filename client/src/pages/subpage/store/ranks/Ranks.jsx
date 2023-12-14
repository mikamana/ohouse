import React, { useEffect, useState } from 'react';
import '../../../../css/sub/store/ranks/ranks.css'
import axios from 'axios';
import ShopitemContents from '../../../main/shopitem/ShopitemContents';
import ShopcateCategoryItem from '../../../main/shopcate/components/category/ShopcateCategoryItem';
import ShopcateCategoryAll from '../../../main/shopcate/components/category/ShopcateCategoryAll';
export default function Ranks() {
  const [active, setActive] = useState(true);
  const [bestList, setBestList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const now = new Date();

  function handleClick(e) {
    if (e.target.id === 'realtime') {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  useEffect(() => {
    if (active) {
      axios.get('http://127.0.0.1:8000/product/ranks/realtime')
        .then(result => setBestList(result.data))
    } else {
      axios.get('http://127.0.0.1:8000/product/ranks/alltime')
        .then(result => setBestList(result.data))
      axios.get('http://127.0.0.1:8000/category')
        .then(result => setCategoryList(result.data))
    }
  }, [active])

  const [activeBtn, SetActiveBtn] = useState(0)
  function handleCategoryClick(category_id) {
    SetActiveBtn(category_id)
  }


  function getCategoryItem(category_id) {
    if (category_id === 0) {
      axios.get('http://127.0.0.1:8000/product/ranks/alltime')
        .then(result => setBestList(result.data))
    } else {
      axios.get(`http://127.0.0.1:8000/product/ranks/category/${category_id}`)
        .then(result => setBestList(result.data))
    }
  }

  const bestContainer = () => {
    if (active) {
      return (
        <div className='ranks_realtime_contents_wrap'>
          <p className='ranks_realtime_date'>{now.toLocaleDateString()} 기준</p>
          <div className='ranks_realtime_contents_container'>
            {bestList.map((list, i) => {
              return <ShopitemContents
                key={i}
                shopitemList={list}
                index={i + 1}
                best={true}
              />
            })}
          </div>
        </div>
      );
    } else {
      return (

        <>
          <div className='ranks_alltime_category_wrap'>
            <div className='ranks_alltime_category_container'>
              <div className='ranks_alltime_category_box'>
                <nav className='ranks_alltime_category_nav'>
                  <ShopcateCategoryAll
                    getCategoryItem={getCategoryItem}
                    handleClick={handleCategoryClick}
                    activeBtn={activeBtn}
                  />
                  {
                    categoryList.map((list,idx) =>
                      <ShopcateCategoryItem
                        key={idx}
                        category_name={list.category_name}
                        category_id={list.category_id}
                        getCategoryItem={getCategoryItem}
                        handleClick={handleCategoryClick}
                        activeBtn={activeBtn}
                      />
                    )
                  }
                </nav>
              </div>
            </div>
          </div>
          <div className='ranks_alltime_contents_wrap'>
            <div className='ranks_alltime_contents_container'>
              {bestList.map((list, i) => {
                return <ShopitemContents
                  key={i}
                  shopitemList={list}
                  index={i + 1}
                  best={true}
                />
              })}
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <div className='ranks_section'>
      <div className='ranks_btns_wrap'>
        <button className={`ranks_btns ${active ? 'rank_btn_active' : ''}`} onClick={(e) => { handleClick(e) }} id='realtime'>실시간 베스트</button>
        <button className={`ranks_btns ${active ? '' : 'rank_btn_active'}`} onClick={(e) => { handleClick(e) }} id='alltime'>역대 베스트</button>
      </div>
      {bestContainer()}
    </div>
  );
}

