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
                <span className='orders_sidebar_agreement_other_box_span'>
                  <span className='orders_sidebar_agreement_other_box_span_text'>개인정보 수집 이용 및 제 3자 제공 동의 (필수)</span>
                  <span className={rotateBtn1 ? `orders_sidebar_agreement_other_box_span_downarrow_container` : `orders_sidebar_agreement_other_box_span_downarrow_container rotate_active`}>
                    <span className='orders_sidebar_agreement_other_box_span_downarrow_box'><IoIosArrowDown onClick={handleClick1}/></span>
                  </span>
                </span>
              </span>
            </div>
            <div className='orders_sidebar_agreement_other_container'>
              <span className='orders_sidebar_agreement_other_box'>
                <div className={`orders_form_box_checkbox_container ${base ? 'checkbox_active' : ''}`}>
                  <div className={`orders_form_box_checkbox_box ${base ? 'checkbox_active' : ''}`}>
                    <FaCheck className="orders_form_box_checkbox_span" />
                  </div>
                  <input className="orders_form_box_checkbox" type="checkbox" checked={base} onChange={(e) => setBase(e.target.checked)} />
                </div>
                <span className='orders_sidebar_agreement_other_box_span'>
                  <span className='orders_sidebar_agreement_other_box_span_text'>결제대행 서비스 이용약관 동의 (필수)</span>
                  <span className={rotateBtn2 ? `orders_sidebar_agreement_other_box_span_downarrow_container` : `orders_sidebar_agreement_other_box_span_downarrow_container rotate_active`}>
                    <span className='orders_sidebar_agreement_other_box_span_downarrow_box'><IoIosArrowDown onClick={handleClick2}/></span>
                  </span>
                </span>
              </span>
            </div>
            <div className='orders_sidebar_agreement_other_agree'>
              본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.
            </div>
            <div className='orders_sidebar_agreement_other_responsibility'>

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

