import CartCheckBox from './CartCheckBox';

export default function CartCheckBoxWrap(){
  return(
  <label className='cart_contents_header_left_checkbox_container' htmlFor="allcheck">
    <CartCheckBox/>
    <span>
      <span className='cart_contents_header_caption'>모두선택</span>
    </span>
  </label>
  );
  
}