import * as repository from "../repository/orderlistRepository.js";

export async function getOrderList(req,res){
  const id = req.params.id;
  const result = await repository.getOrderList(id);
  res.json(result);
}


export async function getOrder(req,res){
  const { id, sortList } = req.params;
  const result = await repository.getOrder(sortList, id);
  res.json(result);
}
