import React from 'react';
import { FaCheck } from 'react-icons/fa6';

export default function OrdersAgreementWrap({ paytype,base,setBase }) {
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
          <div className='orders_siderbar_agreement_other_wrap'>
            <div className='orders_siderbar_agreement_other_container'>
              <span></span>
            </div>
            <div className='orders_siderbar_agreement_other_container'>
              <span></span>
            </div>
            <div className='orders_siderbar_agreement_other_agree'>
            본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.
            </div>
            <div className='orders_siderbar_agreement_other_responsibility'>

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

