import * as repository from "../repository/adminRepository.js"

export async function getMemberList(req, res) {
  const result = await repository.getMemberList();
  res.json(result)
};