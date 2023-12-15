import {db} from "../../data/database.js";

export async function getUser(mid){

  const sql = `select count(mid) as cnt, mid, nickname, userimg from
  (select om.nickname,
  os.sid,
  om.userimg,
  os.mid,
  os.pid,
  os.scraped_at,
  count(os.sid) as cnt
  from oh_scraped os 
  inner join oh_member om, oh_product op 
  where os.mid = om.mid and os.pid = op.pid
  group by os.mid, os.scraped_at, os.pid, os.sid) as m  where mid = ? group by mid`;

  return db.execute(sql,[mid])
  .then(rows=>rows[0])

};