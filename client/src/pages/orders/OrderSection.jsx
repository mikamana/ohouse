import OrderFormWrap from "./OrderFormWrap"
import OrderSidebarWrap from "./OrderSidebarWrap";

export default function OrderSection(){
  return(
    <div className="orders_section inner">
      <form className="orders_section_container">
        <OrderFormWrap/>
        <OrderSidebarWrap/>
      </form>
    </div>
  );
}