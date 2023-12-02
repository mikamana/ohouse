import { db } from "../../data/database.js";

export async function getCategoryAll(){
  const sql = 'select category_name,category_id from oh_category'
  return db
  .execute(sql)
  .then(result => result[0])
}
