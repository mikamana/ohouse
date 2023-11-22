import CartContentsContainer from './components/CartContents/CartContentsContainer';
import CartContentCoupon from './components/CartContents/CartContentsCouponWrap';
import CartContentHeader from './components/CartContents/CartContentsHeaderWrap';
import CartContentList from './components/CartContents/CartContentsListWrap';

export default function CartContentsWrap(){
  return(
    <div className='cart_contents_wrap'>
      <CartContentsContainer>
        <CartContentHeader/>
        <CartContentCoupon/>
        <CartContentList/>
      </CartContentsContainer>
    </div>
  );
}