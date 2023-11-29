import  {useState}  from "react";
import OrdersAgreementWrap from "./components/OrdersAgreementWrap";

export default function OrderSidebarWrap(){
  const [base,setBase] = useState(false);
  return(
    <div className="orders_sidebar_wrap">
      <div className="orders_sidebar_container">
        <div className="orders_sidebar_box">
          <div className="orders_sidebar_total_price_wrap">
            <div className="orders_siderbar_total_price_title_wrap">
              <h2 className="orders_sidebar_total_price_title">결제금액</h2>
            </div>
            <div className="orders_sidebar_total_price_summary_wrap">
              <div className="orders_sidebar_total_price_summary_container">
                총 상품 금액
                <span className="orders_sidebar_total_price_summary_span tp_emphasis">10000원</span>
              </div>
              <div className="orders_sidebar_total_price_summary_container">
                배송비
                <span className="orders_sidebar_total_price_summary_span">0원</span>
              </div>
              <div className="orders_sidebar_total_price_summary_container">
                쿠폰 사용
                <span className="orders_sidebar_total_price_summary_span">0원</span>
              </div>
              <div className="orders_sidebar_total_price_summary_container">
                포인트 사용
                <span className="orders_sidebar_total_price_summary_span">0원</span>
              </div>
              <hr className="orders_sidebar_total_price_hr"/>
              <div className="orders_sidebar_total_price_last">
                <span className="orders_sidebar_total_price_last_title">최종 결제 금액</span>
                <span className="orders_sidebar_total_price_last_price">1,531,600 원</span>
              </div>
              <p className="orders_sidebar_total_price_point">
                <span className="orders_sidebar_total_price_point_span">1,532 P </span>
                적립 예정
              </p>
            </div>
          </div>
            <OrdersAgreementWrap
            base={base}
            setBase={setBase}
            paytype={''}
            />
        </div>
      </div>
    </div>
  );
}