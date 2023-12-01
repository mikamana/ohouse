import CartedProduct from "./CartedProduct";

export default function CartContentItemWrap(){
  return(
    <div className='cart_contents_item_wrap'>
      <div className='cart_contents_item'>
{/* 아래부터 */}
        <h1 className="cart_contents_delivery_company">택배회사</h1>
        <div className="cart_contents_item_list_wrap">
          <div className="cart_contents_delivery_group">
            <div className="cart_contents_delivery_group_item">
              <CartedProduct/>
            </div>
            <div className="cart_contents_delivery_type">
                <p>
                  무료배송 혹은 2개 묶음배송비 무료
                </p>
            </div>
          </div>
        </div>
{/* 위까지 반복(택배회사가 다를 시) */}
      </div>
    </div>
  );
}