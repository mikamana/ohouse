import { db } from './../data/database.js';

export async function createCart(pid,id,qty){

  const sql = "insert into oh_cart(pid,mid,qty,cdate) values(?,?,?,sysdate())";
  return db.execute(sql,[pid,id,qty])
  .then((result)=>'ok');

}

export async function getSubCart(pid,mid){

  const sql = `select cart_id,pid,mid,qty,cdate from oh_cart where pid = ? and mid = ?`

  return db.execute(sql,[pid,mid])
  .then((rows)=>rows[0])

}



export async function getCart(mid){
  const sql = `select cart_id, op.pid, om.mid ,qty ,cdate,op.price_origin,op.price_sale,(op.price_origin * op.price_sale / 100) price_change, ifnull(round(op.price_origin - (op.price_origin * op.price_sale / 100),-2),op.price_origin) sale_price, ifnull((round(op.price_origin - (op.price_origin * op.price_sale / 100),-2) * oc.qty),round(op.price_origin - (op.price_origin * op.price_sale / 100),-2)) total_price 
  , op.category_id, op.product_image,op.brand_name,op.delivery_type,op.product_name,op.tag_free,cnt
  from oh_cart oc, oh_product op, oh_member om,(select count(*) as cnt from oh_cart where mid = ?) cart where oc.pid = op.pid and oc.mid = om.mid and oc.mid = ?;`
  return db.execute(sql,[mid,mid])
  .then((result)=>result[0])
}

export async function removeCart(mid,checkList){
  checkList.map(list=>{
    if(list === ""){
      return
    }else{
      const sql = `delete from oh_cart where mid = ? and cart_id = ?`
      db.execute(sql,[mid,list])
    }
  })
  return 'success'
}

export async function updateCart(params){


  const sql = `update oh_cart set qty = ? where cart_id = ? `;
  return db.execute(sql,params)
  .then((result)=>'success')
}

