import OrderFormWrap from "./OrderFormWrap"
import OrderSidebarWrap from "./OrderSidebarWrap";
import '../../css/orders/orders.css'
import { useEffect, useState } from "react";
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
  const [form, setForm] = useState({ "orderer_id": "", "orderer_mail": "default","orderer_mail_self":"", "orderer_phead": "010", "orderer_pbody": "", "orderer_name": "", "reciever_name": "", "reciever_place": "", "reciever_phead": "010", "reciever_pbody": "", "reciever_address_detail": "", "reciever_request": "" });
  const ol = [];
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/orders/${userInfo.id}`)
    .then(result=>{
      setOrderList(result.data)
      result.data.map((item) => {
        ol.push(item.order_id);
      })
      setOrderItem(ol);
    })
  },[])
  if(!userInfo){
    return navigate('/login')
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(form.orderer_name.length < 1){
      e.target.orderer_name.parentNode.classList.add('valcheck')
    }
    if(form.orderer_id.length < 1){
      e.target.orderer_id.parentNode.classList.add('valcheck')
    }
    if(form.orderer_pbody.length < 1){
      e.target.orderer_pbody.parentNode.classList.add('valcheck')
    }
    if(form.orderer_mail === 'default'){
      e.target.orderer_mail.classList.add('valcheck')
    }
    if(form.reciever_place.length < 1){
      e.target.reciever_place.parentNode.classList.add('valcheck')
    }
    if(form.reciever_name.length < 1){
      e.target.reciever_name.parentNode.classList.add('valcheck')
    }
    if(form.reciever_pbody.length < 1){
      e.target.reciever_pbody.parentNode.classList.add('valcheck')
    }
    console.log(form);
      axios.post(`http://127.0.0.1:8000/pay/${userInfo.id}`,[form,orderList])
      .then(result=>{})
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
        />
      </form>
    </div>
  );
}