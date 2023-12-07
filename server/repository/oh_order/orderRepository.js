import { db } from "../../data/database.js";
/* export async function getOrder(mid){
  const sql = ``
} */
export async function getOrder(){

}

export async function postOrder(checkedItems,mid,total_price){
  console.log(checkedItems);
  if(!checkedItems){
  return console.log('배열아님')
  }
  checkedItems.map((item)=>{
    console.log(item);
    const sql = `insert into oh_order(cart_id,mid,odate,total_price) values(?,?,sysdate(),?)`
    db.execute(sql,[item,mid,total_price])
  })
  return 'success'
}