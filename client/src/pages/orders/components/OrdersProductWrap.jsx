import React from 'react';
import ShopitemTodayStart from '../../main/shopitem/components/Info/ShopitemTodayStart';

export default function OrdersProductWrap(props) {
  return (
    <div className='orders_product_wrap'>
      {props.ts && <div className='orders_product_delivery_type_wrap'>
        <div className='orders_product_delivery_type_container'>
          <div className='orders_product_delivery_type_box'><ShopitemTodayStart ts={props.ts}/></div>
        </div>
      </div>}
      <div className='orders_product_company_wrap'>
        <div className='orders_product_company_container'>
          <h3 className='orders_product_company_title'>
            {props.brand_name}
          </h3>
          <div className='orders_product_company_delivery_type'>
            무료배송
          </div>
        </div>
      </div>
      <div className='orders_product_contents_wrap'>
        <figure className='orders_product_contents_img_wrap'>
          <img className='orders_product_contents_img' src={props.product_image} alt="" />
        </figure>
        <div className='orders_product_contents_text_wrap'>
          <p className='orders_product_contents_text_title'>{props.product_name}</p>
          <p className='orders_product_contents_text_option'>단일 상품</p>
          <p className='orders_product_contents_text_price'>
            {parseInt(props.sale_price).toLocaleString()}원
            <span className='orders_product_contents_text_price_span'>{props.qty}개</span>
          </p>
        </div>
      </div>
    </div>
  );
}

