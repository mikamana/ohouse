import { db } from './../data/database.js';


export async function getProduct(pid) {

  const sql = "select pid,category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,ifnull(round(price_origin - (price_origin * price_sale / 100),-2),0) sale_price,tag_free,coupon_percent,pdate,delivery_type from oh_product where pid = ?";
  return db.execute(sql, [pid])
    .then((rows) => rows[0])

} 