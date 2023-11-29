import { db } from './../data/database.js';

export async function idCheck(id){
  return db
  .execute("select count(id) as cnt from ohouse_member where id = ?" , [id])
  .then(rows => rows[0][0])
}

export async function nicknameCheck(nickname){
  return db
  .execute("select count(id) as cnt from ohouse_member where nickname = ?" , [nickname])
  .then(rows => rows[0][0])
}

export async function signup(params){
  return db
  .execute("insert into ohouse_member (id, pass, nickname, mdate) values(?,?,?,sysdate())", params)
  .then(rows => "ok")
}