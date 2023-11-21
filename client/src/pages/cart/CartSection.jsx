import React from "react";
import CartContentsWrap from './CartContentsWrap';
import CartSidebarsWrap from './CartSidebarWrap';
export default function CartSection(){
  return(
    <div className='cart_section sub_inner'>
      <div className='cart_section_container'>
        <CartContentsWrap/>
        <CartSidebarsWrap/>
      </div>
    </div>
  );
}