import { db } from './../data/database.js';

export async function createCart(pid,id,qty){

  const sql = "insert into oh_cart(pid,mid,qty,cdate) values(?,?,?,sysdate())";
  return db.execute(sql,[pid,id,qty])
  .then((result)=>'ok');

}

export async function getCart(mid){
  const sql = `select cart_id, op.pid, om.mid ,qty ,cdate, ifnull(format(round(op.price_origin - (op.price_origin * op.price_sale / 100),-2),0),format(op.price_origin,0)) sale_price, ifnull(format((round(op.price_origin - (op.price_origin * op.price_sale / 100),-2) * oc.qty),0),round(op.price_origin - (op.price_origin * op.price_sale / 100),-2)) total_price 
  , op.category_id, op.product_image,op.brand_name,op.delivery_type,op.product_name,op.tag_free, cnt
  from oh_cart oc, oh_product op, oh_member om,(select count(*) as cnt from oh_cart where mid = ?) cart where oc.pid = op.pid and oc.mid = om.mid and oc.mid = ?;`
  return db.execute(sql,[mid,mid])
  .then((result)=>result[0])
}
