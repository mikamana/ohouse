import * as searchRepository from '../repository/searchRepository.js';

export async function searchList (req, res) {
  const result = await searchRepository.searchList();
  res.json(result);
}