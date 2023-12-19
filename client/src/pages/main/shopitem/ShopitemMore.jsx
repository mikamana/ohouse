import { Link } from "react-router-dom";

export default function ShopitemMore(){
  return(
    <div className='shopitem_more_wrap'><Link to={'/store/todaydeals'} className='shopitem_more_button'><span className='shopitem_more_text'>더보기</span></Link></div>
  );
}