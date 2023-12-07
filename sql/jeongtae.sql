
/*리뷰 베스트순*/
create view review_best
as
select ov.pid,ov.rid,om.nickname,ifnull(om.userimg,'https://images.unsplash.com/photo-1624274515979-32afb09402a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D') userimg,op.product_name,op.rating_avg,ov.review_content,ov.review_img,ov.review_score,substring(review_date,1,10) rdate from oh_review ov inner join oh_product op, oh_member om where op.pid = ov.pid and om.mid = ov.mid and op.pid = 1 order by review_score desc;
/* 리뷰 최신순*/
create view review_latest
as
select ov.pid,ov.rid,om.nickname,ifnull(om.userimg,'https://images.unsplash.com/photo-1624274515979-32afb09402a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D') userimg,op.product_name,op.rating_avg,ov.review_content,ov.review_img,ov.review_score,substring(review_date,1,10) rdate, review_date from oh_review ov inner join oh_product op, oh_member om where op.pid = ov.pid and om.mid = ov.mid and op.pid = 1 order by review_date desc;


/* 리뷰 Insert*/
insert into oh_review(mid,pid,review_content,review_img,review_date,review_score) values(?,?,?,?,sysdate(),?);

/* 리뷰 총 개수와 평균 개수*/
select sum(rcount) sum, ifnull((SELECT truncate(AVG(review_score),2) FROM oh_review where pid = ?),0) AS avg_score from 
(select count(review_score) as rcount, review_score 
from oh_review ov 
inner join oh_product op, oh_member om 
where ov.pid = op.pid and om.mid = ov.mid and op.pid = ? 
group by review_score) as m;

/* 각 리뷰의 개수*/
select count(review_score) as rcount, review_score
from oh_review ov 
inner join oh_product op, oh_member om 
where ov.pid = op.pid and om.mid = ov.mid and op.pid = 28
group by review_score;
-- select count(*) from oh_review group by review_score;

/* 문의 테이블 생성 */

	-- purchase 구매여부 (구매,비구매) 
    -- 상품과 기타여부

create table oh_inquiry(

	qid int auto_increment primary key not null, -- 문의id
    mid varchar(100),-- 유저아이디
	pid int, -- 상품아이디
	qtype varchar(50), -- 문의유형
    qdate datetime,-- 문의시간
    qcontent varchar(500), -- 문의내용
    adate datetime, -- 답변날짜 
    acontent varchar(500), -- 답변내용
    secret_check boolean, -- 비밀글여부
    
	constraint oh_inquery_mid_fk foreign key(mid) references oh_member(mid) on update cascade on delete cascade,
    constraint oh_inquery_pid_fk foreign key(pid) references oh_product(pid) on update cascade on delete cascade
    
);

select * from oh_inquiry;

/* 문의 insert 예시 */
insert into oh_inquiry(mid,pid,qtype,qdate,qcontent,adate,acontent,secret_check) values('@','1','상품',sysdate(),'문의내용',sysdate(),'문의에 대한 답변입니다.',1);

/*
	
    --Get--
	-- 문의 총개수
	-- 최신순으로 정렬된 상태
    -- 답변완료여부
    -- 유저닉네임
    -- 문의가 등록된 날짜 + 시간
    -- 비밀글 여부 체크
    -- 문의 내용
    -- 답변 날짜
    -- 답변 내용
    -- 한페이지에 5개씩 보여야함 (페이지네이션)
		
*/

select ov.rid,om.nickname,ifnull(om.userimg,'https://images.unsplash.com/photo-1624274515979-32afb09402a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D') userimg,op.product_name,op.rating_avg,ov.review_content,ov.review_img,ov.review_score,substring(review_date,1,10) rdate from oh_review ov inner join oh_product op, oh_member om where op.pid = ov.pid and om.mid = ov.mid and ov.pid = 27;
select * from oh_review;

/*관리자페이지 참고 쿼리*/
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
		 where rno between 1 and 10 group by mid, memberList.total, count_review, count_order order by nickname desc;
insert into oh_review(mid,pid,review_content,review_img,review_date,review_score) values('@',124,1,1,sysdate(),1);

/*리뷰쿼리*/
select ov.rid,om.nickname,op.pid,ifnull(om.userimg,'0') userimg,op.product_name,op.rating_avg,ov.review_content,ov.review_img,ov.review_score,substring(review_date,1,10) rdate, review_date, (select ifnull(count(*),1) as cnt from oh_review where pid = 27) cnt 
from oh_review ov 
inner join oh_product op, oh_member om 
where op.pid = ov.pid and om.mid = ov.mid and op.pid = 27 order by review_date asc limit 0,10;

/*문의 쿼리*/
select rno,nickname,qtype,secret_check,qcontent,substring(qdate,1,10) qdate,ifnull(adate,0) adate,acontent,cnt 
from 
(select row_number() over (order by qdate desc) as rno,om.nickname,substring(oi.qdate,1,10) as qdate,secret_check,qtype,qcontent,adate,acontent,(select count(pid) as cnt from oh_inquiry where pid = 1 group by pid) cnt from oh_inquiry oi inner join oh_member om on oi.mid = om.mid where pid = 1 order by qdate desc) as m limit 0,5;

select * from oh_product;


/*
스크랩 만들 시 테이블
create table prd_scrap(
	
    mid -- 각 mid에 따른 스크랩
    pid -- pid 가 1인 상품에 대한 스크랩
    prd_scrap varchar(10)
	    
);

create table house_scrap(
	
    mid
	hid -- hid 가 1인 집사진에 대한 스크랩
	house_scrap varchar(10)

);
*/



