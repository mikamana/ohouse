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

export async function getOrderList(req,res){
  const id = req.params.id;
  const result = await repository.getOrderList(id);
  res.json(result);
}

export async function getOrder(req,res){
  const { id, sortList } = req.params;
  const result = await repository.getOrder(sortList, id);
  res.json(result);
}
