import CartCheckBoxWrap from './checkbox/CartCheckBoxWrap';

export default function CartContentHeader(){
  return(
    <div className='cart_contents_header_wrap'>
      <span className='cart_contents_header_left'>
        <CartCheckBoxWrap/>
      </span>
      <span className='cart_contents_header_right'>
        <button className='cart_contents_header_remove_btn' type='button'>
          선택삭제
        </button>
      </span>
    </div>
  );
}