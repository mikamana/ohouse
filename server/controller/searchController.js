import * as searchRepository from '../repository/searchRepository.js';

export async function searchList (req, res) {
  const product_name = req.params.product_name;
  const result = await searchRepository.searchList(product_name);
  res.json(result);
}