import React from "react";
import { Link } from "react-router-dom";
export default function ProductionInfoBanner() {

  return (

    <>
      <Link to="#" className="production_selling_coupon_banner_wrap">
        <img className="production-selling-promotion-banner__image production-selling-promotion-banner__image--pc" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/production_promotions/event/170046315235278107.png?gif=1&amp;w=480" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/production_promotions/event/170046315235278107.png?gif=1&amp;w=720 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/production_promotions/event/170046315235278107.png?gif=1&amp;w=960 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/production_promotions/event/170046315235278107.png?gif=1&amp;w=1440 3x" />
      </Link>
    </>
  );

}