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
import { Link } from "react-router-dom";

export default function ShopitemContents({ shopitemList, index ,timecount, best}) {
  return (
    <div className="shopitem_contents">
      <Link to={`/production/${shopitemList.pid}`}>
        <ShopitemImageWrap>
          {best && <ShopitemBest rank={index} />}
          {timecount && <ShopitemTimeCount />}
          <ShopitemImage
            shopimg={shopitemList.product_image}
          />
          <ShopitemMark />
        </ShopitemImageWrap>
        <ShopitemInfo>
          <ShopitemTitle
            company={shopitemList.brand_name}
            text={shopitemList.product_name}
          />
          <ShopitemPrice
            sale={shopitemList.price_sale}
            cost={shopitemList.sale_price}
          />
          <ShopitemRating
            avg={shopitemList.rating_avg}
            review={shopitemList.rating_review}
          />
          <ShopitemTodayStart
            ts={shopitemList.delivery_type}
          />
          {shopitemList.delivery_type === "td" && <ShopitemStartSpan />}
          <ShopitemTag
            free={shopitemList.tag_free}
            hotprice={true}
            />
            {shopitemList.coupon_sale && <ShopitemCoupon/>}
            {shopitemList.coupon_percent && <ShopitemCouponMax
            percent={shopitemList.coupon_percent}
            />}
          </ShopitemInfo>
      </Link>
      </div>
  );
}