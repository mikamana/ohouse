import { db } from "../../data/database.js";
/* export async function getOrder(mid){
  const sql = ``
} */
export async function getOrder(mid){
  const sql = `select oo.order_id, om.mid, oo.total_price, op.pid, oo.qty, om.nickname,op.category_id, op.product_image, op.brand_name, op.product_name, op.rating_avg, op.rating_review, op.price_sale, op.price_origin, op.tag_free, op.delivery_type, ifnull(round(op.price_origin - (op.price_origin * op.price_sale / 100),-2),op.price_origin) sale_price
  from oh_order oo, oh_member om, oh_product op where oo.pid = op.pid and oo.mid = om.mid and om.mid = ?;`
  return await db
  .execute(sql,[mid])
  .then(result=>{return result[0]})
}

export async function removeOrder(mid){
  return db
  .execute('delete from oh_order where mid=?',[mid])
  .then(result=>'success')
}

export async function postOrder(orderList,mid,total_price){
  if(!orderList){
  return
  }
  const result = async () => {
    await orderList.map((item)=>{
    const sql = `insert into oh_order(pid,qty,mid,odate,total_price) values(?,?,?,sysdate(),?)`
    db.execute(sql,[item.pid,item.qty,mid,total_price])
    });
    return 'success'
  }
  return await result()
}
