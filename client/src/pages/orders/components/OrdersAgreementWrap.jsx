import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";

export default function OrdersAgreementWrap({ paytype, base, setBase }) {
  const [rotateBtn1,setRotateBtn1] = useState(true);
  const [rotateBtn2,setRotateBtn2] = useState(true);
  const handleClick1 = () => {
    setRotateBtn1(!rotateBtn1);
  };
  
  const handleClick2 = () => {
    setRotateBtn2(!rotateBtn2);
  };
  function agreementType(paytype) {
    if (paytype === '') {
      return (
        <div className="orders_sidebar_agreement_wrap">
          <div tabIndex={-1}>
            <div className='orders_sidebar_agreement_all_wrap'>
              <span className='orders_sidebar_agreement_all_container'>
                <span className='orders_sidebar_agreement_all_span'>
                  <label className="orders_form_box_checkbox_agreement_label">
                    <div className={`orders_form_box_checkbox_container ${base ? 'checkbox_active' : ''}`}>
                      <div className={`orders_form_box_checkbox_box ${base ? 'checkbox_active' : ''}`}>
                        <FaCheck className="orders_form_box_checkbox_span" />
                      </div>
                      <input className="orders_form_box_checkbox" type="checkbox" checked={base} onChange={(e) => setBase(e.target.checked)} />
                    </div>
                  </label>
                  <span className="orders_form_box_checkbox_label_agreement_span">아래 내용에 모두 동의합니다. (필수)</span>
                </span>
              </span>
            </div>
          </div>
          <div className='orders_sidebar_agreement_check_validation'>

          </div>
          <div className='orders_sidebar_agreement_other_wrap'>
            <div className='orders_sidebar_agreement_other_container'>
              <span className='orders_sidebar_agreement_other_box'>
                <div className={`orders_form_box_checkbox_container ${base ? 'checkbox_active' : ''}`}>
                  <div className={`orders_form_box_checkbox_box ${base ? 'checkbox_active' : ''}`}>
                    <FaCheck className="orders_form_box_checkbox_span" />
                  </div>
                  <input className="orders_form_box_checkbox" type="checkbox" checked={base} onChange={(e) => setBase(e.target.checked)} />
                </div>
                <span className='orders_sidebar_agreement_other_box_span'  onClick={handleClick1}>
                  <span className='orders_sidebar_agreement_other_box_span_text'>개인정보 수집 이용 및 제 3자 제공 동의 (필수)</span>
                  <span className={rotateBtn1 ? `orders_sidebar_agreement_other_box_span_downarrow_container` : `orders_sidebar_agreement_other_box_span_downarrow_container rotate_active`}>
                    <span className='orders_sidebar_agreement_other_box_span_downarrow_box'><IoIosArrowDown/></span>
                  </span>
                </span>
              </span>
              <div className={rotateBtn1 ? 'orders_sidebar_agreement_privacy_agree_wrap' : 'orders_sidebar_agreement_privacy_agree_wrap open_agree' }>
                <div className='orders_sidebar_agreement_agree_wrap'>
                  <div className='orders_sidebar_agreement_agree_container'>
                    <div className='orders_sidebar_agreement_agree_box'>
                      <span className='orders_sidebar_agreement_agree_span'>
                        <span className='orders_sidebar_agreement_agree_text_wrap'>
                          <span className='orders_sidebar_agreement_agree_text'>개인정보 제 3자 제공</span>
                        </span>
                        <button className='orders_sidebar_agreement_agree_btn'>약관보기</button>
                      </span>
                    </div>
                    <div className='orders_sidebar_agreement_agree_box'>
                      <span className='orders_sidebar_agreement_agree_span'>
                        <span className='orders_sidebar_agreement_agree_text_wrap'>
                          <span className='orders_sidebar_agreement_agree_text'>개인정보 수집 및 이용</span>
                        </span>
                        <button className='orders_sidebar_agreement_agree_btn'>약관보기</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='orders_sidebar_agreement_other_container'>
              <span className='orders_sidebar_agreement_other_box'>
                <div className={`orders_form_box_checkbox_container ${base ? 'checkbox_active' : ''}`}>
                  <div className={`orders_form_box_checkbox_box ${base ? 'checkbox_active' : ''}`}>
                    <FaCheck className="orders_form_box_checkbox_span" />
                  </div>
                  <input className="orders_form_box_checkbox" type="checkbox" checked={base} onChange={(e) => setBase(e.target.checked)} />
                </div>
                <span className='orders_sidebar_agreement_other_box_span' onClick={handleClick2}>
                  <span className='orders_sidebar_agreement_other_box_span_text'>결제대행 서비스 이용약관 동의 (필수)</span>
                  <span className={rotateBtn2 ? `orders_sidebar_agreement_other_box_span_downarrow_container` : `orders_sidebar_agreement_other_box_span_downarrow_container rotate_active`}>
                    <span className='orders_sidebar_agreement_other_box_span_downarrow_box'><IoIosArrowDown/></span>
                  </span>
                </span>
              </span>
              <div className={rotateBtn2 ? 'orders_sidebar_agreement_pay_agree_wrap' : 'orders_sidebar_agreement_pay_agree_wrap open_agree' }>
                <div className='orders_sidebar_agreement_agree_wrap'>
                  <div className='orders_sidebar_agreement_agree_container'>
                    <div className='orders_sidebar_agreement_agree_box'>
                      <span className='orders_sidebar_agreement_agree_span'>
                        <span className='orders_sidebar_agreement_agree_text_wrap'>
                          <span className='orders_sidebar_agreement_agree_dot'>&#183;</span>
                          <span className='orders_sidebar_agreement_agree_text'>토스페이먼츠㈜</span>
                        </span>
                        <button className='orders_sidebar_agreement_agree_btn'>약관보기</button>
                      </span>
                    </div>
                    <div className='orders_sidebar_agreement_agree_box'>
                      <span className='orders_sidebar_agreement_agree_span'>
                        <span className='orders_sidebar_agreement_agree_text_wrap'>
                          <span className='orders_sidebar_agreement_agree_dot'>&#183;</span>
                          <span className='orders_sidebar_agreement_agree_text'>엔에이치엔한국사이버결제㈜</span>
                        </span>
                        <button className='orders_sidebar_agreement_agree_btn'>약관보기</button>
                      </span>
                    </div>
                    <div className='orders_sidebar_agreement_agree_box'>
                      <span className='orders_sidebar_agreement_agree_span'>
                        <span className='orders_sidebar_agreement_agree_text_wrap'>
                          <span className='orders_sidebar_agreement_agree_dot'>&#183;</span>
                          <span className='orders_sidebar_agreement_agree_text'>NICE페이먼츠㈜</span>
                        </span>
                        <button className='orders_sidebar_agreement_agree_btn'>약관보기</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='orders_sidebar_agreement_other_agree'>
              본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.
            </div>
            <div className='orders_sidebar_agreement_other_responsibility'>
            (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다 (단, ㈜버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다).
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>

        </div>

      );
    }
  }

  return (
    agreementType(paytype)
  );
}

