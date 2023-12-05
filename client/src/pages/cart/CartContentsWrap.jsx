import { useState } from 'react';
import CartContentsContainer from './components/CartContents/CartContentsContainer';
import CartContentCoupon from './components/CartContents/CartContentsCouponWrap';
import CartContentItemWrap from './components/CartContents/CartContentsItemWrap';
import CartContentsSimilarWrap from './components/CartContents/CartContentsSimilarWrap';
import CartContentHeaderWrap from './components/CartContents/CartContentsHeaderWrap';

export default function CartContentsWrap({allCheckedHandler,checkedItems,checkList,checkedItemHandler,cartList,removeCart,getQty}){
  return(
    <div className='cart_contents_wrap'>
      <CartContentsContainer>
        <CartContentHeaderWrap
        allCheckedHandler={allCheckedHandler}
        checkedItems={checkedItems}
        checkList={checkList}
        removeCart={removeCart}
        />
        {/* <CartContentCoupon/> */}
        <CartContentItemWrap
        checkedItemHandler={checkedItemHandler}
        checkedItems={checkedItems}
        cartList={cartList}
        removeCart={removeCart}
        getQty={getQty}
        />
        <CartContentsSimilarWrap/>
      </CartContentsContainer>
    </div>
  );
}