import CartCheckBoxWrap from './checkbox/CartCheckBoxWrap';

export default function CartContentHeaderWrap({allCheckedHandler,checkedItems,checkList,removeCart}){
  return(
    <div className='cart_contents_header_wrap'>
      <span className='cart_contents_header_left'>
        <CartCheckBoxWrap
        allCheckedHandler={allCheckedHandler}
        checkedItems={checkedItems}
        checkList={checkList}
        />
      </span>
      <span className='cart_contents_header_right'>
        <button className='cart_contents_header_remove_btn' type='button' onClick={removeCart}>
          선택삭제
        </button>
      </span>
    </div>
  );
}