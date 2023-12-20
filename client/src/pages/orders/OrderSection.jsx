import OrderFormWrap from "./OrderFormWrap"
import OrderSidebarWrap from "./OrderSidebarWrap";
import '../../css/orders/orders.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getUser } from "../utill/sessionStorage";
import { useNavigate } from "react-router-dom";

export default function OrderSection(){
  const userInfo = getUser();
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);
  const [orderItem, setOrderItem] = useState([])
  const [payForm,setPayForm] = useState([]);
  const [validation,setValidation] = useState(false);
  const [form, setForm] = useState({ "orderer_id": "", "orderer_mail": "default","orderer_mail_self":"", "orderer_phead": "010", "orderer_pbody": "", "orderer_name": "", "reciever_name": "", "reciever_place": "", "reciever_phead": "010", "reciever_pbody": "","reciever_address_zonecode": "","reciever_address_main":"", "reciever_address_detail": "", "reciever_request": "","payment": "card","card_bank":"please select","installment":"일시불"});
  const ol = [];
  const oi = [];
  const checkboxVal = useRef()
  useEffect(()=>{
    if(!userInfo){
      return navigate('/login')
    }
    setTimeout(() => {
      axios.get(`http://127.0.0.1:8000/orders/${userInfo.id}`)
      .then(result=>
        {setOrderList(result.data)
      }
      )
    }, 300);
  },[])
  if(!userInfo){
    return navigate('/login')
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(form.orderer_name.length < 1){
      e.target.orderer_name.parentNode.classList.add('valcheck')
      return
    }
    if(form.orderer_id.length < 1){
      e.target.orderer_id.parentNode.classList.add('valcheck')
      return
    }
    if(form.orderer_mail === 'default'){
      e.target.orderer_mail.classList.add('valcheck')
      return
    }
    if(form.orderer_pbody.length < 1){
      e.target.orderer_pbody.parentNode.classList.add('valcheck')
      return
    }
    if(form.reciever_place.length < 1){
      e.target.reciever_place.parentNode.classList.add('valcheck')
      return
    }
    if(form.reciever_name.length < 1){
      e.target.reciever_name.parentNode.classList.add('valcheck')
      return
    }
    if(form.reciever_pbody.length < 7){
      e.target.reciever_pbody.parentNode.classList.add('valcheck')
      return
    }
    if(form.reciever_address_zonecode.length < 1){
      e.target.reciever_address_zonecode.parentNode.classList.add('valcheck')
      e.target.reciever_address_main.parentNode.classList.add('valcheck')
      return
    }
    if(form.payment === 'card'){
      if(form.card_bank === 'please select'){
        alert('카드를 선택 해 주세요')
        return
      }
    }
    if(!validation){
      checkboxVal.current.classList.add('open')
      return
    }
      axios.post(`http://127.0.0.1:8000/pay/${userInfo.id}`,[form,orderList])
      .then(result=>{
        if(result.status === 204){
          alert('결제가 완료되었습니다.')
          const checkConfirm = window.confirm('주문 배송 내역 페이지로 이동하시겠습니까? 거부하신다면 홈으로 이동합니다.')
          if(checkConfirm){
            navigate('/users/myshop')
          }
          else{
            navigate('/')
          }
          
          window.location.reload();
        }
        else{
          alert('결제가 실패하였습니다.')
        }
      })
  }

  return(
    <div className="orders_section inner">
      <form action={`pay/${userInfo.id}`} method='post' onSubmit={e=>{handleSubmit(e)}} className="orders_section_container">
        <OrderFormWrap
        orderList={orderList}
        form={form}
        setForm={setForm}
        />
        <OrderSidebarWrap
        orderList={orderList}
        setValidation={setValidation}
        checkboxVal={checkboxVal}
        />
      </form>
    </div>
  );
}