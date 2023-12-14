import * as productRepository from '../../repository/oh_product/productRepository.js'

export async function getTodayDeal(req, res) {
  const result = await productRepository.getTodayDeal();
  res.json(result);
}
export async function getPopular(req, res) {
  const {page} = req.params;
  let startIndex = (parseInt(page) - 1) * 12;
  const result = await productRepository.getPopular(startIndex.toString());
  res.json(result);
}
export async function getBestitem(req, res) {
  const result = await productRepository.getBestitem();
  res.json(result);
}

export async function getCategoryList(req, res) {
  const { category_id } = req.params;

  const result = await productRepository.getCategoryList(category_id);
  res.json(result);
}

export async function getInfiniteItem(req, res){
  const {page} = req.params;
  let startIndex = (parseInt(page) - 1) * 12;
  const result = await productRepository.getInfiniteItem(startIndex.toString());
  res.json(result);
}

export async function getRanksItem(req, res){
  const {best} = req.params;
  const result = await productRepository.getRanksItem(best);
  res.json(result);
}

export async function getCategoryRankItem(req, res) {
  const { category_id } = req.params;

  const result = await productRepository.getCategoryRankItem(category_id);
  res.json(result);
}