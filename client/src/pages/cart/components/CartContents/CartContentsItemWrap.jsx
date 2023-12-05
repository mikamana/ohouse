import CartedProduct from "./CartedProduct";

export default function CartContentItemWrap({checkedItemHandler,checkedItems,cartList,removeCart,getQty}){
  return(
    <div className='cart_contents_item_wrap'>
      <div className='cart_contents_item'>
{/* 아래부터 */}
        <h1 className="cart_contents_delivery_company">CJ택배</h1>
        <div className="cart_contents_item_list_wrap">
          <div className="cart_contents_delivery_group">
            <div className="cart_contents_delivery_group_item">
              {
                cartList.map((item)=>
                {return <CartedProduct
                key={item.cart_id}
                checkedItemHandler={checkedItemHandler}
                checked={checkedItems.includes(`${item.cart_id}`) ? true : false}
                delivery_type={item.delivery_type}
                cartList={item}
                removeCart={removeCart}
                getQty={getQty}
                />
                }
                )
              }
            </div>
            <div className="cart_contents_delivery_type">
                <p>
                  무료배송
                </p>
            </div>
          </div>
        </div>
{/* 위까지 반복(택배회사가 다를 시) */}
      </div>
    </div>
  );
}