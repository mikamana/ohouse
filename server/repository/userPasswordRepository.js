import { db } from "./../data/database.js";

export async function userPasswordNew(id){
  const sql = `select count(id) as cntid, count(phone) as cnt, any_value(phone) as phone, any_value(left(phone,3))
                as phoneleft, any_value(right(phone,2)) as phoneright
                from ohouse_member where id = ?`
  return db
  .execute(sql, [id])
  .then(rows => rows[0][0])
}