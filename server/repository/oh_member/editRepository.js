import { db } from "../../data/database.js";

export async function profile(id){
  const sql = `select mid, nickname, ifnull(phone,"") as phone, ifnull(homepage,"") as homepage, ifnull(gender,"") as gender, ifnull(birthday,"") as birthday, userimg, ifnull(comment,"") as comment from oh_member where mid = ?`
  return db
  .execute(sql, [id])
  .then(rows => rows[0][0])
}

export async function edit(params){
  return db
  .execute("update oh_member set nickname = ?, phone = ?, homepage = ?, gender = ?, birthday = ?, userimg = ?, comment = ?  where mid = ?", params)
  .then(rows => "ok")
}

export async function remove(id){
  return db
  .execute("delete from oh_member where mid = ?", [id])
  .then(rows => "ok")
}

export async function password(id){
  return db
  .execute("select pass from oh_member where mid = ?", [id])
  .then(rows => rows[0][0])
}

export async function newPassword(params){
  return db
  .execute("update oh_member set pass = ? where mid = ?", params)
  .then(rows => "ok")
}