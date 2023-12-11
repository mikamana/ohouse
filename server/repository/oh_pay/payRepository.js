import { db } from "../../data/database.js";

export async function postPay(params,mid,orderList,uniqueSuffix){
  
  console.log(uniqueSuffix);
  console.log(orderList);
  console.log(params);
  console.log(mid);
    const sql = `insert into oh_pay(common_id,mid,orderer_email,orderer_phone,orderer_name,reciever_name,reciever_place,reciever_phone,reciever_address,reciever_request,paydate)values(?,?,?,?,?,?,?,?,?,?,sysdate())`
    //      payment,installment,last_pay_price
    db.execute(sql,[uniqueSuffix,mid,params[0]])
    .then(
/*       orderList.map((item,idx)=>{
        const sql = `insert into oh_order_save(common_id,osid,pid,qty,odate,total_price) values(?,?,?,?,sysdate(),?)`
        let sidx = idx+1
        db.execute(sql,[uniqueSuffix,sidx,item.pid,item.qty,item.total_price])
    }) */
      )
  return 'success'
}