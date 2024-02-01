import * as orderRepository from '../../repository/oh_order/orderRepository.js'

export async function getOrder(req,res){
  const mid = req.params.mid
  const rows = await orderRepository.getOrder(mid);
    res.json(rows)
}

export async function postOrder(req,res){
  const mid = req.params.mid
  const total_price = req.body[1];
  const orderList = req.body[0]
  const remove = await orderRepository.removeOrder(mid);
  const result = await orderRepository.postOrder(orderList,mid,total_price);
  if(result === 'success'){
    res.status(204).send('success')
  }
}

/* getOrder
select order_id,oc.cart_id,om.mid,qty,op.pid,total_price
from oh_order oo, oh_cart oc, oh_member om, oh_product op
where oc.cart_id = oo.cart_id and om.mid = oo.mid and oc.pid = op.pid and om.mid ='@'; */