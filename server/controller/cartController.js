import * as cartRepository from "../repository/cartRepository.js";

export async function createCart(req, res) {

  const { id, pid, qty, price } = req.body;

  const result = await cartRepository.createCart(pid, id, qty);

  if (result === 'ok') {

    res.status(204).send('ok')

  }
}

export async function getCart(req,res){
  const {mid} = req.params;
  const result = await cartRepository.getCart(mid);
  res.json(result);
}
export async function removeCart(req,res){
  const {mid} = req.params;
  
  if(req.body.length){
    const checkList = req.body;
    const result = await cartRepository.removeCart(mid,checkList)
    if(result === 'success'){
      res.status(204).send('success')
    }
  }else{
    const checkList = req.body.cart_id;
    const result = await cartRepository.removeCart(mid,[checkList])
    if(result === 'success'){
      res.status(204).send('success')
    }
  }

}
export async function updateCart(req,res){
  const {cart_id,qty} = req.params;
  const params = [qty,cart_id]
  const result = await cartRepository.updateCart(params)
  if(result === 'success'){
    res.status(200).send('success')
  }
}