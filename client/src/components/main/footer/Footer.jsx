import React, { Children } from "react";
import { Link } from "react-router-dom";

export default function Footer({ children }) {
  return (

    <>
      <footer className="main_footer">
        <div className="main_footer_layout inner">
          {children}
          <div className="main_footer_left">
            <Link to="#" className="main_footer_customer_center">고객센터</Link>
            <div className="main_footer_phone_box">
              <Link to="#" className="main_footer_phone">1670-0876</Link>
              <span>09:00 ~ 18:00</span>
            </div>
            <div className="main_footer_customer_day">
              <p>평일: 전체 문의 상담 가능</p>
              <p>주말, 공휴일: 오늘의집 직접배송, 이사/시공/제품설치 문의 상담 가능</p>
            </div>

            <div className="main_footer_customer_inquire">
              <button type="button">카톡 상담(평일 09:00~18:00)</button>
              <Link to="#">이메일 문의</Link>
            </div> 
          </div>
          <div className="main_footer_center">
            <Link to="#">회사소개</Link>
            <Link to="#">채용정보</Link>
            <Link to="#">이용약관</Link>
            <Link to="#">개인정보 처리방침</Link>
            <Link to="#">공지사항</Link>
            <Link to="#">안전거래센터</Link>
            <Link to="#">입점신청</Link>
            <Link to="#">제휴/광고 문의</Link>
            <Link to="#">사업자 구매 회원</Link>
            <Link to="#">시공파트너 안내</Link>
            <Link to="#">상품광고 소개</Link>
            <Link to="#">고객의 소리</Link>
          </div>
          <div className="main_footer_right">
            <div>
              <span>(주)버킷플레이스 대표이사</span>
              <span>이승재</span>
              <address>서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층</address>
            </div>
            <div>
              <Link to="#">contact@bucketplace.net</Link>
              <span>사업자등록번호 119-86-91245</span>
              <Link to="#">사업자정보확인</Link>
            </div>
            <p>통신판매업신고번호 제2018-서울서초-0580호</p>
            <div className="main_footer_small_text_box">고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다. <Link to="#">서비스가입사실확인</Link></div>
            <ul className="main_footer_icon_box">
              <li>
                <img src="https://assets.ohou.se/design-system/8f5b2c2e98ea1196.png" alt="" />
                <div>
                  <p>오늘의집 서비스 운영</p>
                  2021. 09. 08 ~ 2024. 09. 07
                </div>
              </li>
              <li>
                <img src="https://assets.ohou.se/design-system/d5fb816a58bb6a06.png" alt="" />
              </li>
              <li>
                <img src="https://assets.ohou.se/design-system/ad1cf869a6c58058.png" alt="" />
              </li>
            </ul>
            <p className="main_footer_small_text_box">(주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단, (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.</p>
            <ul className="main_footer_sns_icon">
              <li>
                <Link to="#"></Link>
              </li>
              <li>
                <Link to="#"></Link>
              </li>
              <li>
                <Link to="#"></Link>
              </li>
              <li>
                <Link to="#"></Link>
              </li>
              <li>
                <Link to="#"></Link>
              </li>
              <li>
                <Link to="#"></Link>
              </li>
            </ul>
            <p>Copyright 2014. bucketplace, Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>

  );

}