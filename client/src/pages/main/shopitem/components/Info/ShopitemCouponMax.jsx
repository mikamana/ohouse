export default function ShopitemCouponMax({percent}){
  return(
    <div className="shopitem_coupon">
      <img className="shopitem_coupon_img" src="https://image.ohou.se/i/bucketplace-v2-development/static/productions/card-promotion-badge.png?w=36&w=40&h=32"/>
      <span className="shopitem_coupon_text">최대 {percent}% 결제할인</span>
    </div>
  );
}