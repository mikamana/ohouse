import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import OrdersProductWrap from "./components/OrdersProductWrap";
import OhouseDeliveryIcon from "./components/OhouseDeliveryIcon";
import OrdersPaymentDetail from "./components/OrdersPaymentDetail";
import axios from "axios";
import { getUser } from "../utill/sessionStorage";
import { useNavigate } from "react-router-dom";

import OrdersAdressBtn from "./components/OrdersAdressBtn";

export default function OrderFormWrap({ orderList, form, setForm }) {
  const userInfo = getUser();
  const [display, setDisplay] = useState({ "mailbox": "order_invisible", "requestbox": "request_invisible" });
  const [base, setBase] = useState(false);
  const [length, setLength] = useState(0);
  const [paytype, setPaytype] = useState('card');
  const zonecodeBox = useRef(null);
  const mainAdressBox = useRef(null);
  function isFocus(e) {
    const parent = e.target.parentNode
    parent.classList.add('active')
  }

  function isBlur(e) {
    const parent = e.target.parentNode
    parent.classList.remove('active')
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (e.target.name === 'reciever_request') {
      const letters = e.target.value.split("");
      setLength(letters.length < 51 ? letters.length : 50)
    }
    if (e.target.value.length < 1) {
      const parent = e.target.parentNode
      parent.classList.add('valcheck')
    } else {
      const parent = e.target.parentNode
      parent.classList.remove('valcheck')
    }
  }
  const selectChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (e.target.value !== 'selftype' && e.target.name === 'orderer_mail') {
      setDisplay({ ...display, mailbox: "order_invisible" })
      setForm({ ...form, [name]: value, orderer_mail_self: '' })
      e.target.classList.remove('valcheck')
    }
    else if (e.target.value !== 'selftype' && e.target.name === 'reciever_request') {
      setDisplay({ ...display, requestbox: "request_invisible" })
    }
    else if (e.target.value === 'selftype' && e.target.name === 'orderer_mail') {
      setDisplay({ ...display, mailbox: '' })
      setForm({ ...form, orderer_mail: 'selftype', orderer_mail_self: '' });
    }
    else if (e.target.value === 'selftype' && e.target.name === 'reciever_request') {
      setDisplay({ ...display, requestbox: '' })
      setForm({ ...form, reciever_request: '' });
    }

  }
  const handlePayType = (e) => {
    setPaytype(e.currentTarget.value)
    if(e.currentTarget.value === 'card'){
      setForm({...form,payment:e.currentTarget.value})

    }else{
      setForm({...form,payment:e.currentTarget.value,card_bank:''})
    }
    e.currentTarget.parentNode.parentNode.childNodes.forEach((btn) => {
      btn.classList.remove('selected')
    })
    e.currentTarget.parentNode.classList.add('selected')
  }
  /*   const selectPhone = (e) => {
      let { value } = e.target;
      setPhead(value)
    } */

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.id) {
      return navigate('/login')
    }
  }, [])
  
  const handleClick = (e)=>{
    setForm({...form,reciever_name:form.orderer_name,reciever_pbody:form.orderer_pbody})
  }

  return (
    <div className="orders_form_wrap">
      <h1 className="orders_form_title">주문/결제</h1>
      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">주문자</h2>
        </div>
        <div className="orders_form_box_input_wrap">
          <div className="orders_form_box_input_title">이름</div>
          <div className="orders_form_box_input_contents_wrap">
            <div className="orders_form_box_input_contents_container">
              <input className="orders_form_box_input" name="orderer_name" value={form.orderer_name ? form.orderer_name : ""} maxLength={10} onChange={handleChange} onFocus={isFocus} onBlur={isBlur} />
              <div></div>
            </div>
          </div>
        </div>

        <div className="orders_form_box_input_wrap">
          <div className="orders_form_box_input_title">이메일</div>
          <div className="orders_form_box_input_contents_wrap">
            <div className="orders_form_box_input_contents_email_container">
              <div className="orders_form_box_input_contents_box_email_id">
                <div className="orders_form_box_input_contents_container">
                  <input className="orders_form_box_input" name="orderer_id" value={form.orderer_id ? form.orderer_id : ""} maxLength={20} onChange={handleChange} onFocus={isFocus} onBlur={isBlur} />
                  <div></div>
                </div>
                <span className="orders_form_box_input_contents_box_email_span">@</span>
              </div>
              <div className="orders_form_box_input_contents_box_email_mail">
                <div className={`orders_form_box_input_contents_box_email_mail_self_input ${display.mailbox}`}>
                  <input className="orders_form_box_input" name="orderer_mail_self" value={form.orderer_mail_self ? form.orderer_mail_self : ""} maxLength={20} onChange={handleChange} onFocus={isFocus} onBlur={isBlur} />
                </div>
                <div className="orders_form_box_input_contents_box_email_mail_select_box">
                  <span className="orders_form_box_input_contents_box_email_mail_select_box_downarrow"><IoMdArrowDropdown /></span>
                  <select className="orders_form_box_input_contents_box_email_mail_select" name="orderer_mail" id="orderer_mail" onChange={selectChange}>
                    <option value="default">선택해주세요</option>
                    <option value="naver.com">naver.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="daum.net">daum.net</option>
                    <option value="gmail.net">gmail.com</option>
                    <option value="nate.net">nate.com</option>
                    <option value="hotmail.net">hotmail.com</option>
                    <option value="outlook.net">outlook.com</option>
                    <option value="icloud.net">icloud.com</option>
                    <option value="selftype">직접 입력</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="orders_form_box_input_wrap">
          <div className="orders_form_box_input_title">전화번호</div>
          <div className="orders_form_box_input_contents_wrap">
            <div className="orders_form_box_input_contents_phone_container">
              <div className="orders_form_box_input_contents_box_phone_head_wrap">
                <div className="orders_form_box_input_contents_box_phone_head_box">
                  <span className="orders_form_box_input_contents_box_email_mail_select_box_downarrow"><IoMdArrowDropdown /></span>
                  <select className="orders_form_box_input_contents_box_phone_head" name="orderer_phead" id="orderer_phead" onChange={selectChange}>
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                  </select>
                </div>
              </div>
              <div className="orders_form_box_input_contents_box_phone_body_wrap">
                <input className="orders_form_box_input_phone" name="orderer_pbody" value={form.orderer_pbody ? form.orderer_pbody : ""} maxLength={8} onChange={handleChange} onFocus={isFocus} onBlur={isBlur} />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">배송지</h2>
          <button type="button" className="orders_form_box_same_btn" onClick={(e)=>handleClick(e)}>
            위와 동일하게 채우기
          </button>
        </div>
        <div className="orders_form_box_input_wrap">
          <div className="orders_form_box_input_title">배송지명</div>
          <div className="orders_form_box_input_contents_wrap">
            <div className="orders_form_box_input_contents_container">
              <input className="orders_form_box_input" name="reciever_place" value={form.reciever_place ? form.reciever_place : ""} maxLength={10} onChange={handleChange} onFocus={isFocus} onBlur={isBlur} />
              <div></div>
            </div>
          </div>
        </div>

        <div className="orders_form_box_input_wrap">
          <div className="orders_form_box_input_title">받는 사람</div>
          <div className="orders_form_box_input_contents_wrap">
            <div className="orders_form_box_input_contents_container">
              <input className="orders_form_box_input" name="reciever_name" value={form.reciever_name ? form.reciever_name : ""} maxLength={10} onChange={handleChange} onFocus={isFocus} onBlur={isBlur} />
              <div></div>
            </div>
          </div>
        </div>

        <div className="orders_form_box_input_wrap">
          <div className="orders_form_box_input_title">전화번호</div>
          <div className="orders_form_box_input_contents_wrap">
            <div className="orders_form_box_input_contents_phone_container">
              <div className="orders_form_box_input_contents_box_phone_head_wrap">
                <div className="orders_form_box_input_contents_box_phone_head_box">
                  <span className="orders_form_box_input_contents_box_email_mail_select_box_downarrow"><IoMdArrowDropdown /></span>
                  <select className="orders_form_box_input_contents_box_phone_head" name="reciever_phead" id="reciever_phead" onChange={selectChange}>
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                  </select>
                </div>
              </div>
              <div className="orders_form_box_input_contents_box_phone_body_wrap">
                <input className="orders_form_box_input_phone" name="reciever_pbody" value={form.reciever_pbody ? form.reciever_pbody : ""} maxLength={8} onChange={handleChange} onFocus={isFocus} onBlur={isBlur} />
              </div>
            </div>
          </div>
        </div>
        <div className="orders_form_box_input_wrap">
          <div className="orders_form_box_input_title">주소</div>
          <div className="orders_form_box_input_contents_wrap">
            <div className="orders_form_box_input_contents_address_container">
              <div className="orders_form_box_input_contents_address_number_wrap">
                <OrdersAdressBtn
                setForm={setForm}
                form={form}
                zonecodeBox={zonecodeBox}
                mainAdressBox={mainAdressBox}
                />
                {/* <button className="orders_form_box_input_contents_address_search_btn" type="button" onClick={()=>()}>주소찾기</button> */}
                <div className="orders_form_box_input_contents_address_number_container">
                  <div className="orders_form_box_input_contents_address_number_box" ref={zonecodeBox}>
                    <input disabled className="orders_form_box_input_contents_address_number" type="text" name="reciever_address_zonecode" id="reciever_address_zonecode" value={form.reciever_address_zonecode ? form.reciever_address_zonecode : ""}/>
                  </div>
                </div>
              </div>
              <div className="orders_form_box_input_contents_address_title_wrap">
                <div className="orders_form_box_input_contents_address_title_container" ref={mainAdressBox}>
                  <input type="text" disabled className="orders_form_box_input_contents_address_title" name="reciever_address_main" id="reciever_address_main" value={form.reciever_address_main ? form.reciever_address_main : ""}/>
                </div>
              </div>
              <div className="orders_form_box_input_contents_address_detail_wrap">
                <input placeholder="상세주소 입력" name="reciever_address_detail" type="text" className="orders_form_box_input_contents_address_detail" value={form.reciever_address_detail ? form.reciever_address_detail : ""} maxLength={20} onChange={handleChange} onFocus={isFocus} onBlur={isBlur} />
              </div>
            </div>
          </div>
        </div>
        <div className="orders_form_box_checkbox_wrap">
          <label className="orders_form_box_checkbox_label">
            <div className={`orders_form_box_checkbox_container ${base ? 'checkbox_active' : ''}`}>
              <div className={`orders_form_box_checkbox_box ${base ? 'checkbox_active' : ''}`}>
                <FaCheck className="orders_form_box_checkbox_span" />
              </div>
              <input className="orders_form_box_checkbox" type="checkbox" checked={base} onChange={(e) => setBase(e.target.checked)} />
            </div>
          </label>
          <span className="orders_form_box_checkbox_label_span">기본 배송지로 저장</span>
        </div>
        <div className="orders_form_box_delivery_request_wrap">
          <div className={`orders_form_box_delivery_request_custom_container ${display.requestbox}`}>
            <div className="orders_form_box_delivery_request_custom_container_input_box">
              <input placeholder="배송 요청사항을 입력해주세요." name="reciever_request" type="text" className="orders_form_box_input_contents_self_delivery_request" value={form.reciever_request ? form.reciever_request : ""} maxLength={50} onChange={handleChange} onFocus={isFocus} onBlur={isBlur} />
            </div>
            <div className="orders_form_box_delivery_request_custom_container_span_box">
              <span className="orders_form_box_delivery_request_custom_container_span_left"></span>
              <span className="orders_form_box_delivery_request_custom_container_span_right">{length}/50</span>
            </div>
          </div>
          <div className="orders_form_box_delivery_request_container">
            <span className="orders_form_box_delivery_request_span"><IoMdArrowDropdown /></span>
            <select className="orders_form_box_delivery_request" name="reciever_request" id="reciever_request" onChange={selectChange}>
              <option value="">배송시 요청사항을 선택해주세요</option>
              <option value="부재시 문앞에 놓아주세요">부재시 문앞에 놓아주세요</option>
              <option value="배송전에 미리 연락주세요">배송전에 미리 연락주세요</option>
              <option value="부재시 경비실에 맡겨주세요">부재시 경비실에 맡겨주세요</option>
              <option value="부재시 전화주시거나 문자 남겨 주세요">부재시 전화주시거나 문자 남겨 주세요</option>
              <option value="selftype">직접 입력</option>
            </select>
          </div>
        </div>
      </div>



      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">주문상품</h2>
          <p className="orders_form_box_title_product_count">
            <span className="orders_form_box_title_product_count_span">
              {orderList.length}건
            </span>
          </p>
        </div>
        {
          orderList.map(list =>
            <OrdersProductWrap
              brand_name={list.brand_name}
              product_image={list.product_image}
              product_name={list.product_name}
              sale_price={list.sale_price}
              qty={list.qty}
              key={list.order_id}
              ts={list.delivery_type}
            />
          )
        }
        {/* 오늘출발 시 시간제한도 출력해야함 */}
      </div>

      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">장바구니 쿠폰</h2>
          <p className="orders_form_box_title_cart_coupon">
            사용 가능한 쿠폰이 없어요.
          </p>
        </div>
      </div>

      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">포인트</h2>
        </div>
        <div className="orders_form_box_point_wrap">
          <div className="orders_form_box_point_container">
            <div className="orders_form_box_point_box">
              <input placeholder="0" type="tel" max="100000000" className="orders_form_box_point" value="0" disabled={true} />
            </div>
            <button disabled type="button" className="orders_form_box_point_btn">
              전액 사용
            </button>
          </div>
          <div className="orders_form_box_point_usable">
            사용 가능 포인트
            <span className="orders_form_box_point_usable_span"> 0 P</span>
          </div>
        </div>
      </div>

      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">결제수단</h2>
        </div>
        <div className="orders_form_box_payment_wrap">
          <div className="orders_form_box_payment_container">
            <div className="orders_form_box_payment_box">

              <div className="orders_form_box_payment selected">
                <button className="orders_form_box_payment_btn" onClick={(e) => handlePayType(e)} value='card' type="button" title="">
                  <span className="orders_form_box_payment_span">카드</span>
                  <img className="orders_form_box_payment_img" src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311599350498640.png?w=72&h=72&c=c" alt="" />
                </button>
              </div>
              <div className="orders_form_box_payment">
                <button className="orders_form_box_payment_btn" onClick={(e) => handlePayType(e)} value='bankbook' type="button" title="">
                  <span className="orders_form_box_payment_span">무통장입금</span>
                  <img className="orders_form_box_payment_img" src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311600677152970.png?w=72&h=72&c=c" alt="" />
                </button>
              </div>
              <div className="orders_form_box_payment">
                <button className="orders_form_box_payment_btn" onClick={(e) => handlePayType(e)} value='kakao' type="button" title="">
                  <span className="orders_form_box_payment_span">카카오페이</span>
                  <img className="orders_form_box_payment_img" src="https://image.ohou.se/i/bucketplace-v2-development/pg/img_kakaopay.png?w=72&h=72&c=c" alt="" />
                  <span className="orders_form_box_payment_sale_span">1천원 즉시할인</span>
                </button>
              </div>
              <div className="orders_form_box_payment">
                <button className="orders_form_box_payment_btn" onClick={(e) => handlePayType(e)} value='naver' type="button" title="">
                  <span className="orders_form_box_payment_span">네이버페이</span>
                  <img className="orders_form_box_payment_img" src="https://image.ohou.se/i/bucketplace-v2-development/pg/img_naver.png?w=72&h=72&c=c" alt="" />
                  <span className="orders_form_box_payment_sale_span">최대2.5%적립</span>
                </button>
              </div>
              <div className="orders_form_box_payment">
                <button className="orders_form_box_payment_btn" onClick={(e) => handlePayType(e)} value='payco' type="button" title="">
                  <span className="orders_form_box_payment_span">페이코</span>
                  <img className="orders_form_box_payment_img" src="https://image.ohou.se/i/bucketplace-v2-development/pg/img_payco.png?w=72&h=72&c=c" alt="" />
                  <span className="orders_form_box_payment_sale_span">최대 1%적립</span>
                </button>
              </div>
              <div className="orders_form_box_payment">
                <button className="orders_form_box_payment_btn" onClick={(e) => handlePayType(e)} value='toss' type="button" title="">
                  <span className="orders_form_box_payment_span">토스</span>
                  <img className="orders_form_box_payment_img" src="https://image.ohou.se/i/bucketplace-v2-development/pg/img_toss_v2.png?w=72&h=72&c=c" alt="" />
                  <span className="orders_form_box_payment_sale_span">최대2천원적립</span>
                </button>
              </div>
              <div className="orders_form_box_payment">
                <button className="orders_form_box_payment_btn" onClick={(e) => handlePayType(e)} value='phone' type="button" title="">
                  <span className="orders_form_box_payment_span">핸드폰</span>
                  <img className="orders_form_box_payment_img" src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311602265893776.png?w=72&h=72&c=c" alt="" />
                </button>
              </div>

            </div>
          </div>
          <OrdersPaymentDetail
            paytype={paytype}
            selectChange={selectChange}
          />
        </div>
      </div>

    </div>
  );
}