import * as repository from "../../repository/oh_member/userRepository.js";

export async function getUser(req, res) {

  const mid = req.params.mid

  const rows = await repository.getUser(mid)

  res.json(rows);

}

export async function getUserInquiry(req,res){
  const mid = req.params.mid;
  const result = await repository.getUserInquiry(mid);
  res.json(result);
}

export async function removeInquiry(req,res){
  const qid = req.params.qid;
  const result = await repository.removeInquiry(qid);
  res.json(result);
}

