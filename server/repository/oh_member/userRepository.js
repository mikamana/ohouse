import { db } from "../../data/database.js";

export async function getUser(mid) {

  const sql = `select om.mid, om.userimg, om.nickname, count(om.mid) as cnt from oh_member om left join oh_scraped os on om.mid = os.mid where om.mid = ? group by om.mid`;

  return db.execute(sql, [mid])
    .then(rows => rows[0])

};