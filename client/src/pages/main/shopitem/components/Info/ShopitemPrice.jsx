export default function ShopitemPrice({sale,cost,another}){
  return(
    <div className="shopitem_price">
      <span className="shopitem_price_sale">{sale}%</span>
      <span className="shopitem_price_cost">{cost}</span>
      {another && <span>외</span>}
    </div>
  );
}