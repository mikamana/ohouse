import { db } from "../data/database.js"

export async function getMemberList({value, startindex, endindex }) {
  let sql = ''
  if(value == 'asc' || value == 'value'){
    sql = `
    select rno, mid, nickname, userimg, phone, homepage, gender, birthday, left(mdate,19) as mdate, total, count_review, count_order from 
	(select row_number() over(order by nickname asc) rno, 
			  m.mid, 
			  m.nickname, 
			  m.userimg, 
			  m.phone, 
			  m.homepage,
			  m.gender, 
			  m.birthday,
			  left(m.mdate,19) as mdate,
			  total,
			  count(r.mid) as count_review,
			  count(o.mid) as count_order
		from (select count(*) as total from oh_member) as member,
			  oh_member m left outer join oh_review r on m.mid = r.mid  left outer join oh_order o
			  on m.mid = o.mid group by m.mid, member.total, r.mid, o.mid) as memberList
		 where rno between ? and ? group by mid, memberList.total, count_review, count_order order by nickname asc`
  }else{
    sql = `
    select rno, mid, nickname, userimg, phone, homepage, gender, birthday, left(mdate,19) as mdate, total, count_review, count_order from 
	(select row_number() over(order by nickname desc) rno, 
			  m.mid, 
			  m.nickname, 
			  m.userimg, 
			  m.phone, 
			  m.homepage,
			  m.gender, 
			  m.birthday,
			  left(m.mdate,19) as mdate,
			  total,
			  count(r.mid) as count_review,
			  count(o.mid) as count_order
		from (select count(*) as total from oh_member) as member,
			  oh_member m left outer join oh_review r on m.mid = r.mid  left outer join oh_order o
			  on m.mid = o.mid group by m.mid, member.total, r.mid, o.mid) as memberList
		 where rno between ? and ? group by mid, memberList.total, count_review, count_order order by nickname desc`
  }

  return db.execute(sql, [startindex, endindex])
    .then(rows => rows[0])
};

/* 회원정보 조회 */
export async function getMember(mid){
  return db.execute('select mid,nickname,phone,birthday from oh_member_view where mid=?',[mid])
  .then(rows => rows[0][0])
};

/* 회원정보 수정 */
export async function updateMember(params){
  return db.execute('update oh_member set mid = ?, nickname = ?, phone = ?, birthday = ? where mid=?', params)
  .then(result => 'ok')
};

/* 오름차순 정렬 */
export async function getAscList(value, startindex, endindex){
  let sql = ''
  if(value == 'asc'){
    sql = `
    select row_number() over(order by nickname asc) as rno, mid, nickname, userimg, phone, homepage, gender, birthday, mdate from oh_member order by nickname asc;
    
    select rno, mid, nickname, userimg, phone, homepage, gender, birthday, left(mdate,19) as mdate, total, count_review, count_order from 
      (select row_number() over(order by nickname asc) rno, 
            m.mid, 
            m.nickname, 
            m.userimg, 
            m.phone, 
            m.homepage,
            m.gender, 
            m.birthday,
            left(m.mdate,19) as mdate,
            total,
            count(r.mid) as count_review,
            count(o.mid) as count_order
        from (select count(*) as total from oh_member) as member,
            oh_member m left outer join oh_review r on m.mid = r.mid  left outer join oh_order o
            on m.mid = o.mid group by m.mid, member.total, r.mid, o.mid) as memberList
         where rno between ? and ? group by mid, memberList.total, count_review, count_order order by nickname asc`
  }else{
    sql = `
    select row_number() over(order by nickname desc) as rno, mid, nickname, userimg, phone, homepage, gender, birthday, mdate from oh_member order by nickname desc;
    
    select rno, mid, nickname, userimg, phone, homepage, gender, birthday, left(mdate,19) as mdate, total, count_review, count_order from 
      (select row_number() over(order by nickname desc) rno, 
            m.mid, 
            m.nickname, 
            m.userimg, 
            m.phone, 
            m.homepage,
            m.gender, 
            m.birthday,
            left(m.mdate,19) as mdate,
            total,
            count(r.mid) as count_review,
            count(o.mid) as count_order
        from (select count(*) as total from oh_member) as member,
            oh_member m left outer join oh_review r on m.mid = r.mid  left outer join oh_order o
            on m.mid = o.mid group by m.mid, member.total, r.mid, o.mid) as memberList
         where rno between ? and ? group by mid, memberList.total, count_review, count_order order by nickname desc`
  }
  return db.execute(sql, [startindex, endindex])
  .then(rows => rows[0])
};