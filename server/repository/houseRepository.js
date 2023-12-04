import { db } from './../data/database.js';


export async function getHouse() {

  const sql = "select hid,SUBSTRING_INDEX(oc.mid,'@',1) as mid,om.userimg,oc.house_img,oc.house_title,oc.house_content,om.mdate from oh_community oc inner join oh_member om on oc.mid = om.mid";
  return db.execute(sql)
    .then((rows) => rows[0])

}

export async function getSortFirstHouse() {

  const sql = "select hid,SUBSTRING_INDEX(oc.mid,'@',1) as mid,om.userimg,oc.house_img,oc.house_title,oc.house_content,om.mdate from oh_community oc inner join oh_member om on oc.mid = om.mid order by mdate desc";
  return db.execute(sql)
    .then((rows) => rows[0])

}

export async function getSortLastHouse() {

  const sql = "select hid,SUBSTRING_INDEX(oc.mid,'@',1) as mid,om.userimg,oc.house_img,oc.house_title,oc.house_content,om.mdate from oh_community oc inner join oh_member om on oc.mid = om.mid order by mdate asc";
  return db.execute(sql)
    .then((rows) => rows[0])

}

// export async function getCollection() {

//   const sql = "";
//   return db.execute(sql)
//     .then((rows) => rows[0])

// }

