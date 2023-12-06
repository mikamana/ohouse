import {db} from "../../data/database.js";

export async function createInquiry(mid,pid,type,content,check){

  const sql = "insert into oh_inquiry(mid,pid,qtype,qdate,qcontent,adate,acontent,secret_check) values(?,?,?,sysdate(),?,null,'답변 대기중입니다.',?)";

  return db.execute(sql,[mid,pid,type,content,check])
  .then(result => 'ok')

};


export async function getInquiry(pid,startIndex,endIndex){

  const sql = "select rno,pid,nickname,qtype,qdate,secret_check,qcontent,adate,acontent,total from (select row_number() over(order by qdate desc) rno,nickname,qtype,qdate,secret_check,qcontent,adate,acontent,total,pid  from (select count(*) as total from oh_member) as member ,oh_inquiry oi inner join oh_member om on oi.mid = om.mid order by qdate desc) as m where pid = ? and rno between ? and ?";

  return db.execute(sql,[pid,startIndex,endIndex])
  .then((rows)=>rows[0])

}

