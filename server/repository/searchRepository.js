import { db } from '../data/database.js';

export async function searchList () {
  const sql = `select pid,category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,ifnull(format(round(price_origin - (price_origin * price_sale / 100),-2),0),format(price_origin,0)) sale_price,tag_free,coupon_percent,pdate,delivery_type from oh_product where product_name like '%?%';`;
  return db
    .execute(sql)
    .then((rows)=>rows[0])
}