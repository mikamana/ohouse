export default function CartCheckBox({id,checkedItemHandler,checked}){
  const checkHandled = (e) => {
    console.log('checkHandled')
    console.log(checked);
    console.log(e.target.id);
    checkedItemHandler(e.target.id, e.target.checked);
  }
  return(
    <div className='cart_contents_header_left_checkbox_wrap'>
      <input className='cart_contents_checkbox' id={id} type="checkbox" checked={checked} onChange={checkHandled}/>
      <span className='cart_contents_checkbox_span hover_color'>
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="cart_contents_checkbox_span_svg hover_color"><path fill="currentColor" d="M6.185 10.247l7.079-7.297 1.435 1.393-8.443 8.703L1.3 8.432l1.363-1.464z"></path></svg>
      </span>
    </div>
  );
  
}