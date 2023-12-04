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