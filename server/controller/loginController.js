import * as repository from "../repository/loginRepository.js"
import bcript from "bcryptjs";
import jwt from "jsonwebtoken";

export async function login(req, res){
  const {id, pass} = req.body;
  const result = await repository.login(id);
  result.login_result = false;

  if(result.cnt === 1){
    if(await bcript.compare(pass, result.pass)){
      result.login_result = true
      result.token = jwt.sign({id : id}, "5(EY8ba3,C*")
    }
  }
  result.pass = ""
  result.cnt = ""
  res.json(result)
}