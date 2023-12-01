import ShopitemImageWrap from "./ShopitemImageWrap";
import ShopitemInfo from "./ShopitemInfo";
import ShopitemBest from "./components/ImageWrap/ShopitemBest";
import ShopitemImage from "./components/ImageWrap/ShopitemImage"
import ShopitemMark from "./components/ImageWrap/ShopitemMark"
import ShopitemTimeCount from "./components/ImageWrap/ShopitemTimeCount"
import ShopitemCoupon from "./components/Info/ShopitemCoupon";
import ShopitemCouponMax from "./components/Info/ShopitemCouponMax";
import ShopitemPrice from "./components/Info/ShopitemPrice";
import ShopitemRating from "./components/Info/ShopitemRating";
import ShopitemStartSpan from "./components/Info/ShopitemStartSpan";
import ShopitemTag from "./components/Info/ShopitemTag";
import ShopitemTitle from "./components/Info/ShopitemTitle";
import ShopitemTodayStart from "./components/Info/ShopitemTodayStart";
import "../../../css/main/shopitem/shopitem.css";

export default function ShopitemContents({ shopitemList, index }) {
  return (
    <div className="shopitem_contents">
      <ShopitemImageWrap>
        {shopitemList.best && <ShopitemBest rank={index} />}
        {!shopitemList.time_count && <ShopitemTimeCount />}
        <ShopitemImage
          shopimg={shopitemList.shopimg}
        />
        <ShopitemMark />
      </ShopitemImageWrap>
      <ShopitemInfo>
        <ShopitemTitle
          company={shopitemList.title_company}
          text={shopitemList.title_text}
        />
        <ShopitemPrice
          sale={shopitemList.price_sale}
          cost={shopitemList.price_cost}
          another={shopitemList.price_another}
        />
        <ShopitemRating
          avg={shopitemList.rating_avg}
          review={shopitemList.rating_review}
        />
        <ShopitemTodayStart
          ts={shopitemList.delivery_type}
        />
        {shopitemList.delivery_type === "todayDelivery" && <ShopitemStartSpan />}
        <ShopitemTag
          free={shopitemList.tag_free}
          hotprice={shopitemList.tag_hotprice}
        />
        {shopitemList.coupon_sale && <ShopitemCoupon />}
        {shopitemList.percent && <ShopitemCouponMax
          percent={shopitemList.percent}
        />}
      </ShopitemInfo>
    </div>
  );
}