import React, { useEffect, useState } from 'react';
export default function ShopitemTimeCount(props) {
  const [remain, setRemain] = useState(0);
  const tomorrow = new Date().getDate() + 1;
  const target = new Date(tomorrow);
  useEffect(() => {
    const now = new Date();
    const remain = target.getTime() - now.getTime() + (6 * 60 * 60 * 1000);
    setRemain(remain)
    const timer = setInterval(() => {
      const now = new Date();
      const remain = target.getTime() - now.getTime() + (6 * 60 * 60 * 1000);
      setRemain(remain);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="shopitem_timecount" id='countdown'>
      {props.isNew === true && <span className='shopitem_timecount_span'>오늘의 딜</span>}
      {new Date(remain).toTimeString().substring(0, 8) + ' 남음'}
      {props.isNew === true && <span>＞</span>}
    </div>
  );
}