import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderListSort from './OrderListSort';
import { getUser } from './../utill/sessionStorage';
import '../../css/user/orderlist.css';
import { Link } from 'react-router-dom';

export default function OrderList() {
  const userInfo = getUser();
  const menulist = ["결제완료", "배송준비", "배송중", "배송완료", "구매확정"]
  const [order, setOrder] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [sortList, setSortList] = useState('desc');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/users/myshop/${userInfo.id}/${sortList}`)
      .then((result) => {
        setOrder(result.data);
      })
      .catch(console.err)

    axios.get(`http://127.0.0.1:8000/users/myshop/${userInfo.id}`)
      .then((result) => {
        setOrderList(result.data);
      })
      .catch(console.err)
  }, [sortList])

  const getSort = (e) => {
    setSortList(e);
  }

  const showDeliveryType = (type) => {
    if (type === 'td') {
      return '당일출발 배송';
    } else if (type === 'od') {
      return '오늘의집 배송';
    } else if (type === 'fd') {
      return '빠른가전 배송';
    } else {
      return '일반택배';
    }
  };

  return (
    <>
      <div className="orderlist_section inner">
        <div className="orderlist_menubox">
          {menulist && menulist.map((menu) =>
            <div key={menu}>
              <p style={{ fontWeight: menu === "결제완료" ? 'bold' : 'normal' }}>{menu}</p>
              <span>{menu === "결제완료" ? order.length : 0}</span>
            </div>
          )}
        </div>
        <div className="orderlist_contentwrap">
          <OrderListSort
            getSort={getSort}
          />
          {order && order.map((orders, idx) =>
            <div key={idx} className="orderlist_content">
              <div className="orderlist_content_title">
                <p>{orders.common_id}</p>
                <p>{orders.paydate}</p>
              </div>
              {orderList && orderList.map((order, i) => {
                if (orders.common_id === order.common_id) {
                  return <Link key={i} className="orderlist_content_productinfo" to={`/production/${order.pid}`}>
                    <img src={order.product_image} alt="상품이미지" />
                    <div className="orderlist_content_productname">
                      <p>{order.brand_name}</p>
                      <p>{order.product_name}</p>
                    </div>
                    <div className="orderlist_content_productprice">
                      <span>{order.unit_price.toLocaleString() + "원"}</span>
                      <span>{order.qty + "개"}</span>
                      <p>{showDeliveryType(order.delivery_type)}</p>
                    </div>
                  </Link>
                }
              }
              )}
              <div className="orderlist_content_totalprice">
                <span>총 결제비용 : </span>
                <span>{orders.last_pay_price.toLocaleString()}원</span>
              </div>
            </div >
          )}
        </div>
      </div >
    </>
  );
};