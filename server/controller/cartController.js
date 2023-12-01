import * as cartRepository from "../repository/cartRepository.js";

export async function createCart(req,res){

  const {id,pid,qty,price} = req.body;
  console.log(req.body);

  const result = cartRepository.createCart(pid,id,qty);

  if(result==='ok'){

    res.status(204).send('ok')

  }
}