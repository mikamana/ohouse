import { db } from "../../data/database.js";

export async function createScrap(mid,pid){

  const sql = "insert into oh_scraped(mid,pid,scraped_at) values(?,?,sysdate());";

  return db.execute(sql,[mid,pid])
  .then(result => 'ok')

};


export async function getCheckScrap(pid){

  const sql = "select * from oh_scraped";

  return db.execute(sql,[pid])
  .then(result => 'ok')

}