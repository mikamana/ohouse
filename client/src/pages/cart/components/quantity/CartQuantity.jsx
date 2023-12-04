import { FiMinus,FiPlus} from "react-icons/fi";
// 오늘의집에는 button이 클릭이 가능하고, 클릭하면 수량을 바꾸는 모달이 뜨는데 이를 구현하지는 않을 예정
export default function CartQuantity(){
  return(
    <div className="carted_product_quantity_wrap">
      <span className="carted_product_quantity_span"><FiMinus/></span>
      <button className="carted_product_quantity_btn">1</button>
      <span className="carted_product_quantity_span"><FiPlus/></span>
    </div>
  );
}