import React from "react";
import OrderListSort from './OrderListSort';
import '../../css/user/orderlist.css';
import { getUser } from './../utill/sessionStorage';

export default function OrderList() {
  const userInfo = getUser();
  console.log(userInfo);
  // const menulist = ["결제완료", "배송준비", "배송중", "배송완료", "구매확정"]

  return (
    <>
      {
        userInfo ? (
          <div className="orderlist_section inner">
            <div className="orderlist_menubox">
              <div>
                <p className="orderlist_firstmenu">결제완료</p>
                <span>0</span>
              </div>
              <div>
                <p>배송준비</p>
                <span>0</span>
              </div>
              <div>
                <p>배송중</p>
                <span>0</span>
              </div>
              <div>
                <p>배송완료</p>
                <span>0</span>
              </div>
              <div>
                <p>구매확정</p>
                <span>0</span>
              </div>
            </div>
            <div className="orderlist_content">
              <OrderListSort />
            </div>
          </div>
        ) : (
          <div>잘못된 접근입니다</div>
        )
      }
    </>
  );
};