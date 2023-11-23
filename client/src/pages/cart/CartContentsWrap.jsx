import CartContentsContainer from './components/CartContents/CartContentsContainer';
import CartContentCoupon from './components/CartContents/CartContentsCouponWrap';
import CartContentHeader from './components/CartContents/CartContentsHeaderWrap';
import CartContentItemWrap from './components/CartContents/CartContentsItemWrap';
import CartContentsSimilarWrap from './components/CartContents/CartContentsSimilarWrap';

export default function CartContentsWrap(){
  return(
    <div className='cart_contents_wrap'>
      <CartContentsContainer>
        <CartContentHeader/>
        <CartContentCoupon/>
        <CartContentItemWrap/>
        <CartContentsSimilarWrap/>
      </CartContentsContainer>
    </div>
  );
}