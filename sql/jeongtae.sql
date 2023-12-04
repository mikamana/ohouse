
/*리뷰 베스트순*/
create view review_best
as
select ov.pid,ov.rid,om.nickname,ifnull(om.userimg,'https://images.unsplash.com/photo-1624274515979-32afb09402a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D') userimg,op.product_name,op.rating_avg,ov.review_content,ov.review_img,ov.review_score,substring(review_date,1,10) rdate from oh_review ov inner join oh_product op, oh_member om where op.pid = ov.pid and om.mid = ov.mid and op.pid = 1 order by review_score desc;
/* 리뷰 최신순*/
create view review_latest
as
select ov.pid,ov.rid,om.nickname,ifnull(om.userimg,'https://images.unsplash.com/photo-1624274515979-32afb09402a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D') userimg,op.product_name,op.rating_avg,ov.review_content,ov.review_img,ov.review_score,substring(review_date,1,10) rdate, review_date from oh_review ov inner join oh_product op, oh_member om where op.pid = ov.pid and om.mid = ov.mid and op.pid = 1 order by review_date desc;
/*리뷰 베스트순*/
select * from review_best where pid = 1 and rid between 1 and 3;
/* 리뷰 최신순*/
select * from review_latest where pid = 1 and rid between 1 and 3;
/* 리뷰 Cnt 포함 */
select 
ov.rid,om.nickname,ifnull(om.userimg,0) userimg,op.product_name,op.rating_avg,ov.review_content,ov.review_img,ov.review_score,substring(review_date,1,10) rdate, review_date,(select ifnull(count(*),1) as cnt from oh_review where pid = 1) cnt
from oh_review ov inner join oh_product op, oh_member om 
where op.pid = ov.pid and om.mid = ov.mid and op.pid = 1 and rid between 1 and 3 order by review_date asc;
/* 리뷰 Insert*/
insert into oh_review(mid,pid,review_content,review_img,review_date,review_score) values(?,?,?,?,sysdate(),?);
/* 리뷰 Get */
select ov.rid,om.nickname,ifnull(om.userimg,'https://images.unsplash.com/photo-1624274515979-32afb09402a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D') userimg,op.product_name,op.rating_avg,ov.review_content,ov.review_img,ov.review_score,substring(review_date,1,10) rdate from oh_review ov inner join oh_product op, oh_member om where op.pid = ov.pid and om.mid = ov.mid and op.pid = 1;

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

