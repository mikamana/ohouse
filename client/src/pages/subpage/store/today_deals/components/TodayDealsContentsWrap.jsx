import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import ShopitemContents from '../../../../main/shopitem/ShopitemContents';
export default function TodayDealsContentsWrap() {
  const observeLine = useRef(null)
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  let page = useRef(1)
  const callback = (entries, observer) => {
    if (!entries[0].isIntersecting) return
    if (loading) return
    getItem();
    page.current += 1;
  }

  const observer = new IntersectionObserver(callback);

  function getItem() {
    setLoading(true)
    axios.get(`http://127.0.0.1:8000/product/todaydeals/${page.current}`)
      .then(result => {
        setList(prev => [...prev, ...result.data])
      })
    setLoading(false)
  }
  useEffect(() => {
    if (observeLine.current) {
      observer.observe(observeLine.current)
    }
  }, [])
  return (
    <div className='todaydeals_contents_wrap'>
      {
        list.map((list, idx) =>
          <ShopitemContents
            shopitemList={list}
            timecount={true}
            key={idx}
          />
        )
      }
      <div className='observe_line' ref={observeLine}></div>
    </div>
  );
}

