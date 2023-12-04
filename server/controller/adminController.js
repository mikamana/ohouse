import * as repository from "../repository/adminRepository.js"

export async function getMemberList(req, res) {
  const {startindex, endindex} = req.params;
  console.log({startindex, endindex});
  const result = await repository.getMemberList({startindex, endindex});
  res.json(result)
};