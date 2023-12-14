import { db } from "../data/database.js";

export async function getMemberList({value, startindex, endindex }) {
  let sql = ''
  if(value == 'asc' || value == 'value'){
    sql = `
    select rno, nickname, mid, ifnull(birthday,'미입력') as birthday, left(mdate,10) as mdate, total, count_review, count_order from 
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
		  where rno between ? and ? group by mid, memberList.total, count_review, count_order order by nickname asc`;
  }else{
    sql = `
    select rno, nickname, mid, ifnull(birthday,'미입력') as birthday, left(mdate,10) as mdate, total, count_review, count_order from 
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
		  where rno between ? and ? group by mid, memberList.total, count_review, count_order order by nickname desc`;
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
          where rno between ? and ? group by mid, memberList.total, count_review, count_order order by nickname asc`;
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
          where rno between ? and ? group by mid, memberList.total, count_review, count_order order by nickname desc`;
  }
  return db.execute(sql, [startindex, endindex])
  .then(rows => rows[0])
};

/* 상품리스트 조회 */
export async function getProductList({value, startindex, endindex }) {
  let sql = ''
  if(value == 'asc'){
    sql = `
    select rno, category_name, product_name, brand_name, product_image, price_origin, price_sale, ifnull(format(round(price_origin - (price_origin * price_sale / 100),-2),0),format(price_origin,0)) sale_price, delivery_type, left(pdate,10) as pdate, total, pid from
(select row_number() over(order by product_name asc) rno, pid, total, category_name, product_image, brand_name, product_name, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type 
	from (select count(*) as total from oh_product) as products, oh_product p inner join oh_category c on p.category_id=c.category_id) a 
    where rno between ? and ? order by product_name asc`;
  }else{
    sql = `
    select rno, pid, total, category_name, product_image, brand_name, product_name, price_sale, price_origin, tag_free, coupon_percent, left(pdate,10) as pdate, delivery_type, ifnull(format(round(price_origin - (price_origin * price_sale / 100),-2),0),format(price_origin,0)) sale_price from
(select row_number() over(order by product_name desc) rno, pid, total, category_name, product_image, brand_name, product_name, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type 
	from (select count(*) as total from oh_product) as products, oh_product p inner join oh_category c on p.category_id=c.category_id) a 
    where rno between ? and ? order by product_name desc`;
  }

  return db.execute(sql, [startindex, endindex])
    .then(rows => rows[0])
};

/* 상품정보 조회 */
export async function getProduct(pid){
  const sql = `select pid, p.category_id as category_id, c.category_name as category_name, product_name, product_image, price_sale, price_origin, ifnull(delivery_type,'') as delivery_type, tag_free
  from oh_product p, oh_category c where p.category_id =  c.category_id and pid = ?`;
  return db.execute(sql,[pid])
  .then(rows => rows[0][0])
};

/* 상품정보 수정 */
export async function updateProduct(params){
  const sql = `update oh_product set category_id = ?, product_name = ?, product_image = ?, price_origin = ?, price_sale = ?, delivery_type = ? where pid = ?`
  return db.execute(sql, params)
  .then(result => 'ok')
};

/* 상품등록 */
export async function insertProduct(params){
  //category_id, brand_name, product_name, price_origin, product_image, price_sale, tag_free, delivery_type
  const sql = `insert oh_product (category_id, brand_name, product_name, product_image, price_origin, price_sale, tag_free, delivery_type, pdate)
	values (?,?,?,?,?,?,?,?,sysdate())`;
  return db.execute(sql, params)
  .then(result => 'ok')
}


/* 삭제 */
export async function removeProduct(pid){
  return db.execute('delete from oh_product where pid = ?', [pid])
  .then(result => 'ok')
}

/* 문의리스트 조회 */
export async function getInquiryList({value, startindex, endindex}){
  let sql = '';
  if(value == 'N'){
    sql = `select rno, qid, mid, pid, product_name, left(qdate,10) qdate, qtype, qcontent, acontent, secret_check, left(adate,10) adate from
    (select row_number() over(order by q.qid) rno, qid, mid, q.pid, p.product_name, qdate, qtype, qcontent, acontent, secret_check, adate
      from (select count(*) as total from oh_inquiry) as inquirys, oh_inquiry q inner join oh_product p on q.pid = p.pid) a
        where rno between ? and ? and adate is null order by qdate asc`;
  }else if (value == 'Y'){
    sql = `select rno, qid, mid, pid, product_name, left(qdate,10) qdate, qtype, qcontent, acontent, secret_check, left(adate,10) adate from
    (select row_number() over(order by q.qid) rno, qid, mid, q.pid, p.product_name, qdate, qtype, qcontent, acontent, secret_check, adate
      from (select count(*) as total from oh_inquiry) as inquirys, oh_inquiry q inner join oh_product p on q.pid = p.pid) a
        where rno between ? and ? and adate is not null order by qdate asc`;
  }else if(value == 'default'){
    sql = `select rno, qid, mid, pid, product_name, left(qdate,10) qdate, qtype, qcontent, acontent, secret_check, left(adate,10) adate from
    (select row_number() over(order by q.qid) rno, qid, mid, q.pid, p.product_name, qdate, qtype, qcontent, acontent, secret_check, adate
      from (select count(*) as total from oh_inquiry) as inquirys, oh_inquiry q inner join oh_product p on q.pid = p.pid) a
        where rno between ? and ? order by qdate asc`;
  }
  return db.execute(sql, [startindex, endindex])
  .then(rows => rows[0])
}

/* 답변등록 */
export async function updateInquiry({qid, acontent}){
  const sql = 'update oh_inquiry set acontent = ?, adate = sysdate() where qid = ?';
  return db.execute(sql, [acontent, qid])
  .then(result => 'ok')
}

/* 주문리스트 조회 */
export async function getOrderList({value, startindex, endindex}){
  // let sql = '';
  const sql = 'select row_number() over(order by orderer_name) as rno, pay.common_id, orderer_name, orderer_phone, left(odate,10) odate, p.product_name, qty, line_total, paydate, payment, reciever_address from oh_pay pay, oh_order_save o, oh_product p where pay.common_id=o.common_id and o.pid = p.pid';
  return db.execute(sql,[value, startindex, endindex])
  .then(rows=>rows[0])
}