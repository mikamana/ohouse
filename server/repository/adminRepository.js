import { db } from "../data/database.js"

export async function getMemberList({ startindex, endindex }) {
  const sql = `select rno, mid, nickname, userimg, phone, homepage, gender, birthday, left(mdate,19) as mdate, total, count_review, count_order 
	from oh_member_view where rno between ? and ?`
  return db.execute(sql, [startindex, endindex])
    .then(rows => rows[0])
};