import { db } from './../data/database.js';

export async function createCart(pid,id,qty){

  const sql = "insert into oh_cart(pid,mid,qty,cdate) values(?,?,?,sysdate())";
  return db.execute(sql,[pid,id,qty])
  .then((result)=>'ok');

}

export async function getCart(mid){
  const sql = "select cart_id, pid, mid, cdate from oh_cart where mid = ?"
  return db.execute(sql,[mid])
  .then((result)=>result[0])
}
