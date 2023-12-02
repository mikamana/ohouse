import * as productRepository from '../../repository/oh_product/productRepository.js'

export async function getShopitem(req,res){
  const result = await productRepository.getShopitem();
  res.json(result)
}
export async function getBestitem(req,res){
  const result = await productRepository.getBestitem();
  res.json(result)
}

export async function getCategoryList(req,res){
  console.log(req.params);
  const {category_id} = req.params
  
  const result = await productRepository.getCategoryList(category_id);
  res.json(result);
}