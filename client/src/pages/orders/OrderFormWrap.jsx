import { useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function OrderFormWrap(){
  const [display,setDisplay] = useState('order_invisible');
  const [form, setForm] = useState({"orderer_id":"", "orderer_mail":"", "orderer_phead":"010","orderer_pbody":"","pass":"", "passcheck":"", "orderer_name":"","reciever_name":"","reciever_place":"","reciever_phead":"010","reciever_pbody":""});
  const [domain, setDomain] = useState(false);
  const [phead,setPhead] = useState('010');

  function isFocus(e){
    const parent = e.target.parentNode
    parent.classList.add('active')
    const a = JSON.stringify({"orderer_id":"", "orderer_mail":"", "orderer_phead":"010","orderer_pbody":"","pass":"", "passcheck":"", "orderer_name":"","reciever_name":"","reciever_place":"","reciever_phead":"010","reciever_pbody":""})
    console.log(a);
  }

  function isBlur(e){
    const parent = e.target.parentNode
    parent.classList.remove('active')
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name] : value});
    console.log(form);

  }
  const selectChange= (e) => {
    let {name, value} = e.target;
    setForm({...form, [name] : value});
    setDomain(true);
    console.log(form);
    if(e.target.value === 'selftype'){
      setDisplay('')
      setForm({...form, orderer_mail : ""});
      setForm({orderer_mail:''})
    }
    else{
      setDisplay('order_invisible')
    }
  }
  const selectPhone= (e)=>{
    let {value} = e.target;
    setPhead(value)
  }

  const inputDomain = useRef(null);

  return(
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
              <input className="orders_form_box_input" name="orderer_name" value={form.orderer_name ? form.orderer_name : ""} maxLength={10} onChange={handleChange} onFocus={isFocus} onBlur={isBlur}/>
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
                <input className="orders_form_box_input" name="orderer_id" value={form.orderer_id ? form.orderer_id : ""} maxLength={20} onChange={handleChange} onFocus={isFocus} onBlur={isBlur}/>
                <div></div>
                </div>
                <span className="orders_form_box_input_contents_box_email_span">@</span>
              </div>
              <div className="orders_form_box_input_contents_box_email_mail">
                <div className={`orders_form_box_input_contents_box_email_mail_self_input ${display}`}>
                  <input className="orders_form_box_input" name="orderer_mail" value={form.orderer_mail ? form.orderer_mail : ""} maxLength={20} onChange={handleChange} onFocus={isFocus} onBlur={isBlur}/>
                </div>
                <div className="orders_form_box_input_contents_box_email_mail_select_box">
                  <span className="orders_form_box_input_contents_box_email_mail_select_box_downarrow"><IoMdArrowDropdown/></span>
                  <select className="orders_form_box_input_contents_box_email_mail_select" name="orderer_mail" onChange={selectChange} ref={inputDomain}>
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
                  <span className="orders_form_box_input_contents_box_email_mail_select_box_downarrow"><IoMdArrowDropdown/></span>
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
              <input className="orders_form_box_input_phone" name="orderer_pbody" value={form.orderer_pbody ? form.orderer_pbody : ""} maxLength={20} onChange={handleChange} onFocus={isFocus} onBlur={isBlur}/>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">배송지</h2>
        </div>
        <div className="orders_form_box_input_wrap">
          <div className="orders_form_box_input_title">배송지명</div>
          <div className="orders_form_box_input_contents_wrap">
            <div className="orders_form_box_input_contents_container">
              <input className="orders_form_box_input" name="reciever_place" value={form.reciever_place ? form.reciever_place : ""} maxLength={10} onChange={handleChange} onFocus={isFocus} onBlur={isBlur}/>
              <div></div>
            </div>
          </div>
        </div>

        <div className="orders_form_box_input_wrap">
          <div className="orders_form_box_input_title">받는 사람</div>
          <div className="orders_form_box_input_contents_wrap">
            <div className="orders_form_box_input_contents_container">
              <input className="orders_form_box_input" name="reciever_name" value={form.reciever_name ? form.reciever_name : ""} maxLength={10} onChange={handleChange} onFocus={isFocus} onBlur={isBlur}/>
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
                  <span className="orders_form_box_input_contents_box_email_mail_select_box_downarrow"><IoMdArrowDropdown/></span>
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
              <input className="orders_form_box_input_phone" name="reciever_pbody" value={form.reciever_pbody ? form.reciever_pbody : ""} maxLength={20} onChange={handleChange} onFocus={isFocus} onBlur={isBlur}/>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">주문상품</h2>
        </div>
        <div className="orders_form_box_input_wrap">
        </div>
      </div>

      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">장바구니 쿠폰</h2>
        </div>
        <div className="orders_form_box_input_wrap">
        </div>
      </div>

      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">포인트</h2>
        </div>
        <div className="orders_form_box_input_wrap">
        </div>
      </div>

      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">결제수단</h2>
        </div>
        <div className="orders_form_box_input_wrap">
        </div>
      </div>

    </div>
  );
}