import { db } from './../../data/database.js';

export async function login(id){
  return db
  .execute("select count(pass) as cnt, any_value(pass) as pass from oh_member where mid=?", [id])
  .then(rows => rows[0][0])
}
