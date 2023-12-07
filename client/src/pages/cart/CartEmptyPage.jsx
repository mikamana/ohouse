import React from 'react';
import { Link } from 'react-router-dom';

export default function CartEmptyPage() {
  return (
    <div className='cart_empty_section'>
      <div className='cart_empty_wrap'>
          <img className='cart_empty_image' src="https://image.ohou.se/i/bucketplace-v2-development/uploads/assets/163703569663018673.png" alt="장바구니가 비었습니다" />
          <Link to={'/'} className='cart_empty_link'>상품 담으러 가기</Link>
      </div>
    </div>
  );
}

