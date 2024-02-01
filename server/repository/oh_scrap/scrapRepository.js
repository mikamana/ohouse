import { db } from "../../data/database.js";

export async function createScrap(mid,pid){

  const sql = "insert into oh_scraped(mid,pid,scraped_at) values(?,?,sysdate());";

  return db.execute(sql,[mid,pid])
  .then(result => 'ok')

};


export async function getCheckScrap(pid,mid){

  const sql = "select pid,mid from oh_scraped where pid = ? and mid = ?";

  return db.execute(sql,[pid,mid])
  .then(rows => rows[0])

}

export async function removeScrap(pid,mid){

  const sql = "delete from oh_scraped where pid = ? and mid = ?";

  return db.execute(sql,[pid,mid])
  .then(result => "ok");

}


export async function getPrdScrapCount(pid){

  const sql = `select count(pid) as cnt from oh_scraped os where pid = ?`;

  return db.execute(sql,[pid])
  .then(rows => rows[0])

}