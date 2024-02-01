export default function ShopitemBest({rank}){
  return(
    <div className={`shopcate_contents_best_mark ${rank > 3 ? 'over' : ''}`}>
      <svg width="26" height="30" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="m13 24.25-13 5V0h26v29.25l-13-5Z" fill={rank < 4 ? `rgba(53, 197, 240, 0.86)` : `rgba(144, 152, 159, 0.75)`}></path></svg>
      <span className="shopcate_contents_best_mark_num">{rank}</span>
    </div>
  );
}