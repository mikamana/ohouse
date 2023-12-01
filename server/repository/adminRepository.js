import { db } from "../data/database.js"

export async function getMemberList(){
  return db.execute("select row_number() over(order by nickname) as rno, mid, nickname, userimg, phone, homepage, gender, birthday, left(mdate,19) as mdate from oh_member")
  .then(rows => rows[0])
};