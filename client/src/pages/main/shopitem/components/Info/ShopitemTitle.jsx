export default function ShopitemTitle({company,text}){
  return(
    <h2 className="shopitem_title">
      <span className="shopitem_title_company">{company}</span>
      <span className="shopitem_title_text">{text}</span>
    </h2>
  );
}