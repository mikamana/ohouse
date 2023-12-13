import React from 'react';
import '../../../css/sub/store/todaydeals/todaydeals.css'
import TodayDealsContentsWrap from './components/TodayDealsContentsWrap';
export default function TodayDeals() {
  return (
    <>
      <div className='todaydeals_section'>
        <div className='todaydeals_wrap'>
          <h1 className='todaydeals_title'></h1>
          <span className='todaydeals_span'></span>
          <TodayDealsContentsWrap/>
        </div>
      </div>
    </>
  );
}

