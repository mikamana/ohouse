import * as repository from "../../repository/oh_member/userRepository.js";

export async function getUser(req,res){

  const mid = req.params.mid

  console.log(mid);
  const rows = await repository.getUser(mid)

    res.json(rows);

}

