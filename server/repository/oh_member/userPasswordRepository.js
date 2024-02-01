import { db } from './../../data/database.js';

export async function userPasswordNew(id){
  const sql = `select count(mid) as cntid, count(phone) as cnt, any_value(phone) as phone, any_value(left(phone,3))
                as phoneleft, any_value(right(phone,2)) as phoneright
                from oh_member where mid = ?`
  return db
  .execute(sql, [id])
  .then(rows => rows[0][0])
}

export async function newPassword(params){
  return db
  .execute("update oh_member set pass = ? where mid = ?", params)
  .then(result => "ok")
}