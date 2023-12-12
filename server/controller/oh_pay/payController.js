import * as payRepository from '../../repository/oh_pay/payRepository.js'



export async function postPay(req,res){
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
    reciever_address_zonecode,
    reciever_address_main,
    reciever_address_detail,
    reciever_request,
    payment,
    card_bank,
    installment
  } = req.body[0]
  const orderList = req.body[1]
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E5)
  const mid = req.params.mid
  const params = [uniqueSuffix,mid,`${orderer_id}@${orderer_mail_self === "" ? orderer_mail : orderer_mail_self}`,`${orderer_phead}${orderer_pbody}`,orderer_name,reciever_name,reciever_place,`${reciever_phead}${reciever_pbody}`,reciever_address_zonecode,`${reciever_address_main} ${reciever_address_detail}`,reciever_request,payment,card_bank,installment,orderList[0].total_price]
  const result = await payRepository.postPay(params,orderList,uniqueSuffix,mid);
  if(result === 'success'){
    res.status(204).send('success')
  }
}