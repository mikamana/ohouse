import { db } from './../data/database.js';

export async function idCheck(id){
  return db
  .execute("select count(mid) as cnt from oh_member where mid = ?" , [id])
  .then(rows => rows[0][0])
}

export async function nicknameCheck(nickname){
  return db
  .execute("select count(mid) as cnt from oh_member where nickname = ?" , [nickname])
  .then(rows => rows[0][0])
}

export async function signup(params){
  return db
  .execute("insert into oh_member (mid, pass, nickname, mdate) values(?,?,?,sysdate())", params)
  .then(rows => "ok")
}