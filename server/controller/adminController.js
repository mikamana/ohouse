import * as repository from "../repository/adminRepository.js"

export async function getMemberList(req,res){
  const result = await repository.getMemberList();
  console.log(result);
  res.json(result)
};