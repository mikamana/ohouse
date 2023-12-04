import * as productionRepository from "../repository/productionRepository.js";

export async function getProduct(req,res){

  const pid = req.params.pid

  const rows = await productionRepository.getProduct(pid);

  res.json(rows)


}