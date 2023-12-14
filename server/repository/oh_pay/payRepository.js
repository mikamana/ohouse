import { db } from "../../data/database.js";

export async function postPay(params,orderList,uniqueSuffix,mid){
  
  const sql = `insert into oh_pay (common_id,mid,orderer_email,orderer_phone,orderer_name,reciever_name,reciever_place,reciever_phone,reciever_postnumber,reciever_address,reciever_request,paydate,payment,card_bank,installment,last_pay_price) values (?,?,?,?,?,?,?,?,?,?,?,sysdate(),?,?,?,?)`
    //      payment,installment,last_pay_price
  await db.execute(sql,params)

  await orderList.map((item,idx)=>{
    const sql = `insert into oh_order_save(common_id,osid,pid,qty,odate,unit_price,line_total) values(?,?,?,?,sysdate(),?,?)`
    let sidx = idx+1
    db.execute(sql,[uniqueSuffix,sidx,item.pid,item.qty,item.sale_price,(item.sale_price*item.qty)])
    db.execute('delete from oh_cart where mid=? and pid=?',[mid,item.pid])
  })

  await db.execute('delete from oh_order where mid=?',[mid])

  return 'success'
}