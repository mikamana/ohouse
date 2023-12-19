import * as searchRepository from '../repository/searchRepository.js';

export async function searchList (req, res) {
  const searchKeyword = req.params.searchKeyword;
  const result = await searchRepository.searchList(searchKeyword);
  res.json(result);
}