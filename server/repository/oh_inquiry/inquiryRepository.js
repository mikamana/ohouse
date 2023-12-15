import {db} from "../../data/database.js";

export async function createInquiry(mid,pid,type,content,check){

  const sql = "insert into oh_inquiry(mid,pid,qtype,qdate,qcontent,adate,acontent,secret_check) values(?,?,?,sysdate(),?,null,'답변 대기중입니다.',?)";

  return db.execute(sql,[mid,pid,type,content,check])
  .then(result => 'ok')

};


export async function getInquiry(pid,startIndex,endIndex){

  const sql = `select rno,mid,nickname,qtype,secret_check,qcontent,substring(qdate,1,10) qdate,ifnull(adate,0) adate,acontent,cnt from (select row_number() over (order by qdate desc) as rno,oi.mid,om.nickname,substring(oi.qdate,1,10) as qdate,secret_check,qtype,qcontent,adate,acontent,(select count(pid) as cnt from oh_inquiry where pid = ? group by pid) cnt from oh_inquiry oi inner join oh_member om on oi.mid = om.mid where pid = ? order by qdate desc) as m limit ?,?`;

  return db.execute(sql,[pid,pid,startIndex,endIndex])
  .then((rows)=>rows[0])

}

export async function removeInquiry(mid,pid) {

  const sql = `delete from oh_inquiry where mid = ? and pid = ?`;
  // 오후 작업
  return db.execute(sql,[mid,pid])
  .then((result)=>'ok')

}

export async function updateInquiry(mid,pid,type,content,check){

  const sql = `update oh_inquiry set qtype = ?, qcontent = ?, secret_check = ? where mid = ? and pid = ?`;

  return db.execute(sql,[type,content,check,mid,pid])
  .then(result => 'ok')

}

