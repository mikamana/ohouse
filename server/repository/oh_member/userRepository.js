import { db } from "../../data/database.js";

export async function getUser(mid) {

  const sql = `select om.mid, om.userimg, om.nickname, count(om.mid) as cnt from oh_member om left join oh_scraped os on om.mid = os.mid where om.mid = ? group by om.mid`;

  return db.execute(sql, [mid])
    .then(rows => rows[0])

};

export async function getUserInquiry(mid) {
  const sql = `select qid, mid, i.pid, qtype, left(qdate,10) qdate, qcontent, left(adate,10) adate, acontent, secret_check, p.product_name 
    from oh_inquiry i, oh_product p  
    where i.pid = p.pid and mid=?`;
  return db.execute(sql, [mid])
    .then(rows => rows[0])
};

export async function removeInquiry(qid){
  const sql = `delete from oh_inquiry where qid = ?`;
  return db.execute(sql, [qid])
  .then(result => 'ok')
};