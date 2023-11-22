import CartedProduct from "./CartedProduct";

export default function CartContentItemWrap(){
  return(
    <div className='cart_contents_item_wrap'>
      <div className='cart_contents_item'>
        <h1 className="cart_contents_delivery_company">택배회사</h1>
        <div className="cart_contents_item_list_wrap">
          <div className="cart_contents_delivery_group">
            <div className="cart_contents_delivery_group_item">
              <CartedProduct/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}