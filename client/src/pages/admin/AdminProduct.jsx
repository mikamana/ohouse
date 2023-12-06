import React from "react";
import AdminContent from "./component/AdminContent";

export default function AdminProduct() {

/* 
pid	int	NO	PRI		auto_increment
category_id	int	YES	MUL		
product_image	varchar(500)	YES			
brand_name	varchar(20)	YES			
product_name	varchar(100)	YES			
rating_avg	char(5)	YES			
rating_review	int	YES			
price_sale	int	YES			
price_origin	int	YES			
tag_free	tinyint(1)	YES			
coupon_percent	int	YES			
pdate	datetime	YES			
delivery_type	varchar(20)	YES			
*/

  return (
    <div>
      <AdminContent 
      category = 'product'
      menuList = {[' ', '카테고리', '브랜드명', '상품명' ,'대표이미지','정상가', '판매가', '할인율', '무료배송', '쿠폰', '등록일', '비고']}
      />
    </div>
  );
};