import RemoveBtn from "./button/RemoveBtn";
export default function CartContentCoupon(){
  return(
    <div className='cart_contents_coupon_wrap'>
      <div className='cart_contents_coupon'>
        쿠폰 적용된 가격은 결제할 때 확인 가능
      </div>
      <RemoveBtn
      weight="light"
      />
    </div>
  );
}