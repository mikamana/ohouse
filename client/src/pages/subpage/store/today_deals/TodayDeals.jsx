import React from 'react';
import '../../../../css/sub/store/todaydeals/todaydeals.css'
import TodayDealsContentsWrap from './components/TodayDealsContentsWrap';
export default function TodayDeals() {
  return (
      <div className='todaydeals_section'>
        <div className='todaydeals_wrap'>
          <h1 className='todaydeals_title'>오늘의딜</h1>
          <span className='todaydeals_span'>매일 새로운 특가, 기간 한정 최저가 도전</span>
          <TodayDealsContentsWrap/>
        </div>
      </div>
  );
}

