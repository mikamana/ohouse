import { db } from "../../data/database.js";

export async function getUser(mid) {

  const sql = `select om.mid, om.userimg, om.nickname, count(om.mid) as cnt from oh_member om left join oh_scraped os on om.mid = os.mid where om.mid = ? group by om.mid`;

  return db.execute(sql, [mid])
    .then(rows => rows[0])

};

export async function getUserInquiry(mid) {
  const sql = `select qid, mid, i.pid, qtype, left(qdate,10) qdate, qcontent, left(adate,10) adate, acontent, secret_check, p.product_name 
    from oh_inquiry i, oh_product p  
    where i.pid = p.pid and mid=?`;
  return db.execute(sql, [mid])
    .then(rows => rows[0])
};

export async function removeInquiry(qid){
  const sql = `delete from oh_inquiry where qid = ?`;
  return db.execute(sql, [qid])
  .then(result => 'ok')
};

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
  const sql = `select pay.mid, os.common_id, qty, left(odate,10) odate, unit_price, last_pay_price, product_image, brand_name, product_name, delivery_type, p.pid
    from oh_order_save os, oh_product p, oh_pay pay
    where os.pid = p.pid and os.common_id = pay.common_id and mid = ? order by odate desc`;
  return db.execute(sql, [id])
  .then(rows=>rows[0])
}
