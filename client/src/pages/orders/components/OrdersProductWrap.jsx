import React from 'react';
import ShopitemTodayStart from '../../main/shopitem/components/Info/ShopitemTodayStart';

export default function OrdersProductWrap({ts}) {
  return (
    <div className='orders_product_wrap'>
      {ts && <div className='orders_product_delivery_type_wrap'>
        <div className='orders_product_delivery_type_container'>
          <div className='orders_product_delivery_type_box'><ShopitemTodayStart ts={ts}/></div>
        </div>
      </div>}
      <div className='orders_product_company_wrap'>
        <div className='orders_product_company_container'>
          <h3 className='orders_product_company_title'>
            회사이름Props
          </h3>
          <div className='orders_product_company_delivery_type'>
            무료배송
          </div>
        </div>
      </div>
      <div className='orders_product_contents_wrap'>
        <figure className='orders_product_contents_img_wrap'>
          <img className='orders_product_contents_img' src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169329424313528628.jpg?w=72&h=72&c=c" alt="" />
        </figure>
        <div className='orders_product_contents_text_wrap'>
          <p className='orders_product_contents_text_title'>[쿠폰] 허리엔 더매직 허리특화 포켓스프링 매트리스 S/SS/Q/K/SK</p>
          <p className='orders_product_contents_text_option'>더매직 하드타입_SS/슈퍼싱글</p>
          <p className='orders_product_contents_text_price'>
            299,000원
            <span className='orders_product_contents_text_price_span'>1개</span>
          </p>
        </div>
      </div>
    </div>
  );
}

