import * as payRepository from '../../repository/oh_pay/payRepository.js'



export async function postPay(req,res){
  console.log(req.body);
  console.log(req.params);
  const 
  {
    orderer_id,
    orderer_mail,
    orderer_mail_self,
    orderer_phead,
    orderer_pbody,
    orderer_name,
    reciever_name,
    reciever_place,
    reciever_phead,
    reciever_pbody,
    reciever_address_detail,
    reciever_request
  } = req.body[0]
  const orderList = req.body[1]
  const params = [`${orderer_id}@${orderer_mail_self === "" ? orderer_mail : orderer_mail_self}`,`${orderer_phead}${orderer_pbody}`,orderer_name,reciever_name,reciever_place,`${reciever_phead}${reciever_pbody}`,reciever_address_detail,reciever_request]
  console.log(params);
  console.log(orderList);
  const mid = req.params.mid
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  const result = await payRepository.postPay(params,mid,orderList,uniqueSuffix);
  // if(result === 'success'){
    // res.status(204).send('success')
  // }
}
