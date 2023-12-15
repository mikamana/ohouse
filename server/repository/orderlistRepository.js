import { db } from './../data/database.js';

export async function getOrder(sortList, id){
  let sql = '';
  if(sortList === 'desc'){
    sql = `select mid, common_id, left(paydate,10) paydate, last_pay_price from oh_pay where mid = ? order by paydate desc`;
  }else{
    sql = `select mid, common_id, left(paydate,10) paydate, last_pay_price from oh_pay where mid = ? order by paydate asc`;
  }
  return db.execute(sql, [id])
  .then(rows=>rows[0])
}

export async function getOrderList(id){
  const sql = `select pay.mid, os.common_id, qty, left(odate,10) odate, unit_price, last_pay_price, product_image, brand_name, product_name, delivery_type 
    from oh_order_save os, oh_product p, oh_pay pay
    where os.pid = p.pid and os.common_id = pay.common_id and mid = ? order by odate desc`;
  return db.execute(sql, [id])
  .then(rows=>rows[0])
}
