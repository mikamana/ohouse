import * as productRepository from '../../repository/oh_product/productRepository.js'

export async function getTodayDeal(req, res) {
  const result = await productRepository.getTodayDeal();
  res.json(result)
}
export async function getPopular(req, res) {
  const result = await productRepository.getPopular();
  res.json(result)
}
export async function getBestitem(req, res) {
  const result = await productRepository.getBestitem();
  res.json(result)
}

export async function getCategoryList(req, res) {
  const { category_id } = req.params

  const result = await productRepository.getCategoryList(category_id);
  res.json(result);
}