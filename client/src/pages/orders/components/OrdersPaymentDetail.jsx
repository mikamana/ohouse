import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
export default function OrdersPaymentDetail({ paytype,selectChange }) {
  function PaymentDetail(paytype) {
    if (paytype === 'card') {
      return (
        <div className='orders_payment_type_card_wrap'>
          <div className='orders_payment_type_card_container'>
            <span className='orders_payment_type_card_span'><IoMdArrowDropdown /></span>
            <select className='orders_payment_type_card_select' name="card_bank" id="card_bank" onChange={selectChange}>
              <option value="please select">카드를 선택해주세요.</option>
              <option value="KB국민">KB국민</option>
              <option value="NH농협">NH농협</option>
              <option value="BC">BC</option>
            </select>
          </div>
          <div className='orders_payment_type_card_paytype_wrap'>
            <div className='orders_payment_type_card_paytype_container'>
              <span className='orders_payment_type_card_span'><IoMdArrowDropdown /></span>
              <select className='orders_payment_type_card_select' name="installment" id="installment" onChange={selectChange}>
                <option value="1">일시불</option>
                <option value="2">2개월</option>
                <option value="3">3개월</option>
              </select>
            </div>
          </div>
        </div>
      );
    }
    else if (paytype === 'bankbook') {
      return (
        <div className='orders_payment_type_wrap'>
          <p>- 현금으로 결제한 모든 금액은 우리은행과 채무지급보증계약을 체결하여 고객님의 안전거래를 보장하고 있습니다.</p>
          <p>- 현금영수증 발행이 필요할 경우, 결제 화면에서 정확한 발행 정보를 입력해주시기 바랍니다.</p>
        </div>
      );
    }
    else if (paytype === 'kakao') {
      return (
        <div className='orders_payment_type_wrap'>
          <p>[상시] 카카오페이 머니로 10만원 이상 결제 시 1천원 즉시할인</p>
        </div>
      );
    }
    else if (paytype === 'naver') {
      return (
        <div className='orders_payment_type_wrap'>
          <p>[상시] 충전포인트결제 1.5% + 네이버페이 기본적립 (네이버쇼핑 유입1% / 기타경로 0.1%) + 소득공제</p>
        </div>
      );
    }
    else if (paytype === 'payco') {
      return (
        <div className='orders_payment_type_wrap'>
          <p>[상시] 페이코 충전포인트로 결제 시 1% 적립(리워드 월 10,000p 한도 내)</p>
        </div>
      );
    }
    else if (paytype === 'toss') {
      return (
        <div className='orders_payment_type_wrap'>
          <p>[상시] 토스페이 생애 첫결제시 2,000원 캐시백</p>
        </div>
      );
    }
    else if (paytype === 'phone') {
      return (
        <div className='orders_payment_type_wrap'>

        </div>
      );
    }
  }
  return (
    PaymentDetail(paytype)
  );
}

