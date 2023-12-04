import * as categoryRepository from '../../repository/oh_category/categoryRepository.js'

export async function getCategoryAll(req,res){
  const result = await categoryRepository.getCategoryAll();
  res.json(result);
}
