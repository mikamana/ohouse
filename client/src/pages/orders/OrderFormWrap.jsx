import { useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function OrderFormWrap(){
  const [display,setDisplay] = useState('order_invisible');
  const [form, setForm] = useState({"orderer_id":"", "orderer_mail":"", "pass":"", "passcheck":"", "orderer_name":""});
  const [domain, setDomain] = useState(false);

  function isFocus(e){
    const parent = e.target.parentNode
    parent.classList.add('active')
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
      </div>

      <div className="orders_form_box">
        <div className="orders_form_box_title_wrap">
          <h2 className="orders_form_box_title">배송지</h2>
        </div>
        <div className="orders_form_box_input_wrap">
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