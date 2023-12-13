import {db} from '../../data/database.js'

export async function getTodayDeal(){
  const sql = 'select pid,category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,ifnull(round(price_origin - (price_origin * price_sale / 100),-2),price_origin) sale_price,tag_free,coupon_percent,pdate,delivery_type from oh_product where product_name like "%오늘의딜%" limit 11'
  return db
  .execute(sql)
  .then(result => result[0])
}
export async function getPopular(startIndex){
  const sql = 'select distinct pid,category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,ifnull(round(price_origin - (price_origin * price_sale / 100),-2),price_origin) sale_price,tag_free,coupon_percent,pdate,delivery_type  from oh_product order by product_image desc limit ?,12'
  return db
  .execute(sql,[startIndex])
  .then(result => result[0])
}
export async function getBestitem(){
  const sql = 'select pid,category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,ifnull(round(price_origin - (price_origin * price_sale / 100),-2),price_origin) sale_price,tag_free,coupon_percent,pdate,delivery_type from oh_product order by rating_avg desc limit 1,3'
  return db
  .execute(sql)
  .then(result => result[0])
}

export async function getCategoryList(category_id){
  const sql = 'select pid,category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,ifnull(round(price_origin - (price_origin * price_sale / 100),-2),price_origin) sale_price,tag_free,coupon_percent,pdate,delivery_type from oh_product where category_id = ? order by rating_avg desc limit 1,3'
  return db
  .execute(sql,[category_id])
  .then(result => result[0])
}

export async function getInfiniteItem(startIndex){
  const sql = `select pid,category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,ifnull(round(price_origin - (price_origin * price_sale / 100),-2),price_origin) sale_price,tag_free,coupon_percent,pdate,delivery_type from oh_product limit ?,12`
  return db
  .execute(sql,[startIndex])
  .then(result => result[0])
}