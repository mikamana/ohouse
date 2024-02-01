import * as cartRepository from "../repository/cartRepository.js";

export async function createCart(req, res) {

  const { id, pid, qty } = req.body;

  const rows = await cartRepository.getSubCart(pid,id)
  let count = 0;
  let result;

  if(rows.length === 0){

    result = await cartRepository.createCart(pid, id, qty);


  }else{

    if(rows[0].qty + req.body.qty > 9){

      count = 10

    }else{

      count = rows[0].qty + req.body.qty

    }

    const params = [count,rows[0].cart_id];


    result = await cartRepository.updateCart(params);


  }



  // const result = await cartRepository.createCart(pid, id, qty);


    res.send(result)

  
  
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

