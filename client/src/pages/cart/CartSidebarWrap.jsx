export default function CartSidebarsWrap(){
  return(
    <div className='cart_sidebar_wrap'>
      <div className="cart_sidebar_container">
        <div className="cart_sidebar_box">
          <div className="cart_sidebar_summary">
            <div className="cart_sidebar_summary_row">
              <div>총 상품금액</div>
              <div className="cart_sidebar_summary_row_price_box">
                <span className="cart_sidebar_price">169,370원</span>
              </div>
            </div>
            <div className="cart_sidebar_summary_row">
              <div>총 배송금액</div>
              <div className="cart_sidebar_summary_row_price_box">
                <span className="cart_sidebar_price">+ 0원</span>
              </div>
              </div>
            <div className="cart_sidebar_summary_row">
              <div>총 할인금액</div>
              <div className="cart_sidebar_summary_row_price_box">
                <span className="cart_sidebar_price">- 57,070원</span>
              </div>
              </div>
            <div className="cart_sidebar_summary_row_total">
              <div className="cart_sidebar_summary_row_total_text">결제금액</div>
              <div className="cart_sidebar_summary_row_price_box">
                <span className="cart_sidebar_total_price">112,300원</span>
              </div>
            </div>
          </div>
          <div className="cart_sidebar_order">
            <button className="cart_sidebar_order_btn">3개 상품 구매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}