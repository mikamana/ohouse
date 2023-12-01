import { db } from "../../data/database.js";

export async function profile(id){
  return db
  .execute("select mid, nickname, homepage, gender, birthday, userimg, comment from oh_member where mid = ?", [id])
  .then(rows => rows[0][0])
}

export async function edit(params){
  return db
  .execute("update oh_member set nickname = ?, homepage = ?, gender = ?, birthday = ?, userimg = ?, comment = ?  where mid = ?", params)
  .then(rows => "ok")
}