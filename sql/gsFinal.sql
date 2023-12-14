 -- ohouse 데이터테이블 사용
 use ohouse;
 select database();
drop table test1;
drop table test2;
create table test1(
	mid varchar(100) primary key
);

create table test2(
	mid varchar(100),
    nid int,
    constraint oh_review_mid_pk primary key(mid,nid),
    constraint oh_product_mid_fk foreign key(mid) references test1(mid) on update cascade on delete cascade
);

ALTER table test2 MODIFY nid INT NOT NULL AUTO_INCREMENT;



drop table oh_order;
drop table oh_cart;
drop table oh_review;
drop table oh_channel;
drop table oh_community;
drop table oh_product;
drop table oh_category;
drop table oh_member;

update oh_product set price_sale = null,price_origin = 58900 where pid = 59;
-- oh_product 오류 수정

select price_origin, price_sale, ifnull(round(price_origin - (price_origin * price_sale / 100),-2),price_origin) sale_price from oh_product;
select pid,category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,ifnull(format(round(price_origin - (price_origin * price_sale / 100),-2),0),format(price_origin,0)) sale_price,tag_free,coupon_percent,pdate,delivery_type from oh_product order by rating_avg desc;

desc oh_member;
select * from oh_member;
desc oh_category;
select * from oh_category;
desc oh_product;
select * from oh_product;
desc oh_review;
select * from oh_review;
desc oh_community;
select * from oh_community;
desc oh_channel;
select * from oh_channel;
desc oh_cart;
select * from oh_cart;
desc oh_order;
select * from oh_order;

create table oh_member(
	mid varchar(100) primary key,
    pass varchar(100) not null,
    nickname varchar(50) not null,
	phone varchar(20),
    homepage varchar(300),
    gender varchar(10),
    birthday varchar(30),
	userimg varchar(300),
    comment varchar(100),
    mdate datetime
);
create table oh_category (
    category_id int auto_increment primary key,
    category_name varchar(20) not null
);
create table oh_product(
    pid int auto_increment primary key,
    category_id int,
    product_image varchar(500),
    brand_name varchar(20),
    product_name varchar(100),
    rating_avg char(5),
    rating_review int,
    price_sale int,
    price_origin int,
    tag_free boolean,
    coupon_percent int,
    pdate datetime,
    delivery_type varchar(20),
    constraint oh_product_cid_fk foreign key(category_id) references oh_category(category_id) on update cascade on delete cascade
);
create table oh_review(
    rid int auto_increment primary key,
	mid varchar(100),
    pid int,
    review_content varchar(300),
    review_img varchar(300),
    review_date datetime,
    constraint oh_review_pid_fk foreign key(pid) references oh_product(pid) on update cascade on delete cascade,
	constraint oh_review_mid_fk foreign key(mid) references oh_member(mid) on update cascade on delete cascade
);
create table oh_community(
	hid int auto_increment primary key,
	mid varchar(100),	
	house_img varchar(300),
	house_title varchar(100),
	house_content varchar(500),
	constraint oh_community_mid_fk foreign key(mid) references oh_member(mid) on update cascade on delete cascade
);
create table oh_channel (
    channel_id int auto_increment primary key,
    channel_title varchar(20),
    channel_image varchar(900),
    channel_member int,
    channel_content int
);
create table oh_cart(
	cart_id int auto_increment primary key,
    pid int,
    mid varchar(100),
    qty int not null,
    cdate datetime,
    constraint cart_pid_fk foreign key(pid) references oh_product(pid),
    constraint cart_mid_fk foreign key(mid) references oh_member(mid)
);
create table oh_order(
	oid int auto_increment primary key,
	cart_id int,
	pid int,
	mid varchar(100),
	orderer_phone varchar(20),
	reciever_place varchar(50),
	reciever_name varchar(20),
	reciever_phone varchar(20),
	reciever_address varchar(100),
	reciever_request varchar(100),
	payment varchar(10),
	installment varchar(20),
	last_pay_price int,
	constraint car_pid_fk foreign key(pid) references oh_product(pid) on update cascade on delete cascade,
	constraint car_cart_id_fk foreign key(cart_id) references oh_cart(cart_id) on update cascade on delete cascade,
	constraint car_mid_fk foreign key(mid) references oh_member(mid) on update cascade on delete cascade
);

-- oh_category insert
insert into oh_category (category_name) values("크리스마스");
insert into oh_category (category_name) values("겨울용품");
insert into oh_category (category_name) values("가구");
insert into oh_category (category_name) values("패브릭");
insert into oh_category (category_name) values("가전·디지털");
insert into oh_category (category_name) values("주방용품");
insert into oh_category (category_name) values("식품");
insert into oh_category (category_name) values("데코·식물");
insert into oh_category (category_name) values("조명");
insert into oh_category (category_name) values("수납·정리");
insert into oh_category (category_name) values("생활용품");
insert into oh_category (category_name) values("생필품");
insert into oh_category (category_name) values("유아·아동");
insert into oh_category (category_name) values("반려동물");
insert into oh_category (category_name) values("캠핑·레저");
insert into oh_category (category_name) values("공구·DIY");
insert into oh_category (category_name) values("인테리어시공");
insert into oh_category (category_name) values("렌탈");
-- oh_member insert
insert into oh_member (mid, pass, nickname, userimg, mdate) values("hong@d-friends.co.kr","1234","홍길동","https://images.unsplash.com/photo-1589734004790-885767bec2ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("jimae@d-friends.co.kr","1234","일지매","https://images.unsplash.com/photo-1622898809226-eefe24316347?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("woodong@d-friends.co.kr","1234","강우동","https://images.unsplash.com/photo-1594094808932-389a7932df10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("samsoon_kim@d-friends.co.kr","1234","김삼순","https://images.unsplash.com/photo-1594188459847-b845413f6882?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("samsik@d-friends.co.kr","1234","오삼식","https://images.unsplash.com/photo-1603560723083-ef52b8597e2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("chikook@d-friends.co.kr","1234","김치국","https://images.unsplash.com/photo-1548426934-4e8582aceb26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("ahn@d-friends.co.kr","1234","안경태","https://images.unsplash.com/photo-1701244450186-cf76378d4c65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("yeosa@d-friends.co.kr","1234","박여사","https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("samo@d-friends.co.kr","1234","최사모","https://plus.unsplash.com/premium_photo-1701108112570-4413a5ae7090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("hyori_jung@d-friends.co.kr","1234","정효리","https://plus.unsplash.com/premium_photo-1698046366805-244eb4ca7913?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("gamja@d-friends.co.kr","1234","오감자","https://images.unsplash.com/photo-1700558057017-650f081dad60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("ilkook@d-friends.co.kr","1234","최일국","https://plus.unsplash.com/premium_photo-1701065893190-46f44657fbee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("hankook@d-friends.co.kr","1234","한국인","https://images.unsplash.com/photo-1696655496030-079414c31e06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("one@d-friends.co.kr","1234","이최고","https://images.unsplash.com/photo-1700639491303-a177c4402501?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("chichi@d-friends.co.kr","1234","박치기","https://images.unsplash.com/photo-1700587511615-ff4dd96a23c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("love@d-friends.co.kr","1234","한사랑","https://images.unsplash.com/photo-1700575019340-5ddcc1f4f31d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("yaya@d-friends.co.kr","1234","나도야","https://images.unsplash.com/photo-1700687537080-d64de0d6c084?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("comeon@d-friends.co.kr","1234","이리와","https://images.unsplash.com/photo-1678102354948-930b9c3bd851?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("give@d-friends.co.kr","1234","정주고","https://images.unsplash.com/photo-1699890767879-d56e745efb09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("haha@d-friends.co.kr","1234","고소해","https://plus.unsplash.com/premium_photo-1700353612873-6564c7bd5f6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("agikim@d-friends.co.kr","1234","김아기","https://images.unsplash.com/photo-1699746277651-3b1438122eaa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("agoh@d-friends.co.kr","1234","오암기","https://images.unsplash.com/photo-1699961722553-9ecf3f035bf0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("aikim@d-friends.co.kr","1234","박아이","https://images.unsplash.com/photo-1699800769234-e94e0ad0d69e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("angelchoi@d-friends.co.kr","1234","최천사","https://images.unsplash.com/photo-1700236822357-acc86d748ffc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("anidoor@d-friends.co.kr","1234","문애니","https://plus.unsplash.com/premium_photo-1698525281688-66ed07881284?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("antapark@d-friends.co.kr","1234","박안타","https://images.unsplash.com/photo-1700123287639-b8ffc3f50f02?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("arilee@d-friends.co.kr","1234","이아리","https://images.unsplash.com/photo-1700123287437-e56517cb594e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("arlee@d-friends.co.kr","1234","이어른","https://images.unsplash.com/photo-1699955980432-a2cebbbdd887?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("backkim@d-friends.co.kr","1234","김백제","https://images.unsplash.com/photo-1697664210419-63958ebae181?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("basicchoi@d-friends.co.kr","1234","최기본","https://images.unsplash.com/photo-1624274515979-32afb09402a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());

-- oh_product insert
-- 크리스마스
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166806703486909753.gif?gif=1&w=850&h=850&c=c&webp=1',
'레이스빈',
'[오늘의딜]LED 와이어 커튼 조명 전구 창문 장식 파티 라이트 크리스마스 트리 전구 소품',
'4.8',
4615,
4,
9900,
0,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169865831382515775.jpg?gif=1&w=850&h=850&c=c&webp=1',
'땡큐마더',
'NEW! 1.2M~1.5M 땡큐마더 크리스마스 트리 풀세트 6종',
'4.7',
2528,
34,
60900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169700932731120013.jpg?gif=1&w=850&h=850&c=c&webp=1',
'아웃팅',
'150~210cm 풍성빽빽 무장식 트리 크리스마스 트리',
'4.8',
2065,
11,
42900,
0,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163849632467550663.gif?gif=1&w=850&h=850&c=c&webp=1',
'베베데코',
'품절주의! 프리미엄 크리스마스 가랜드트리 풀세트 앰버 2size (전구+오너먼트+리모컨)',
'4.7',
1306,
34,
59700,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166968629475767371.jpg?gif=1&w=850&h=850&c=c&webp=1',
'하우쎈스',
'크리스마스트리 풀세트 와인/골드 1.0M-1.6M 7종+(예쁜 가랜드 증정)',
'4.8',
5445,
21,
37900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169830082081927057.jpg?gif=1&w=850&h=850&c=c',
'조아트',
'120~180cm 촘촘 크리스마스 트리 무장식트리 프리메라 파인트리',
'4.9',
1540,
7,
39900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166685966036272830.jpg?gif=1&w=850&h=850&c=c&webp=1',
'이플린',
'(깜짝이벤트 러그증정)크리스마스 신상 탑별 미니트리 풀세트 4종(핑크,그린) + 선물상자',
'4.8',
1012,
37,
31800,
0,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169898958603732851.jpeg?gif=1&w=850&h=850&c=c&webp=1',
'바시움플라워',
'(무드등증정EVENT!) 정품캐롤8곡+말따라하기 춤추는 댄싱 트리 인형 크리스마스 소품',
'4.8',
1183,
30,
22410,
0,
5,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163696601492151872.jpg?gif=1&w=850&h=850&c=c&webp=1',
'마쉬매리골드',
'[당일발송]크리스마스 몰디브 와이어 지네 전구 200구 6미터(전자파 적합인증 완료)',
'4.6',
1473,
61,
35900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167049350852017625.png?gif=1&w=850&h=850&c=c&webp=1',
'루시아이',
'대롱대롱 사다리 타는 산타 크리스마스 창문 벽장식 13types(소형~특대형)',
'4.8',
1139,
58,
11900,
0,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166996021932771936.jpg?gif=1&w=850&h=850&c=c&webp=1',
'젊은이마켓',
'줄타는 산타 장난감',
'4.5',
2012,
27,
10900,
0,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169891004786167701.jpg?gif=1&w=850&h=850&c=c&webp=1',
'조아트',
'150~180cm 볼륨빵빵 고급 PET 크리스마스 트리 무장식 트리',
'4.9',
484,
17,
44900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166208898676160953.jpg?gif=1&w=850&h=850&c=c&webp=1',
'빛내는사람들',
'LED 벽난로 불멍 불타는 무드등 G형',
'4.9',
622,
38,
40000,
0,
10,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/627873/1667200809586.jpg?gif=1&w=850&h=850&c=c&webp=1',
'베베데코',
'트윙클 크리스탈 크리스마스 비눗방울 미니트리 풀세트 (오너먼트+전구+리모컨)',
'4.9',
507,
30,
24900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170132004417828644.gif?gif=1&w=850&h=850&c=c&webp=1',
'데이홈',
'크리스마스 코튼볼 벽트리 만들기 패키지 5종',
'4.8',
1578,
10,
28900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/15584277/1696499374672.png?gif=1&w=850&h=850&c=c&webp=1',
'데미무드',
'(무음모드 추가) 23년형 NEW 오르락 내리락 줄타는 산타 크리스마스 창문 벽 장식 소품',
'4.6',
249,
35,
15300,
0,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163637690381619499.jpg?gif=1&w=850&h=850&c=c&webp=1',
'하우쎈스',
'크리스마스트리 자작나무 LED 감성트리 60cm~210cm- 6size',
'4.8',
2191,
40,
24900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170053911064886906.jpg?gif=1&w=850&h=850&c=c&webp=1',
'하우쎈스',
'2023신상! 크리스마스트리 라보니아 무장식 트리 고급PE혼합 90cm~210cm',
'4.9',
421,
48,
49900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163523646007814259.jpg?gif=1&w=850&h=850&c=c&webp=1',
'꾸미까',
'레드베리 솔가지 크리스마스 조화',
'4.8',
482,
35,
12800,
0,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
1,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170131291499979795.gif?gif=1&w=850&h=850&c=c&webp=1',
'레나에너지',
'LED 크리스마스 트리 오브제 선물 움직이는 기차 오르골 무드등 소품 3종(캐롤 8곡)',
'4.5',
436,
21,
35000,
0,
null,
sysdate(),
'td'
);

-- 겨울용품
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169217376079328653.jpg?gif=1&w=850&h=850&c=c&webp=1',
'더프리그',
'워셔블 단모 사계절 극세사 로망스 먼지없는 러그 카페트 4color',
'4.8',
14274,
47,
30300,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170081661325121618.jpg?gif=1&w=850&h=850&c=c&webp=1',
'심플먼트',
'[10%쿠폰]이지케어 워셔블 슬러브 러그 카페트',
'4.9',
16366,
21,
37900,
1,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167903786877164672.jpg?gif=1&w=850&h=850&c=c&webp=1',
'바이빔',
'선데이 사계절 워셔블 러그 카페트 7size 4colors',
'4.9',
51251,
32,
28000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165164011950449378.jpg?gif=1&w=850&h=850&c=c&webp=1',
'리앤룸',
'[5%쿠폰](1+1) 소프트 암막커튼 6컬러 3size 창문,거실,안방,아일렛',
'4.5',
14500,
43,
29800,
1,
5,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162546803477431867.jpg?gif=1&w=480&h=480&c=c',
'스타일링홈',
'[쿠폰][1+1]100% 빛차단 냉기차단 방한/방풍 온도조절 3중직 암막커튼',
'4.8',
23509,
49,
58100,
0,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169821856938204382.jpg?gif=1&w=850&h=850&c=c&webp=1',
'헬로우슬립',
'[10%쿠폰/사은품증정] 부드러운 카스테라 항균 옥수수솜 간절기/사계절 차렵이불세트',
'4.9',
28054,
37,
57300,
0,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169814263982655850.jpg?gif=1&w=850&h=850&c=c&webp=1',
'마틸라',
'[오늘의딜][5%쿠폰]NEW보송따뜻 무브 먼지없는 세미 극세사 차렵이불세트 18colors',
'4.8',
15512,
46,
88200,
0,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168655051288613510.jpg?gif=1&w=850&h=850&c=c&webp=1',
'이니띠움',
'사계절 워셔블 모던 러그 카페트 거실 대형 5size 8colors',
'4.8',
26316,
41,
15300,
1,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168990682092052237.jpg?gif=1&w=850&h=850&c=c&webp=1',
'마틸라',
'[5%쿠폰]복숭아촉감 먼지없는 스테이 차렵이불세트 SS/Q/K 12colors',
'4.8',
21473,
44,
71500,
0,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165059626358949126.jpg?gif=1&w=850&h=850&c=c&webp=1',
'데코지오',
'[오늘의딜][맞춤]브라우니 린넨 암막커튼 핀형/아일렛형/형상기억 33색상',
'4.6',
8246,
39,
32900,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164516297081764709.jpg?gif=1&w=850&h=850&c=c&webp=1',
'베이직톤',
'[5%쿠폰]클린코튼 고밀도 순면60수 광폭 호텔식 옥수수솜 차렵이불 6색상',
'4.9',
11983,
34,
98800,
1,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169516822438266304.jpg?gif=1&w=850&h=850&c=c&webp=1',
'베이직톤',
'[오늘의딜][NEW컬러]노스베어 프리미엄 라셀10mm 장모극세사 차렵이불10색상',
'4.8',
9252,
32,
103700,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1545117241_100615_1.jpg?gif=1&w=850&h=850&c=c&webp=1',
'한빛카페트',
'[오늘의딜] [10%쿠폰] 에코퍼 양털러그 겸 소파패드 8size/5color',
'4.8',
9859,
30,
28700,
1,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168921668939447557.jpg?gif=1&w=850&h=850&c=c&webp=1',
'까르데코',
'[10%쿠폰]메리미 이중레이스 암막커튼 2장 4size',
'4.8',
13845,
18,
60900,
1,
10,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169216523874239556.jpg?gif=1&w=850&h=850&c=c',
'스칸디앤홈',
'[10%쿠폰] 알러지케어! 크레용 팝컬러 워셔블 러그 카페트 8size',
'4.8',
5429,
60,
25000,
1,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169466071692207954.jpg?gif=1&w=850&h=850&c=c&webp=1',
'아르페지오',
'[5%쿠폰/단독] 1+1 부드러운 극세사 밍크 담요 11종 택2 3사이즈',
'4.9',
7517,
28,
18900,
0,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169873775936462364.png?gif=1&w=850&h=850&c=c&webp=1',
'픽켄드',
'[오늘의딜][단독] 두부처럼 몽글몽글한 촉감 두부이불 겨울차렵 / 사계절 이불세트 21컬러',
'4.9',
9124,
45,
66200,
0,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168679423437965593.jpg?gif=1&w=850&h=850&c=c&webp=1',
'데코지오',
'1+1 쉐도우 100% 빛차단 방한 방풍 암막커튼 빠른 맞춤제작 11컬러',
'4.8',
5237,
27,
41020,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169692192277637371.jpg?gif=1&w=850&h=850&c=c',
'쁘리엘르',
'1+1 햇빛차단! 솔리드 아일렛 암막커튼 5size 16컬러',
'4.8',
4327,
55,
28900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
2,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168774136219290693.jpg?gif=1&w=850&h=850&c=c&webp=1',
'에이트룸',
'뮤즈 순면 고밀도 바이오워싱 호텔침구 알러지케어 차렵이불세트 SS/Q',
'4.8',
7078,
45,
128500,
1,
5,
sysdate(),
null
);
-- 가구

insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165580847056056090.jpg?gif=1&w=850&h=850&c=c&webp=1',
'휴도',
'편안한 제주 25cm 필로우탑 본넬스프링 침대 매트리스 S/SS/Q/K',
'4.8',
17786,
56,
249000,
0,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169936744105428059.jpg?gif=1&w=850&h=850&c=c&webp=1',
'노르웨이숲',
'침대 프레임 매트리스 깔판 저상형 패밀리 받침대 미니싱글 600',
'4.8',
15396,
71,
69000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164325182439107818.jpg?gif=1&w=850&h=850&c=c&webp=1',
'영가구',
'[리뷰 25,000개] 베가 폴라 투명 접이식의자 17colors 대량구매추가할인',
'4.8',
25491,
89,
240000,
0,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167825809918046066.jpg?gif=1&w=850&h=850&c=c&webp=1',
'베스트리빙',
'[5%쿠폰][New컬러출시] 애슐리 원목 전신거울 7colors',
'4.8',
27038,
57,
79900,
0,
5,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170125076777464699.jpg?gif=1&w=850&h=850&c=c&webp=1',
'먼데이하우스',
'[5%쿠폰] 허리가 편안한 호텔식 숙면 포켓스프링 필로우탑 매트리스(25cm)',
'4.9',
13409,
41,
185000,
0,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168264933924553635.jpg?gif=1&w=850&h=850&c=c&webp=1',
'상도가구',
'사이즈 맞춤제작 몬스터랙 조립식 앵글 모듈 공간활용 수납선반 팬트리',
'4.8',
7447,
33,
29900,
1,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166502414205763831.jpg?gif=1&w=850&h=850&c=c&webp=1',
'우드레이',
'[5%쿠폰] 블랑 좌식 접이식 상 거실테이블 3size(보호캡 증정)',
'4.9',
7531,
74,
68900,
0,
5,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/157242782195255523.jpg?gif=1&w=850&h=850&c=c&webp=1',
'두닷',
'[쿠폰]콰트로 에어 데스크 20size 5colors',
'4.9',
9495,
20,
125000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165458689891224456.jpg?gif=1&w=850&h=850&c=c&webp=1',
'하벤홈',
'[단독특가] 9존 인생 매트리스토퍼 3colors (MS/SS/Q)',
'4.8',
18976,
54,
69900,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/158918224688268235.jpg?gif=1&w=850&h=850&c=c&webp=1',
'MF매직하우스',
'무볼트 드레스룸 조립식 멀티행거',
'4.9',
9399,
21,
51000,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166693523964443292.jpg?gif=1&w=850&h=850&c=c&webp=1',
'다니카',
'[단독] 뮤즈 편한 팔걸이 컴퓨터 메쉬 사무용 의자',
'4.8',
5753,
36,
75300,
0,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168078268516671253.jpg?gif=1&w=850&h=850&c=c&webp=1',
'아이와비',
'카페 방수패브릭 접이식 소파베드 4colors',
'4.8',
14694,
43,
209000,
1,
5,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159430870818252136.jpg?gif=1&w=850&h=850&c=c&webp=1',
'먼데이하우스',
'[쿠폰가 10,355원] 순수원목 선반장 3colors (가로2단)',
'4.8',
46683,
54,
23900,
0,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165882516717645937.jpg?gif=1&w=850&h=850&c=c&webp=1',
'한샘',
'한샘몰pick티렌토 리세 아쿠아텍스 3인용 패브릭 소파 3colors',
'4.7',
5311,
38,
440000,
0,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169329424313528628.jpg?gif=1&w=850&h=850&c=c&webp=1',
'웰퍼니쳐',
'[쿠폰] 허리엔 더매직 허리특화 포켓스프링 매트리스 S/SS/Q/K/SK',
'4.9',
7617,
35,
308000,
1,
5,
sysdate(),
'od'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168724924720041320.jpg?gif=1&w=850&h=850&c=c&webp=1',
'리샘',
'캐더린 LED조명 통서랍 수납침대 SSQ(매트리스 선택)',
'4.7',
8249,
17,
219210,
0,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169294891361531125.jpg?gif=1&w=850&h=850&c=c&webp=1',
'두닷',
'[쿠폰]콰트로 데스크 시리즈 19size 8colors (800~2000mm)',
'4.8',
9838,
20,
103000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163875327222440461.jpg?gif=1&w=850&h=850&c=c&webp=1',
'MF매직하우스',
'무볼트 드레스룸 조립식 싱글 바지걸이 행거',
'4.8',
3890,
36,
71900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164438410420415212.jpg?gif=1&w=850&h=850&c=c&webp=1',
'먼데이하우스',
'[쿠폰가 50,065원] CLEAR 강화유리 거실테이블/타원형 소파테이블',
'4.7',
3810,
null,
58900,
0,
15,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
3,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167213115581394306.jpg?gif=1&w=850&h=850&c=c&webp=1',
'어그리어블리',
'[당일출고] 노프레임 비정형 웨이브 전신거울 A-4 + 원목/실버 받침대 선택',
'4.9',
3192,
64,
129000,
0,
5,
sysdate(),
null
);
-- 패브릭
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169217376079328653.jpg?gif=1&w=850&h=850&c=c&webp=1',
'더프리그',
'워셔블 단모 사계절 극세사 로망스 먼지없는 러그 카페트 4color',
'4.9',
14274,
47,
30300,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170081661325121618.jpg?gif=1&w=850&h=850&c=c&webp=1',
'심플먼트',
'[10%쿠폰]이지케어 워셔블 슬러브 러그 카페트',
'4.8',
16367,
21,
37900,
1,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167903786877164672.jpg?gif=1&w=850&h=850&c=c&webp=1',
'바이빔',
'선데이 사계절 워셔블 러그 카페트 7size 4colors',
'4.8',
51252,
32,
28000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165164011950449378.jpg?gif=1&w=850&h=850&c=c&webp=1',
'리앤룸',
'[5%쿠폰](1+1) 소프트 암막커튼 6컬러 3size 창문,거실,안방,아일렛',
'4.5',
14500,
43,
29800,
1,
5,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162546803477431867.jpg?gif=1&w=850&h=850&c=c',
'스타일링홈',
'[쿠폰][1+1]100% 빛차단 냉기차단 방한/방풍 온도조절 3중직 암막커튼',
'4.8',
23509,
49,
58100,
0,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169286188055263637.jpg?gif=1&w=850&h=850&c=c&webp=1',
'타카타카',
'[오늘의딜]스탠다드/항균 WP워터쉴드 방수매트리스커버 10사이즈',
'4.9',
58253,
58,
23900,
1,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162303132447303472.jpeg?gif=1&w=850&h=850&c=c',
'아엠홈',
'[5%쿠폰][맞춤] 비침없는 도톰 레이스/쉬폰커튼(나비주름/핀형/봉집)',
'4.8',
30922,
41,
28600,
0,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169821856938204382.jpg?gif=1&w=850&h=850&c=c&webp=1',
'헬로우슬립',
'[10%쿠폰/사은품증정] 부드러운 카스테라 항균 옥수수솜 간절기/사계절 차렵이불세트',
'4.9',
28054,
37,
57300,
0,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169337139276053154.jpg?gif=1&w=850&h=850&c=c&webp=1',
'한빛카페트',
'[10%쿠폰] 헤링본 워셔블 사이잘룩 사계절 러그카페트 9size 8colors',
'4.9',
42296,
46,
14900,
1,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169814263982655850.jpg?gif=1&w=850&h=850&c=c&webp=1',
'마틸라',
'[오늘의딜][5%쿠폰]NEW보송따뜻 무브 먼지없는 세미 극세사 차렵이불세트 18colors',
'4.7',
15512,
46,
88200,
0,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168655051288613510.jpg?gif=1&w=850&h=850&c=c&webp=1',
'이니띠움',
'사계절 워셔블 모던 러그 카페트 거실 대형 5size 8colors',
'4.8',
26316,
41,
15300,
1,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168990682092052237.jpg?gif=1&w=850&h=850&c=c&webp=1',
'마틸라',
'[5%쿠폰]복숭아촉감 먼지없는 스테이 차렵이불세트 SS/Q/K 12colors',
'4.8',
21473,
44,
71500,
0,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165059626358949126.jpg?gif=1&w=850&h=850&c=c&webp=1',
'데코지오',
'[오늘의딜][맞춤]브라우니 린넨 암막커튼 핀형/아일렛형/형상기억 33색상',
'4.6',
8247,
39,
32900,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164516297081764709.jpg?gif=1&w=850&h=850&c=c&webp=1',
'베이직톤',
'[5%쿠폰]클린코튼 고밀도 순면60수 광폭 호텔식 옥수수솜 차렵이불 6색상',
'4.9',
11983,
34,
98800,
1,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169516822438266304.jpg?gif=1&w=850&h=850&c=c&webp=1',
'베이직톤',
'[오늘의딜][NEW컬러]노스베어 프리미엄 라셀10mm 장모극세사 차렵이불10색상',
'4.9',
9252,
32,
103700,
1,
5,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168983523546417148.jpg?gif=1&w=850&h=850&c=c&webp=1',
'심플먼트',
'[단독] DIY 방염 타일카페트 (50x50cm)',
'4.8',
9662,
22,
36900,
0,
7,
sysdate(),
null
);insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/924746/1698822928561.jpg?gif=1&w=850&h=850&c=c',
'창안애',
'[맞춤] 원목 오동나무 우드블라인드 42colors',
'4.7',
12296,
null,
17300,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169889350272266517.jpg?gif=1&w=850&h=850&c=c&webp=1',
'꾸밈하우스',
'[오늘의딜]크리스마스 감성 빈티지 체크 식탁보 테이블보 홈카페 가리개 덮개 3사이즈 3색상',
'4.8',
10169,
52,
19900,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1545117241_100615_1.jpg?gif=1&w=850&h=850&c=c',
'한빛카페트',
'[오늘의딜] [10%쿠폰] 에코퍼 양털러그 겸 소파패드 8size/5color',
'4.8',
9859,
30,
28700,
1,
10,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
4,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168921668939447557.jpg?gif=1&w=850&h=850&c=c&webp=1',
'까르데코',
'[10%쿠폰]메리미 이중레이스 암막커튼 2장 4size',
'4.9',
13845,
18,
60900,
1,
10,
sysdate(),
'td'
);

-- 가전 디지털

insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169984263935864379.jpg?gif=1&w=850&h=850&c=c&webp=1',
'에코백스',
'디봇 T10 옴니 올인원 로봇청소기 / 자동먼지비움 / 물걸레세척',
'4.9',
378,
28,
1190000,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167461211113781617.jpg?gif=1&w=850&h=850&c=c&webp=1',
'삼성전자',
'비스포크 그랑데AI 세탁기 건조기 세트 24+19 화이트',
'4.8',
515,
44,
3600000,
1,
7,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168592216390251815.jpg?gif=1&w=850&h=850&c=c&webp=1',
'삼성전자',
'[오늘의딜]185.9만 비스포크 김치냉장고 4도어 RQ49C94Y1AP 1등급 490L',
'4.9',
41,
32,
2949000,
1,
6,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170011460083433059.jpg?gif=1&w=850&h=850&c=c&webp=1',
'LG전자',
'LG 스탠바이미 프라이빗 스마트 스크린 TV 27ART10CKPL',
'4.9',
303,
2,
1090000,
1,
null,
sysdate(),
'fd'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167505954569058804.jpg?gif=1&w=850&h=850&c=c&webp=1',
'LG전자',
'LG 디오스 노크온 오브제컬렉션 T873MEE312',
'4.9',
886,
28,
2800000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169571280543333268.jpg?gif=1&w=850&h=850&c=c&webp=1',
'곰표한일전자',
'(혜택가28,710원~)전자파 걱정X 무자계 안심 전기요 전기장판 전기/카본탄소매트',
'4.7',
6653,
30,
45900,
1,
10,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=850&h=850&c=c&webp=1',
'LG전자',
'[오늘의딜] 트롬 오브제컬렉션 워시타워 W20WANQ',
'4.9',
1369,
16,
3039000,
1,
null,
sysdate(),
'fd'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168629888808618522.jpg?gif=1&w=850&h=850&c=c&webp=1',
'LG전자',
'LG노트북 16ZD90RU-GX56K 혜택가158만원 16GB/512GB/WIN11홈',
'4.9',
5,
10,
1900000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165456111266108492.jpg?gif=1&w=850&h=850&c=c&webp=1',
'모온',
'모온x오늘의집 콜라보 뉴오비큠 무선청소기+14,000원 상당 헤파필터 추가증정',
'4.9',
9171,
10,
299000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164497864137030916.jpg?gif=1&w=850&h=850&c=c&webp=1',
'삼성전자',
'비스포크 제트 무선청소기220W VS20B956AXE',
'4.9',
735,
33,
919000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164032981730100118.jpg?gif=1&w=850&h=850&c=c&webp=1',
'삼성전자',
'[오늘의딜] RP13C1022S9 김치냉장고 뚜껑형 126리터 신형',
'4.9',
75,
30,
679000,
1,
6,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167290049066133640.jpg?gif=1&w=850&h=850&c=c&webp=1',
'아이닉',
'[오늘의집 혜택가 14.8만] 무선청소기 엘리트 / UV 살균브러시 탑재',
'4.9',
21316,
24,
209700,
1,
10,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170080619377167056.jpg?gif=1&w=850&h=850&c=c&webp=1',
'에어메이드',
'[오집단독] 24년 9L 가열식 대용량 복합식 스마트 가습기 앱연동 리모콘 AMH-9000',
'4.8',
2883,
56,
249000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168551926728688379.jpg?gif=1&w=850&h=850&c=c&webp=1',
'삼성전자',
'비스포크 3도어 RR40C7905AP+RZ34C7905AP+RQ34C7915AP',
'4.9',
11,
49,
6997000,
1,
4,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167160660320327062.png?gif=1&w=850&h=850&c=c&webp=1',
'[리퍼]삼성전자',
'[리퍼] 설치배송 + 추가금NO 65형 4K UHD 스마트TV UN65TU7000',
'4.8',
271,
58,
1500000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169890405507935461.jpg?gif=1&w=850&h=850&c=c&webp=1',
'LG전자',
'[주말특가]LG 담을수록 혜택! 가전패키지(냉장고 김치냉장고 워시타워 TV 스타일러 등)',
'4.9',
6,
26,
8380000,
1,
8,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166131669433751075.jpeg?gif=1&w=850&h=850&c=c&webp=1',
'미닉스',
'[오늘의딜][파격사은품] NEW 미닉스 미니 건조기 3kg',
'4.9',
10686,
36,
469000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166970791991835928.jpg?gif=1&w=850&h=850&c=c&webp=1',
'LG전자',
'디오스 김치톡톡 스탠드형 김치냉장고 K337S143 327L',
'4.9',
824,
35,
2000000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170053003847634254.jpg?gif=1&w=850&h=850&c=c&webp=1',
'LG전자',
'LG UHD TV 75UQ8300ENA 189cm 울트라HD',
'4.9',
217,
17,
1890000,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
5,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166357452294226874.jpg?gif=1&w=850&h=850&c=c&webp=1',
'삼성전자',
'냉장고 RS84B5041WW 846리터 푸드쇼케이스 메탈쿨링 스노우화이트 공식인증점',
'4.9',
153,
44,
1790000,
1,
null,
sysdate(),
'fd'
);

-- 주방용품
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165517193063732471.gif?gif=1&w=850&h=850&c=c&webp=1',
'바탕',
'[10%쿠폰] 강력논슬립 올스텐 일반형 와이드형 2종 경사물빠짐 수세미거치대',
'4.8',
7767,
19,
16000,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169889350272266517.jpg?gif=1&w=850&h=850&c=c&webp=1',
'꾸밈하우스',
'[오늘의딜]크리스마스 감성 빈티지 체크 식탁보 테이블보 홈카페 가리개 덮개 3사이즈 3색상',
'4.9',
10169,
52,
19900,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166200002169429992.jpg?gif=1&w=850&h=850&c=c&webp=1',
'달팽이리빙',
'퀴진드마망 커트러리 순수 4인 수저세트(숟가락+젓가락)',
'4.9',
10595,
51,
26500,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167205207942204436.jpg?gif=1&w=850&h=850&c=c&webp=1',
'깐깐공주',
'롤로아 방수가죽 식탁보 테이블보 테이블커버 16color12size',
'4.9',
5486,
41,
22000,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164454470372369578.jpg?gif=1&w=850&h=850&c=c&webp=1',
'창신리빙',
'[단독특가] 주방 길이조절 씽크대 선반',
'4.7',
8039,
33,
30000,
1,
10,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165882093087605655.jpg?gif=1&w=850&h=850&c=c&webp=1',
'이브리영',
'자동물빠짐 연마제없는 304 올스텐 2단 식기건조대+수저통+접시꽂이+도마걸이',
'4.9',
2304,
5,
59900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159297502813945250.jpg?gif=1&w=850&h=850&c=c&webp=1',
'카모메키친',
'베스트셀러! 카모메 수저 4인세트 10colors',
'4.8',
17288,
30,
28000,
0,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1533262788001_5pgXlLmTr.jpg?gif=1&w=850&h=850&c=c&webp=1',
'리빙해피',
'견고한 이중와이어 마감! 모먼트 스텐 식기건조대',
'4.8',
17785,
66,
89000,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166322247097900266.jpg?gif=1&w=850&h=850&c=c&webp=1',
'THE살림',
'[오늘의딜] 올스텐304 사선형 물빠짐 수세미 거치대+사은품3종',
'4.9',
5457,
28,
18000,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162546056108326451.jpeg?gif=1&w=850&h=850&c=c&webp=1',
'밧드야',
'음쓰통계의 샤넬! 18-8 풀스텐 음식물쓰레기통 3L',
'4.8',
13112,
36,
55000,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162255997380538348.jpeg?gif=1&w=850&h=850&c=c',
'슈나츠',
'완판 세라믹코팅 주방칼 6종세트 + 도마증정',
'4.8',
16542,
35,
51300,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/158373210057972854.jpg?gif=1&w=850&h=850&c=c&webp=1',
'롬버스',
'(후기 9천개!) 국내 생산 오리지널 마그넷 키친타올홀더',
'4.8',
10017,
36,
29000,
0,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167837559018053253.jfif?gif=1&w=850&h=850&c=c&webp=1',
'클로이홈데코',
'[쿠폰가17,640원][평생A/S]높이&너비조절 전자레인지 선반 2colors',
'4.8',
1984,
20,
24500,
1,
10,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162610200871229719.jpeg?gif=1&w=850&h=850&c=c&webp=1',
'스토에버',
'안전하고 오래쓰는 TPU 인덱스도마세트 도마걸이형 3P',
'4.8',
10084,
45,
54900,
1,
null,
sysdate(),
null
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162875498820902124.jpg?gif=1&w=850&h=850&c=c&webp=1',
'리브인홈',
'길이조절 주방선반 싱크대 씽크대 정리 선반',
'4.6',
5635,
26,
7900,
0,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167221527489189230.jpg?gif=1&w=850&h=850&c=c&webp=1',
'실바트',
'[1+1]국내생산 홈쇼핑 완판! 까리노 IH인덕션 사각팬 프라이팬/웍/냄비',
'4.9',
1475,
18,
36900,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162685908851850845.jpg?gif=1&w=850&h=850&c=c',
'달팽이리빙',
'[와이드형 출시] 흡착력 좋은 실리콘 싱크대 물막이 (5size/3color)',
'4.9',
7786,
52,
20000,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167686051567898937.jpg?gif=1&w=850&h=850&c=c&webp=1',
'노와',
'독일 명품 IH쿡웨어 7P세트(멀티핸들포함)',
'4.8',
13097,
55,
159000,
1,
5,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164974964019540537.jpg?gif=1&w=850&h=850&c=c&webp=1',
'엠지엠씨',
'플루딕 진공 음식물쓰레기통 (2L/3L 겸용)',
'4.8',
9694,
7,
26800,
1,
null,
sysdate(),
'td'
);
insert into oh_product(
category_id,
product_image,
brand_name,
product_name,
rating_avg,
rating_review,
price_sale,
price_origin,
tag_free,
coupon_percent,
pdate,
delivery_type
) values(
6,
'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169900488775992648.jpg?gif=1&w=850&h=850&c=c&webp=1',
'히츠키코보',
'타블도트 모던 2인 식기세트 그릇세트 신혼 집들이 그릇',
'4.8',
6403,
20,
44000,
0,
null,
sysdate(),
'td'
);
-- 식품
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168190267016108613.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '오뚜기',
            '[최대혜택가 17,926원] 11.29원데이! 오뚜기밥 흰밥 200g*24개(1박스)',
            5,
            1296,
            20,
            37500,
            1,
            11,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170124009029694340.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '청정원',
            '[4+2] 파스타소스 600g*4병 + 스파게티면 250g*2개',
            5,
            4471,
            null,
            22740,
            1,
            11,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169820171366695533.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '동원',
            '동원참치 85g*12캔 3종 (라이트스탠다드/고추/콘참치)',
            5,
            4330,
            25,
            17980,
            1,
            11,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166857599888335048.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '맛꾼',
            '[오늘의딜] 산지직송 제주 햇 노지 조생 감귤 4.5kg',
            5,
            1527,
            69,
            23800,
            1,
            11,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169024972553460233.jpg?gif=1&w=480&h=480&c=c&webp=1',
            'fresheasy',
            '[오늘의딜] fresheasy 볶음밥*10팩 10종 골라담기',
            5,
            527,
            43,
            29910,
            1,
            11,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165908011272461963.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '일리',
            '캡슐커피 18캡슐 팩 12종 모음전 (일리머신 전용)',
            5,
            4194,
            35,
            15000,
            1,
            11,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/20325148/1679042369967.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '스파클',
            '생수 무라벨 500ml*40병',
            5,
            2321,
            21,
            9900,
            1,
            null,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170052449026444543.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '매일유업',
            '매일두유 고단백 190ml 48팩',
            5,
            987,
            15,
            37800,
            1,
            10,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169397545917786328.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '빈타이포타',
            '빈타이 베트남쌀국수 30팩 / 신상품 프리미엄 민짜이 버섯쌀국수 15팩',
            5,
            162,
            21,
            35890,
            1,
            null,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166901501667875976.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '순수본가',
            '10+10+10+10 연육75% 부산다대포 꼬치어묵 10개입*4봉',
            5,
            745,
            20,
            18600,
            1,
            null,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/1635921/1699320348272.jpg?gif=1&w=480&h=480&c=c&webp=1',
            'CJ제일제당',
            '[쿠폰가 25,991원] 햇반 205g*36개 외 잡곡밥/현미밥/곤약밥 모음전',
            5,
            50,
            9,
            36500,
            1,
            21,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169718105979981722.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '화접항',
            '[10+1] 포켓 쫄쫄이 꽃징어 모음전 / 구매수량별 사은품 증정',
            5,
            661,
            33,
            1490,
            1,
            10,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169526213686196208.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '웅진식품',
            '하늘보리 500ml*20입 등 건강차 5종 모음전',
            5,
            2521,
            20,
            18900,
            1,
            null,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167894783286132324.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '오쏘몰',
            '[해외] 오쏘몰 이뮨 액상+정제 30일 1+1(총60일)',
            5,
            704,
            24,
            199000,
            1,
            20,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170130210106425376.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '매일유업',
            '[매일유업]어메이징오트 오리지널 190ml*24팩',
            5,
            53,
            57,
            27900,
            1,
            10,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167892941390406978.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '욜로부로',
            '집밥연구소 100%수제 당일제조 반찬 5종세트',
            5,
            302,
            43,
            20900,
            1,
            10,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169285218148048838.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '명태잡는날',
            '백 명란젓 파지 400g / 1kg 알탕 구이 파치 파스타',
            5,
            246,
            31,
            18900,
            1,
            null,
            sysdate(),
            null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170029532066934190.png?gif=1&w=480&h=480&c=c&webp=1',
            '일리',
            '[리뷰이벤트] 18캡슐 팩 / 21캡슐 캔 모음',
            5,
            319,
            41,
            16500,
            1,
            null,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166417831665882454.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '웅진식품',
            '빅토리아 탄산수 500ml*20입 12종 모음전',
            5,
            1879,
            21,
            13900,
            1,
            10,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            7,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166800698543278448.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '유혜광돈까스',
            '2+2+2+2+2 수제통등심돈까스 10장(1팩에 2개/총5팩)/소스없음',
            5,
            112,
            32,
            26500,
            1,
            10,
            sysdate(),
            null);

-- 데코·식물

insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169768413988204060.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '에이센트',
            '(3+1)네이처 디퓨저 200ml + 드라이 플라워 (향 28종)',
            5,
            48660,
            29,
            13500,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166806703486909753.gif?gif=1&w=480&h=480&c=c&webp=1',
            '레이스빈',
            '[오늘의딜]LED 와이어 커튼 조명 전구 창문 장식 파티 라이트 크리스마스 트리 전구 소품',
            5,
            46717,
            4,
            9900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1548655760849_Vl7rfKH7.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '무아스',
            '퓨어 미니 LED 벽시계 3colors 집들이 신혼 선물',
            5,
            30193,
            26,
            21700,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169865831382515775.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '땡큐마더',
            'NEW! 1.2M~1.5M 땡큐마더 크리스마스 트리 풀세트 6종',
            5,
            2529,
            34,
            60900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169700932731120013.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '아웃팅',
            '150~210cm 풍성빽빽 무장식 트리 크리스마스 트리',
            5,
            2066,
            11,
            37900,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163849632467550663.gif?gif=1&w=480&h=480&c=c&webp=1',
            '베베데코',
            '품절주의! 프리미엄 크리스마스 가랜드트리 풀세트 앰버 2size (전구+오너먼트+리모컨)',
            5,
            1307,
            34,
            59700,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166968629475767371.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '하우쎈스',
            '크리스마스트리 풀세트 와인/골드 1.0M-1.6M 7종+(예쁜 가랜드 증정)',
            5,
            5446,
            21,
            37900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169898958603732851.jpeg?gif=1&w=480&h=480&c=c&webp=1',
            '바시움플라워',
            '(무드등증정EVENT!) 정품캐롤8곡+말따라하기 춤추는 댄싱 트리 인형 크리스마스 소품',
            5,
            1183,
            30,
            22410,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165352576327228826.gif?gif=1&w=480&h=480&c=c&webp=1',
            '헤트라스',
            '(1+1) 대용량 500ml 프리미엄 디퓨저 +선물박스 +리드스틱',
            5,
            4647,
            41,
            32260,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163479545782808724.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '더플라워마켓',
            '앤티크 골드브라운 파인트리전구풀세트',
            5,
            7641,
            42,
            59800,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163642967569359565.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '베베데코',
            '북유럽풍 크리스마스 국민벽트리 풀세트 5style',
            5,
            4199,
            36,
            34700,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169830943484012629.png?gif=1&w=480&h=480&c=c&webp=1',
            '데미무드',
            '(온오프 최저가)지네 전구 200구 LED 6m 크리스마스 와이어 조명 트리 장식 오너먼트',
            5,
            158,
            29,
            14900,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166807585179175997.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '에이치홈',
            '겨울 빈티지 크리스마스 소품 엽서 미니 포스터 트리 성탄절 카드 리스',
            5,
            205,
            47,
            1500,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165846598198581877.jpg?gif=1&w=480&h=480&c=c&webp=1',
            'MJK',
            '300 바닐라우드 무소음 원목 벽시계',
            5,
            1307,
            38,
            20000,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167055843599680585.png?gif=1&w=480&h=480&c=c&webp=1',
            '트렌데코',
            '크리스마스 미니 트리 오너먼트 조명 풀세트 6 design',
            5,
            455,
            17,
            39900,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169769799913506327.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '아프로캣',
            'Month on the wall 2024 리소그라피 달력 벽걸이 달력 캘린더',
            5,
            666,
            null,
            39900,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167218862176445518.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '요기나게',
            '데스크정리함 미니서랍 사무실 데스크 오거나이저 책상 사무용품 정리함',
            5,
            570,
            26,
            8900,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163584032869973847.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '더플라워마켓',
            '스노우결정볼 오너먼트 (3size)',
            5,
            628,
            33,
            5900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170113435888073930.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '플라워트리',
            '[LED전구증정]크리스마스장식 최고급 무장식 리스 대형리스 벽트리벽장식가랜드',
            5,
            85,
            32,
            8900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/161010346709276814.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '에이치홈',
            '벽 꾸미기 장식 레트로 감성 빈티지 홈카페 잡지 페이퍼 데코 포스터 세트',
            5,
            1935,
            39,
            8900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1606197828_111851_1.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '꾸미까',
            '레트로 크리스마스 트리 패브릭 포스터 2type',
            5,
            477,
            36,
            23400,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162864554484356205.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '위즈홈',
            '아로망 미니 수납 정리함 책상 서랍 책꽂이 4colors',
            5,
            2696,
            38,
            25900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164749377865086703.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '류블류샵',
            '향기로운 큐브 미니 집들이선물 캔들 9colors (선물포장)',
            5,
            4130,
            60,
            8900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            8,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169720444747044868.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '노르잇',
            '[오늘의딜][단독특가] 강력한 지지력! 높이 조절 다용도 투명 독서대 PR01A',
            5,
            439,
            23,
            38900,
            1,
            11,
            sysdate(),
			'td');


-- 조명
insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169223892652020937.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '올루미',
            '코니 아일랜드 플로어 장스탠드 조명(LED전구 증정)',
            5,
            16242,
            45,
            61000,
            1,
            null,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169145619855597000.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '아우어룸',
            '(스마트전구증정) 머쉬룸 장스탠드 순수 국내자체제작 조명 _7colors',
            5,
            7065,
            15,
            152640,
            1,
            null,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166806703486909753.gif?gif=1&w=480&h=480&c=c&webp=1',
            '레이스빈',
            '[오늘의딜]LED 와이어 커튼 조명 전구 창문 장식 파티 라이트 크리스마스 트리 전구 소품',
            5,
            4617,
            4,
            9900,
            1,
            null,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169223877989794918.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '올루미',
            '오로라 단스탠드 LED전구증정',
            5,
            33578,
            30,
            30000,
            1,
            null,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1500947643451_nFHEAthbo.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '마켓비',
            'RUSTA 장스탠드 11colors',
            5,
            22826,
            6,
            21000,
            1,
            null,
            sysdate(),
            'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/158976826251381577.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '밝히는가온',
            '무선 LED 멀티탁 센서등 무드등 조명(건전지)',
            5,
            12786,
            46,
            15900,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167339770813834080.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '렉슨',
            '미나 MINI LED 버섯램프 무드등 LH60 (C타입 충전,생활방수)',
            5,
            2899,
            20,
            50000,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163696601492151872.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '마쉬매리골드',
            '[당일발송]크리스마스 몰디브 와이어 지네 전구 200구 6미터(전자파 적합인증 완료)',
            5,
            1473,
            61,
            35900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169890323764314546.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '이케아',
            'LERSTA 플로어 장스탠드 (안전포장)',
            5,
            18436,
            4,
            34500,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168431336134392680.png?gif=1&w=480&h=480&c=c&webp=1',
            '레나에너지',
            '북유럽 플로어 슬림 장스탠드 LED 조명 2colors (리모컨 추가 가능)',
            5,
            1952,
            58,
            71100,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166208898676160953.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '빛내는사람들',
            'LED 벽난로 불멍 불타는 무드등 G형',
            5,
            623,
            38,
            40000,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163220665825529696.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '이케아',
            '파도 단스탠드 무드등 달조명 (안전포장)',
            5,
            5067,
            10,
            36500,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169700303822052709.png?gif=1&w=480&h=480&c=c&webp=1',
            '레나에너지',
            '[단독]미드센츄리 모던 머쉬룸 무드등 조명 7colors(밝기조절)',
            5,
            1695,
            50,
            29800,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167825941383636655.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '이케아',
            '포르소 단스탠드 독서등 (안전포장)',
            5,
            3460,
            3,
            37900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163348773088118510.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '트렌데코',
            '크리스마스 불멍무드등 LED 벽난로 잉크벽돌',
            5,
            709,
            5,
            27500,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/157476001015171020.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '마켓비',
            'VARNA 단스탠드 6colors E14 KS2246T',
            5,
            6697,
            45,
            19900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1554967133331_JPWQv.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '베스트조명',
            '파파 LED 와이드 스탠드 책상스탠드 2colors',
            5,
            5099,
            33,
            54400,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169890350323784941.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '이케아',
            '토가르프 장스탠드 (안전포장)',
            5,
            2523,
            7,
            27900,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169830943484012629.png?gif=1&w=480&h=480&c=c&webp=1',
            '데미무드',
            '(온오프 최저가)지네 전구 200구 LED 6m 크리스마스 와이어 조명 트리 장식 오너먼트',
            5,
            158,
            29,
            14900,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            9,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169837977127457372.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '조아트',
            '크리스마스트리 나무 조명 장식 쥬얼리 와이어전구/지네전구 USB전용',
            5,
            530,
            20,
            14900,
            1,
            null,
            sysdate(),
			'td');

-- 수납·정리

insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169285415427570295.png?gif=1&w=480&h=480&c=c&webp=1',
            '라다미노',
            '국내유일304스텐 슬림 미드센츄리모던 트롤리 2 size(3단/4단)',
            5,
            1887,
            7,
            40900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167462088232606937.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '홈앤하우스',
            '커브형 바디 프리미엄 원목 옷걸이 30개 (M,L)',
            5,
            34267,
            35,
            33900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169380507890468300.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '무타공마켓',
            '기스 걱정 없는 무타공 프리미엄 수납형 드라이기거치대 3colors',
            5,
            1664,
            55,
            20000,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169607552240587579.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '바이에스컴퍼니',
            '[오늘의딜] 2단 모듈 화장품 정리함 정리대 보관함 수납함 트레이 화장대 향수 미니 선반',
            5,
            1665,
            38,
            39000,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162699887765279169.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '메종드꼼마',
            '베스토 조립식 렌지대 수납 선반 600/800 3단',
            5,
            4268,
            53,
            59900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/158373210057972854.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '롬버스',
            '(후기 9천개!) 국내 생산 오리지널 마그넷 키친타올홀더',
            5,
            10016,
            36,
            29000,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168610145131641644.PNG?gif=1&w=480&h=480&c=c&webp=1',
            '홈앤하우스',
            '드디어 재입고! 모노 논슬립 라운딩 옷걸이 40개',
            5,
            22127,
            30,
            21500,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168429989674209256.png?gif=1&w=480&h=480&c=c&webp=1',
            '리프홈',
            '프리미엄 원형/사각 규조토 세라믹 칫솔꽂이 3P세트(3color)',
            5,
            3322,
            30,
            52500,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/157352503415512570.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '까사마루',
            '멀티 드레스룸 행거 2colors',
            5,
            4762,
            38,
            79000,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162875498820902124.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '리브인홈',
            '길이조절 주방선반 싱크대 씽크대 정리 선반',
            5,
            5635,
            26,
            7900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165059163489267959.webp?gif=1&w=480&h=480&c=c&webp=1',
            '무타공마켓',
            '못없이 붙이는 무타공 벽선반 3size 3colors',
            5,
            2832,
            18,
            6000,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167213100642163056.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '진심감성 (리빙)',
            '논슬립 어깨뿔방지 옷걸이 50개 5colors (니트/정장/맨투맨)',
            5,
            5958,
            63,
            84000,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163599302138473228.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '구디푸디',
            '슈즈렉 신발장 정리 슈즈 홀더 10개 세트',
            5,
            4204,
            25,
            15900,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169992658776479010.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '바탕',
            '[10%쿠폰] 국산 서랍정리함 화이트 욕실수납 욕실정리 함',
            5,
            6283,
            33,
            2700,
            1,
            null,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165950576152206995.JPG?gif=1&w=480&h=480&c=c&webp=1',
            '청년리빙',
            '[오늘의딜] 관리가 용이한! 라탄 빨래바구니 2size',
            5,
            6732,
            16,
            11900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167815475031300643.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '마켓비',
            'BRUG 스탠드행거 KS1002/LDR',
            5,
            12820,
            28,
            24900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169111371900385556.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '쓰임',
            '누적 12만개 판매, 마리벨 클래식 물빠짐 수저통 3P 세트 (4color)',
            5,
            9618,
            21,
            19000,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167333206531108657.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '라라밤',
            '뒤에있는 접시도 쏙! 슬라이딩 주방 접시정리대 (+물빠짐 받침대 포함)',
            5,
            518,
            39,
            32900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169810597458231863.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '플레노',
            '압축봉 길이조절 무타공 못없이 커튼봉 6size 2colors',
            5,
            3498,
            null,
            4800,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165155395776844126.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '엠에스리빙',
            '[단독특가] 1+1 접시정리대 (소)',
            5,
            11722,
            42,
			6900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/161535763461265640.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '네이쳐리빙',
            '(후기 7천개!) 높이가 달라 편한, 릴리브 물빠짐 도자기 수저통 2구 2colors',
            5,
            735200,
            30,
			11900,
            1,
            null,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            10,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162684939422299230.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '살림의기술',
            '(단단한 스틸 논슬립 어깨뿔방지 니트 옷걸이 30P',
            5,
            7370,
            49,
			36800,
            1,
            null,
            sysdate(),
			'td');

-- 생활용품

insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166968138247824455.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '네이쳐리빙',
            '[주말특가] 모던데일 재활용 분리수거함 2종 3P',
            5,
            23081,
            55,
            40000,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '코튼리빙',
            '[오늘의딜] 후기6만돌파! 40수 코마사 호텔수건 200g 10장',
            5,
            62260,
            62,
            79000,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162080010704079099.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '매직캔',
            '오토실링 입고! 냄새잡는 휴지통 히포 크롬 오토실링 21L 27L',
            5,
            19012,
            16,
            59000,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1555988928248_JC.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '모나코올리브',
            '[주말특가](10%쿠폰) 원터치 와이드 화이트 휴지통 10L',
            5,
            23532,
            35,
            13900,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166147480784888827.png?gif=1&w=480&h=480&c=c&webp=1',
            '모노플랫',
            '[전용봉투+스티커증정] 이동식 원터치 3단 분리수거함 2컬러',
            5,
            11733,
            24,
            39800,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169638181539266619.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '네이쳐리빙',
            '(TV상품)모노블 반전매력 재활용 분리수거함/빨래바구니 3P_3size',
            5,
            16795,
            55,
            19900,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162324120930876959.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '오디너리라이프',
            '더월드시리즈 호텔 수건 40수 코마사200g 10장 5colors',
            5,
            3512,
            14,
            70000,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162389838666334582.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '두리펀',
            '[오늘의딜] 이노센트 특대형 빨래건조대 6단',
            5,
            11758,
            60,
            54900,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169147838811479463.jpg?gif=1&w=480&h=480&c=c&webp=1',
            'O!Life',
            '국내산 40수 200g 디자인 프리미엄 호텔수건 5+5장 세트',
            5,
            855,
            43,
            99800,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169933065907475215.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '프랑코',
            '단독컬러! 스탠드 가정용 재활용 분리수거함 2단 +스티커증정',
            5,
            10394,
            50,
            62400,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169406188810732003.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '마리슈타이거',
            '[쿠폰가 59,800원] 인테리어가 되는 루미 자동센서 휴지통 20L (4colors)',
            5,
            1871,
            19,
            98100,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165968392077852106.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '무타공마켓',
            '원터치 슬림휴지통 욕실 틈새휴지통 10L 3colors',
            5,
            2637,
            47,
            26600,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169709608633547227.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '가담다',
            '(1+1) 전컬러 입고 ! 모던 인테리어 원터치 플라스틱 휴지통 20L 6colors',
            5,
            7244,
            10,
            19900,
            1,
            11,
            sysdate(),
			null);
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169387697775272186.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '달팽이리빙',
            '1+1 국내산 무독성 EVA 폭신한 미끄럼방지 물빠짐 욕실화',
            5,
            3940,
            50,
            25800,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169890949059701758.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '송월타올',
            '[5%쿠폰]30수/40수/뱀부얀 130g~210g 호텔수건10장[+사은품]',
            5,
            567,
            12,
            33000,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162252804235455140.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '내집의모든것',
            '심플무지 사각 원터치 종량제 휴지통 화장실 쓰레기통 10/20L',
            5,
            6648,
            25,
            15500,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169776002242488503.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '디얼리빙',
            '[쿠폰가10,900원]돌돌이 테이프클리너 10종세트(본체+거치대+긴봉+리필7개)',
            5,
            3970,
            30,
            17100,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169983316037085215.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '리벤스',
            '1+1 대용량 가정용 재활용 분리수거함 40L/60L',
            5,
            4700,
            25,
            19900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168170686249143074.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '소프트터치',
            '[단독] 순면 100% 모먼트 180g 무형광 자수 호텔수건 10매 6colors',
            5,
            1585,
            12,
            32900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163348404528595839.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '데코뷰',
            '[쿠폰가52,110원]프리미엄 원터치폴대 탑재 보온 난방텐트 SS/Q (홈캠핑 텐트)',
            5,
            1965,
            34,
            89000,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163460340825526478.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '한샘',
            '양날개 투웨이 메쉬건조망 빨래건조대 65cm살대',
            5,
            1629,
            20,
            69900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168050845682037750.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '프랑코',
            '단독컬러! 스탠드 가정용 재활용 분리수거함 2단(트윈형)+스티커증정',
            5,
            2592,
            47,
            72500,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168802222377255215.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '바디럽',
            '[쿠폰가34,110원][오늘의딜]퓨어썸 샤워기+컬러 샤워기커버+컬러 샤워호스 1.5M/2M',
            5,
            1245,
            55,
            84800,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/161061560535523261.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '뉴앤룩',
            '치약꽂이 세라믹 스탠드',
            5,
            8495,
            25,
            3500,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            11,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162748752323884677.jpeg?gif=1&w=480&h=480&c=c&webp=1',
            '딜라이트홈',
            '[오늘의딜] (1+1) 겨울철 부들 와플 프리미엄 호텔 샤워가운 목욕가운',
            5,
            2412,
            41,
            39900,
            1,
            11,
            sysdate(),
			'td');

-- 생필품

insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168680694210452414.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '베베숲',
            '시그니처레드70매캡20팩',
            5,
            874,
            29,
            49300,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169940588178094502.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '아이러브베베',
            '시그니앙 더그린 75g 레이온100% 72매 캡형X20팩 물티슈',
            5,
            5,
            null,
            49300,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168118546180020362.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '유니레버',
            '도브 바디워시 1L 3개 (6가지향)',
            5,
            429,
            39,
            33400,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170121829345272448.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '프로쉬',
            '[10%쿠폰] 독일 올인원 식기세척기세제 30개입 4개세트',
            5,
            7497,
            34,
            83600,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169708977291500337.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '크리넥스',
            '3겹 데코&소프트 롤화장지(28Mx24롤)x2팩',
            5,
            1876,
            9,
            43900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168863167515619729.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '베베앙 아기물티슈',
            '[고평량/73평량]두툼한 베베앙 클래스 캡형 70매 10팩 1+1',
            5,
            611,
            45,
            40000,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162607413842724853.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '하비비 본사',
            '(최종가8,075원) 요술톡톡 변기클리너 1세트(스틱1개+리필72개입+전용후크 증정)',
            5,
            3884,
            41,
            16300,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168670603557726971.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '유니레버',
            '스너글 섬유탈취제/드레스퍼퓸/룸스프레이 470ml x 3개',
            5,
            1382,
            41,
            2870,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163797910623036674.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '베베앙 아기물티슈',
            '라이트 캡형 물티슈 100매 10팩',
            5,
            16835,
            34,
            18900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169413282160076888.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '제이숲',
            '[1+1] 오리지널 실크케라틴 샴푸 750ml + 헤어팩 트리트먼트 750ml',
            5,
            5,
            31,
            44000,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170057922712107085.png?gif=1&w=480&h=480&c=c&webp=1',
            '질레트',
            '프로쉴드 옐로우 대용량팩 면도날16입',
            5,
            558,
            13,
            91900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168594622777666404.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '쏘피',
            '바디피트 볼록맞춤 슈퍼롱 10P x 3팩',
            5,
            245,
            null,
            17500,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169640332777468499.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '크리넥스',
            '3겹 순수소프트 롤화장지 메가롤 (37Mx24롤)x2팩',
            5,
            28,
            8,
            60900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169016547541902702.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '유니레버',
            '스너글 초고농축 섬유유연제 1800ml+2.6L',
            5,
            559,
            42,
            30700,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159373399139203168.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '스마트에코',
            '비바체 100매 20팩 캡형 물티슈',
            5,
            6171,
            50,
            25900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164316159571512927.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '꿈토리',
            '뉴 넉넉한 점프 엠보싱 캡형 55gsm 100매 10팩',
            5,
            9208,
            48,
            7600,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169957863150853210.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '헨켈',
            '딥클린 라벤더2.7Lx4개_퍼실 디스크 3개입 2개',
            5,
            273,
            41,
            115000,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167705199031736518.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '라이프넷',
            '1+1+1 1000ml 3종케어세트(샴푸+바디워시+트리트먼트)',
            5,
            319,
            59,
            65900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166633561052955820.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '유니레버',
            '바세린 프로텍팅 젤리 오리지널 100ml 3개',
            5,
            246,
            21,
            13900,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168050022484215054.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '헨켈',
            '버넬 고농축 섬유유연제 0.9Lx6개',
            5,
            906,
            47,
            41400,
            1,
            11,
            sysdate(),
			'td');
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168679131045876357.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '유니레버',
            '스너글 초고농축 섬유유연제 대용량 4L 2개',
            5,
            217,
            41,
            57500,
            1,
            11,
            sysdate(),
			'td');   
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170132360329990123.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '라이온',
            '아이깨끗해 핸드워시 리필 1.8L X 2개+250ml 공용기+위글위글 리필 450ml 증정',
            5,
            78,
            20,
            30000,
            1,
            11,
            sysdate(),
			'td');  
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170121952709859256.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '프로쉬',
            '독일 온가족 세탁세제 1.5L 4개 세트',
            5,
            484,
            40,
            87600,
            1,
            11,
            sysdate(),
			'td'); 
	insert into oh_product(category_id,product_image,brand_name,product_name,rating_avg,rating_review,price_sale,price_origin,tag_free,coupon_percent,pdate,delivery_type)
			values(
            12,
            'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168050023745504750.jpg?gif=1&w=480&h=480&c=c&webp=1',
            '헨켈',
            '버넬 고농축 섬유유연제 0.9Lx4개',
            5,
            628,
            40,
            23500,
            1,
            11,
            sysdate(),
			'td');

insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167581981605595658.jpg?gif=1&w=480&h=480&c=c&webp=1','알집매트','알집 베이비룸 14size 선택(그레이/화이트)','4.7',14,23,239000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169881627981116305.jpg?gif=1&w=480&h=480&c=c&webp=1','베베앙 아기물티슈','[오늘의집전용-최종가8,400원]오늘에 캡형 100매 10팩','4.9',124,26,16900,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167090218456888319.jpg?gif=1&w=480&h=480&c=c&webp=1','소르니아','뉴 수플레 아기옷장 1600 베이비장 세트','4.6',396,30,459000,0,5,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1609136350_102996_1.jpg?gif=1&w=480&h=480&c=c&webp=1','일룸','[쿠폰할인]팅클팝 피넛형 좌식책상 800폭','4.8',196,null,199000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/161225414624210116.jpg?gif=1&w=480&h=480&c=c&webp=1','블랑가또','[추가할인] 코끼리애착인형(S/M/L)','4.8',588,32,19000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167039577155757457.jpg?gif=1&w=480&h=480&c=c&webp=1','아가드','층간소음 사뿐 PVC 롤매트 2종 7size 셀프시공 놀이방 매트','4.6',1086,23,39000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168170882745717585.jpg?gif=1&w=480&h=480&c=c&webp=1','브라운','정품 브라운 체온계 IRT-6030 + 전용필터 21개포함',5,514,20,89900,1,10,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168369994445923711.jpg?gif=1&w=480&h=480&c=c&webp=1','소르니아','뉴수플레 키즈 데이베드 저상형 아기 어린이 슈퍼싱글 침대','4.5',49,31,289000,0,5,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166069960803159885.jpg?gif=1&w=480&h=480&c=c&webp=1','Jellycat','[해외] 젤리캣 애착인형 블라썸 M 31cm 7종',5,92,44,65000,1,5,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/157069082871989167.jpg?gif=1&w=480&h=480&c=c&webp=1','일룸','[쿠폰할인]아코 유아동 소파(버니/디노)',5,334,null,99000,1,5,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163116012099605192.jpg?gif=1&w=480&h=480&c=c&webp=1','마타마타','빈티지플라워 아이방 키즈러그 (2color 3size)',5,109,18,60000,1,null,sysdate(),'td');    
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165338045920694448.jpg?gif=1&w=480&h=480&c=c&webp=1','레이디가구','코코스칸딕 고무나무원목 저상형아기침대/데이베드','4.7',191,56,669000,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166968170354053308.jpg?gif=1&w=480&h=480&c=c&webp=1','소르니아','뉴수플레 2X3 하우스책장',5,667,25,226100,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165718159691851318.jpg?gif=1&w=480&h=480&c=c&webp=1','이이공브이샵','소프티 구름 코너가드 안전 모서리보호 코너보호대 부딪힘방지 가드',5,590,58,3600,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164603990356019591.jpg?gif=1&w=480&h=480&c=c&webp=1','더에르고','(12종필름)베베포레 몽슈슈 미러빔/아이방꾸미기/수면등','4.6',676,43,30000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167506071719480012.jpg?gif=1&w=480&h=480&c=c&webp=1','마틸라','디어프렌드 고밀도 순면 키즈 차렵이불세트 JR/SS 8colors','4.7',239,36,102600,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164482906519619756.jpg?gif=1&w=480&h=480&c=c&webp=1','심플룸','인디언 아기/유아 텐트 플레이하우스+전등갓 추가선택',5,242,null,56000,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168084498930216215.jpg?gif=1&w=480&h=480&c=c&webp=1','아가짱','프랜들리 무형광 아기 6중 배변훈련팬티',5,124,23,12900,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162615358921231113.jpg?gif=1&w=480&h=480&c=c&webp=1','실리만','실리콘 신생아 젖병 100ml WSB109',0,0,20,35000,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (13,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168076571761513708.jpg?gif=1&w=480&h=480&c=c&webp=1','라비킷','라이너 루프트 필로우(짱구베개)/신생아베개 두상베개 아기베개 출산선물','4.6',65,37,80000,1,null,sysdate(),'td');

-- 반려동물
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170104765053351497.jpg?gif=1&w=480&h=480&c=c&webp=1','울리','신규사이즈추가! 펫빈백 방석 펫소파 3size 5colors','4.9',1851,33,29900,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169657342239247749.jpg?gif=1&w=480&h=480&c=c&webp=1','울리','23FW신상 허그미 경량 하네스 패딩 베스트 6size 4colors',5,247,53,29900,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166140798189386471.jpg?gif=1&w=480&h=480&c=c&webp=1','펫토','클린펫 강아지미끄럼방지 100%방수고밀도PVC매트3size2colors','4.6',521,30,53050,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167884599554523876.jpg?gif=1&w=480&h=480&c=c&webp=1','울리','베이직 애견 카시트 2size 4colors','4.7',1055,58,79900,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163772046206655749.jpg?gif=1&w=480&h=480&c=c&webp=1','따수미','아이두젠 따수미 펫 애견텐트 강아지집 애견 하우스',5,351,35,27900,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169813559538974527.jpg?gif=1&w=480&h=480&c=c&webp=1','울리','23FW신상 몽셸 패딩 올인원 6size 3colors','4.5',17,38,59900,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164488667053706032.jpg?gif=1&w=480&h=480&c=c&webp=1','초코펫하우스','따뜻한 강아지방석 극강의포근함 스노우모찌쿠션(소형/중형)3colors',5,279,10,40000,1,12,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168376921092639614.jpg?gif=1&w=480&h=480&c=c&webp=1','두잇','[쿠폰99,800원]더테이블 자동급식기 화이트',5,413,5,149000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166754859132960928.jpg?gif=1&w=480&h=480&c=c&webp=1','요기펫','강아지 고양이 베란다 안전문 펫도어 방묘문 방묘창 개문 견문 프리미엄','4.5',173,20,250000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163816120043595049.jpg?gif=1&w=480&h=480&c=c&webp=1','디스독왓캣','강아지 겨울 옷 라운드 후리스 4colors 5size',5,99,null,6900,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164325030577225144.jpg?gif=1&w=480&h=480&c=c&webp=1','초코펫하우스','강아지집 99.9% 항균탈취365 에브리데이 하우스2.0','4.7',780,45,90000,1,12,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163184308039972887.jpg?gif=1&w=480&h=480&c=c&webp=1','울리','봉봉 후리스 넥워머 4size 5color 특가','4.9',210,60,19900,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167203911279144129.webp?gif=1&w=480&h=480&c=c&webp=1','가또페르','화이트폴 조절가능 캣폴 캣타워 A/B/C타입','4.5',202,20,300000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167151027559499019.jpg?gif=1&w=480&h=480&c=c&webp=1','티지오매트','우다다 강아지매트 애견 롤매트 PVC 거실 복도 층간소음 애견 방수 미끄럼방지','4.5',44,50,19400,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167566468644115327.jpg?gif=1&w=480&h=480&c=c&webp=1','울리','포그니 알러지케어 강아지방석 3size 3colors',5,153,56,60000,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163936672712023554.jpg?gif=1&w=480&h=480&c=c&webp=1','쁘띠도그','뭉게후리스조끼 겨울 강아지옷 2colors XS~XL','4.9',329,13,14400,1,15,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/158942153853422903.jpg?gif=1&w=480&h=480&c=c&webp=1','뽀떼','고양이 윈도우 선반 / 냥반 해먹 600/700/1180',5,458,36,47000,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/160681266567672110.jpg?gif=1&w=480&h=480&c=c&webp=1','아이리스코리아','사막화방지 탑도어 고양이 화장실 중형 대형 4colors','4.8',672,56,29800,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168776785997862696.jpg?gif=1&w=480&h=480&c=c&webp=1','유피','고양이 강아지 스테인리스 자동 무선정수기',5,71,16,59900,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (14,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163365679330630213.jpg?gif=1&w=480&h=480&c=c&webp=1','울리','밍키 패딩 베스트 4size 3colors 특가','4.8',175,50,25900,0,null,sysdate(),null);
    
-- 캠핑.레저
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166390170213708821.jpg?gif=1&w=480&h=480&c=c&webp=1','레토','[1+1]대형우드감성 경량 캠핑의자 폴딩로우 릴렉스체어','4.9',747,39,99800,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167713543641723903.jpg?gif=1&w=480&h=480&c=c&webp=1','에스테반호프','[쿠폰적용가12,900][1+1]우드상판포함 폴딩박스 28L/54L 크림/블랙 수납 리빙','4.8',1816,67,59000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/2472752/1657518346224.jpg?gif=1&w=480&h=480&c=c&webp=1','헬로그라운드','휘황찬란 LED 랜턴 충전식 감성 캠핑 조명 배터리 포함 4colors','4.9',252,45,32800,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165587850569597425.jpg?gif=1&w=480&h=480&c=c&webp=1','마이웨잇','심으뜸이 선택한 탄탄한 논슬립 TPE 요가매트 8mm',5,1451,null,25900,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167601464569513781.jpg?gif=1&w=480&h=480&c=c&webp=1','꾸버스','[1만원대/무배] 야끼니꾸 가정용 1인 황토 미니화로','4.9',4,50,24000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166977247682517768.jpg?gif=1&w=480&h=480&c=c&webp=1','메이스','LED 앵두 감성 캠핑 전구 알전구 스트링라이트 (건전지+USB듀얼 타입)',5,390,55,6000,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/11270227/1688718044697.jpg?gif=1&w=480&h=480&c=c&webp=1','아리프','NBR 요가매트 10mm 보관밴드 증정 스트레칭','4.9',298,63,27000,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169750167748313342.jpg?gif=1&w=480&h=480&c=c&webp=1','한샘','[단독10%할인]데일리 우드 미니 스토브 버너 오프화이트 + 보관가방 (선착순 사은품 증정',5,62,43,99000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167927539540356843.jpg?gif=1&w=480&h=480&c=c&webp=1','인앤캠핑','캠핑 블랭킷 카페트 매트 감성 블랑켓 8colors','4.8',398,null,5800,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/163841322641384994.jpg?gif=1&w=480&h=480&c=c&webp=1','인앤캠핑','캠핑 접이식 화로대 장작난로 불멍화로대 2size','4.6',399,39,57350,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167089865946226060.jpg?gif=1&w=480&h=480&c=c&webp=1','깃든','감성 캠핑 차박 침낭 이불+패드 세트 4colors (사계절/동계)',5,66,41,139900,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162985055198183139.jpg?gif=1&w=480&h=480&c=c&webp=1','다니고','캠핑테이블 간편 접이식 블랙 롤테이블 2size',5,621,31,55800,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/160869125145877391.jpg?gif=1&w=480&h=480&c=c&webp=1','DOD','[해외] 도플갱어 캠핑 멀티 키친 테이블 TB1-38-TN / 탄 카키 블랙','4.9',89,31,175000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162305607928856196.jpg?gif=1&w=480&h=480&c=c&webp=1','인앤캠핑','캠핑테이블 캠핑선반 감성캠핑용품 3단 기본 우드쉘프+사은품4종 식물선반','4.7',320,null,17800,0,10,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169742226560724905.jpg?gif=1&w=480&h=480&c=c&webp=1','러브위드','도톰한 꽈배기 극세사 양털 담요 겨울 블랭킷 소파 쇼파 이불 캠핑 차박 실내 사무실 무릎',0,0,16,26900,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169657823598832385.png?gif=1&w=480&h=480&c=c&webp=1','바리바디','점핑큐브 하루5분 고칼로리 소모운동/층간소음 ZERO','4.5',218,43,228000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168619721103852068.jpg?gif=1&w=480&h=480&c=c&webp=1','로하우스','국내생산 이중 양면코팅 캠핑 발포매트 야외 돗자리 백패킹 냉기차단 (전용가방포함)',5,91,9,21900,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/161001057062115544.jpg?gif=1&w=480&h=480&c=c&webp=1','캄푸스','56L 대형 수납박스 캠핑 폴딩 테이블 2colors (상판별도)','4.7',466,75,39800,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165761456095011356.jpg?gif=1&w=480&h=480&c=c&webp=1','펌핑라이프','홈파티 빈티지 감성랜턴 호롱불 캠핑램프 LED 캠핑용조명 무드등',5,86,20,19800,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (15,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162935487967640835.jpg?gif=1&w=480&h=480&c=c&webp=1','레토','레토 접이식 바베큐 불멍 캠핑화로대 LCP-FB01',5,379,33,29900,1,null,sysdate(),'td');


-- 공구.DIY
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167601411568385513.jpg?gif=1&w=480&h=480&c=c&webp=1','프로메이드','마감재/신규색상 출시! 조립식 데크타일 - 스토니(Stony) 36P','4.9',7062,49,101000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169761952130731414.jpg?gif=1&w=480&h=480&c=c&webp=1','매직픽스','[오늘의딜] 바닥 데코타일 로뎀 50cm(13장/3.25㎡)18colors','4.9',2623,15,38500,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166798457492860248.jpg?gif=1&w=480&h=480&c=c&webp=1','현대L&C','인테리어 필름 무광 시트지 단색 65colors','4.9',9031,2,4500,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170019446805790889.gif?gif=1&w=480&h=480&c=c&webp=1','루윈테리어','루윈카페트 DIY 타일카페트 50x50 LTseries','4.8',738,null,1500,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168302843235728980.jpg?gif=1&w=480&h=480&c=c&webp=1','보코','[오늘의딜] USB 멀티탭 3구 2m 큐브디자인 인테리어 멀티콘센트 6colors','4.9',888,13,39000,0,5,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164974409722269122.jpg?gif=1&w=480&h=480&c=c&webp=1','타이탄코일매트','[오늘의딜] 현관 베란다 발코니 사무실 업소용 바닥출입구 코일매트 눈매트 배수가능 야외용',5,746,null,60,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168844808524343343.jpg?gif=1&w=480&h=480&c=c&webp=1','시트몰이','로즈로사 친환경 접착 비접착 데코타일 12color','4.9',586,7,13500,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168670226948870918.jpg?gif=1&w=480&h=480&c=c&webp=1','에코필름','국내최초 컬러 발포 타일 퍼프시트지 8color',5,328,3,2700,0,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/15650448012564_KWMsB.jpg?gif=1&w=480&h=480&c=c&webp=1','마이윌플레이즈','발포시트지 주방 욕실 입체 발포 타일시트지','4.7',3023,12,2400,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/4541212/1667287916408.jpg?gif=1&w=480&h=480&c=c&webp=1','집드리','[오늘의딜][해외] 따뜻한 층간소음방지 블럭매트 단모 뽀글이단열재 10pcs (물세척가능)','4.1',76,25,15900,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163756711230820320.jpg?gif=1&w=480&h=480&c=c&webp=1','아이정','1+1 프리미엄 더좋은 멀티탭 개별 스위치 과부하차단 4구',5,1693,22,35000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/161216181049389219.jpg?gif=1&w=480&h=480&c=c&webp=1','문고리닷컴','아카시아 원목 조립마루 데크타일 10P 12슬롯','4.9',2169,34,26900,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165899002801841299.jpg?gif=1&w=480&h=480&c=c&webp=1','마켓비','MUPAN 원목 조립마루(30x30/10개입) 3colors','4.6',4397,45,45900,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167886436693122717.jpg?gif=1&w=480&h=480&c=c&webp=1','푸쉬탭','[5%쿠폰] 예쁜 인테리어 멀티탭 개별스위치 3구형 3colors',5,718,12,20000,1,5,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/163056874165489712.jpg?gif=1&w=480&h=480&c=c&webp=1','아이정','하트탭 3구 16A 감성 디자인 인테리어 멀티탭 2colors 3size',5,1593,39,11000,0,5,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169562108967262726.jpg?gif=1&w=480&h=480&c=c&webp=1','에이블루','[본사] 박스탭 개별스위치 USB형 AB520 / 전선정리 멀티탭','4.6',1703,27,67000,1,5,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168180102013820813.png?gif=1&w=480&h=480&c=c&webp=1','도든','[오늘의딜] 더잉크 감성 바닥 데코타일 47cm(4colors)',5,253,33,29900,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169105506895884641.jpg?gif=1&w=480&h=480&c=c&webp=1','올웨이즈홈','체커보드 조립식 타일 베란다 데크타일 20장세트',5,121,25,50000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168118875064214155.jpg?gif=1&w=480&h=480&c=c&webp=1','푸쉬탭','[5%쿠폰] 예쁜 인테리어 멀티탭 개별스위치 4구형 3colors',5,407,11,23400,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type)  
	values (16,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164756947540838999.jpg?gif=1&w=480&h=480&c=c&webp=1','새로고침','만능 풀바른 벽지 초간편 셀프도배 합지벽지 (사은품증정)','4.6',1275,55,1000,0,null,sysdate(),'td');
    
-- 인테리어시공
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166131753788513497.jpg?gif=1&w=480&h=480&c=c&webp=1','문장군','[단독] 아파트중문 현관 3연동중문 무료방문실측 직영시공',5,915,44,890000,1,5,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169104761293499296.jpg?gif=1&w=480&h=480&c=c&webp=1','씽크존','랜디와이드 주방 싱크대수전 무광 니켈 고급 거위목수전 폭포수전',5,37,38,220000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165163063774343926.jpg?gif=1&w=480&h=480&c=c&webp=1','노루하우홈','[5%쿠폰] 프렌치 양개도어 중문 시공 (골드손잡이 무료 업그레이드)','4.9',211,47,1324000,1,5,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/5039280/1661934608754.jpg?gif=1&w=480&h=480&c=c&webp=1','대림도비도스','국산 토네이도 싱크대 필터헤드수전 DPF-1000 수도꼭지 녹물제거 주방용','4.9',83,null,29800,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169465973250337245.jpg?gif=1&w=480&h=480&c=c&webp=1','영림에이홈','엘리세 양개 아치 중문 시공 (기본 강화유리 / 전국 무료 실측시공)',5,114,30,1343000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166141117330483974.jpg?gif=1&w=480&h=480&c=c&webp=1','문장군','[단독] ㄱ자 파티션 아파트중문 현관 3연동중문 무료방문실측 직영시공',5,53,31,1290000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167341307115774866.jpg?gif=1&w=480&h=480&c=c&webp=1','리바트 집테리어','몬트 주방 싱크대 시공','4.5',45,10,1690000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/169234093167317866.jpg?gif=1&w=480&h=480&c=c&webp=1','한샘','에디트화이트 도어 심플수납 (4~8 도어)',5,54,13,860000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169233742994876298.jpg?gif=1&w=480&h=480&c=c&webp=1','한샘','프리체 슬림 주방 싱크대 시공 1.7m~6.8m + 가스쿡탑','4.5',42,18,2210000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/161762317399127618.jpg?gif=1&w=480&h=480&c=c&webp=1','리바트 집테리어','델리스 주방 싱크대 시공','4.5',112,null,169000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165068627224825792.jpg?gif=1&w=480&h=480&c=c&webp=1','씽크존','무광 니켈 고급 거위목수전 랜디304 F타입 주방 싱크대 수전',5,86,40,150000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169716524812615058.jpg?gif=1&w=480&h=480&c=c&webp=1','문장군','ABS도어 화장실문 방문 문짝교체 민자도어 욕실문 셀프설치시공',0,0,36,150000,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165579445350767785.jpg?gif=1&w=480&h=480&c=c&webp=1','고치고','JT-A200WH 스텐 싱크대 주방 수전',5,44,52,139000,1,null,sysdate(),'td');
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/164437638406666617.jpg?gif=1&w=480&h=480&c=c&webp=1','노루하우홈','[5%쿠폰] 프렌치 원도어 고시형 중문 시공 (골드손잡이 무료 업그레이드)',5,22,42,1022000,1,5,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/161346288256318447.jpg?gif=1&w=480&h=480&c=c&webp=1','리바트 집테리어','가드니아 주방 싱크대 시공','4.6',51,null,1690000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168845719149054939.jpg?gif=1&w=480&h=480&c=c&webp=1','바른도어','아파트 현관중문 원슬라이딩 슬라이딩 중문 직영시공',5,6,44,1250000,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168915004228180119.jpg?gif=1&w=480&h=480&c=c&webp=1','노루하우홈','오리엔탈 간살 3연동 도어 중문 시공',5,2,33,1498500,1,5,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166080106128465372.webp?gif=1&w=480&h=480&c=c&webp=1','노루하우홈','[오늘의딜] 도어 ABS문,문틀 원데이 교체(전국시공,색상 변경,경첩 무료)','4.5',19,82,1880000,1,5,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162372180622817595.jpg?gif=1&w=480&h=480&c=c&webp=1','다윈트레이더스','모헨 프리미엄 아크릴욕조 간편 설치 2colors 3size','4.5',6,37,799000,0,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (17,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167341444406544083.jpg?gif=1&w=480&h=480&c=c&webp=1','리바트 집테리어','알파 원슬라이딩 중문',5,7,null,1048000,1,null,sysdate(),null);

-- 렌탈
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170104828624882030.jpg?gif=1&w=480&h=480&c=c&webp=1','코웨이','[렌탈]신제품 아이콘 아이스정수기 방문관리 냉온정얼음/냉정얼음 CHPI/CPI-7400N',5,562,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169501193106016544.jpg?gif=1&w=480&h=480&c=c&webp=1','코웨이','[렌탈] 최대 30만 혜택! /나노직수 정수기 모노 CHP(CP)-6201N',5,327,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169942466769524853.jpg?gif=1&w=480&h=480&c=c&webp=1','LG전자','[렌탈] 스탠바이미 TV 렌탈 27인치 27ART10AKP/27ART10CKPL',5,68,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169501205339843105.jpg?gif=1&w=480&h=480&c=c&webp=1','코웨이','[렌탈] 최대 30만 혜택! / 마이한뼘 정수기 CHP(CP)-320N',5,220,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165233570004225373.jpg?gif=1&w=480&h=480&c=c&webp=1','오픈갤러리','[렌탈] 오픈갤러리 그림구독 체험권',5,13,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169940382490392261.jpg?gif=1&w=480&h=480&c=c&webp=1','LG케어솔루션','[렌탈](구독/관리) 퓨리케어 오브제컬렉션 맞춤출수 냉온정수기 WD523AWB',5,121,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169940104803625950.jpg?gif=1&w=480&h=480&c=c&webp=1','쿠쿠','[렌탈] 얼음/100℃/냉온정 ZERO100S 정수기 CP-SS100',5,295,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170106518505659893.jpg?gif=1&w=480&h=480&c=c&webp=1','sk매직','[렌탈] 직수 정수기 S케어 미니 정수 WPU-2200C',5,91,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170104869024226987.jpg?gif=1&w=480&h=480&c=c&webp=1','코웨이','[렌탈] 코웨이 노블 빌트인 정수기 CHP/CP-3140N',5,84,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169950718753570485.jpg?gif=1&w=480&h=480&c=c&webp=1','세라젬','[렌탈] 파우제 M2 안마의자 (선납/제휴카드/특별사은품)',5,29,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170106576549375418.jpg?gif=1&w=480&h=480&c=c&webp=1','sk매직','[렌탈] 올인원플러스 직수 얼음 정수기 냉/정/온 WPU-IAC302',5,198,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170104909711221705.jpg?gif=1&w=480&h=480&c=c&webp=1','코웨이','[렌탈] 20평형 신제품 인테리어 노블 공기청정기 AP-2021A',5,152,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170106578213262660.jpg?gif=1&w=480&h=480&c=c&webp=1','sk매직','[렌탈] 원코크 얼음물 정수기 냉/정/온 WPU-IAC403',5,52,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169941813519900108.jpg?gif=1&w=480&h=480&c=c&webp=1','쿠쿠','[렌탈] 혼족 정수전용 정수기 CP-U011(셀프/방문관리)',5,161,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170124342963152705.jpg?gif=1&w=480&h=480&c=c&webp=1','코웨이','[렌탈] 최대15만 혜택! / 듀얼아이스정수기 CHPI(CPI)-390L',5,62,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170124349176102788.jpg?gif=1&w=480&h=480&c=c&webp=1','코웨이','[렌탈] 최대 30만P+사은품 증정! / 비렉스 안마의자 페블체어 MC-C01',5,7,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169698674785227105.jpg?gif=1&w=480&h=480&c=c&webp=1','코웨이','[렌탈] 스스로케어 비데(저수압 특화) BAS39-A',5,1,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170104586726320741.jpg?gif=1&w=480&h=480&c=c&webp=1','청호나이스','[렌탈] 에스프레카페 얼음정수기 WF-60C9600M',5,32,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169691167932624172.jpg?gif=1&w=480&h=480&c=c&webp=1','제네바사운드','[프리미엄][렌탈] 제네바스피커 L 월넛 (스탠드포함)',5,13,null,0,1,null,sysdate(),null);
insert into oh_product (category_id, product_image, brand_name, product_name, rating_avg, rating_review, price_sale, price_origin, tag_free, coupon_percent, pdate, delivery_type) 
	values (18,'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169346145486211119.jpg?gif=1&w=480&h=480&c=c&webp=1','코웨이','[렌탈] 최대 20P 혜택! / 원바디 제로 매트리스 CMSS(Q)-OB02',5,46,null,0,1,null,sysdate(),null);
    
-- oh_channel insert
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#오늘부터크리스마스',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166789275494702477.gif,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161915683828210632.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/169900840625164640.gif,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/169821869272501765.gif'),
		282, 25265);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#이번달잘샀템',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169763056241471394.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170127444927107098.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170118063926905077.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170118885466844536.jpeg'),
		22, 458);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#난방비절약클럽',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166792494476999496.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/164128738658697327.png,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/167480691203760051.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/170013267969344862.png,'),
		24, 67);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#데스크테리어족',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/168312864327785405.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/169857930068406291.JPG,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/170062182142472798.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170130064099839871.jpeg,'),
		72, 82960);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#오늘의뮤직존',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169950009109576260.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169858476575020259.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169449448925221862.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169581938872622540.jpeg,'),
		6, 798);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#질리지않아르떼미데',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169933117591574847.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169452792490262315.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169733850218735744.jpeg,',
			'https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/6492bbd217213c4d70c04250/6492bbd217213c4d70c04250.0000001.jpg'),
		6, 1897);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#맥시멀리스트모여라',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/169416477991074172.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/170053700715257836.jpg,',
			'https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/655222f323d57f18887e55a0/655222f323d57f18887e55a0.0000001.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/166748222532806175.JPG'),
		10, 1021);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#나만아는감성숙소',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169777198524569189.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169724989035662085.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169711174722780400.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169698999958671531.jpeg'),
		18, 124);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#다이소추천템',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169718942285420739.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/167742401975081969.JPG,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166985419750838904.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/169856877700655884.gif'),
		105, 236);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#모듈가구이렇게쓰세요',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/167455821938930568.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169994473628374304.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170062682106387380.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169780661225346575.jpeg'),
		9, 6423);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#스마트홈라이프',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/advices/cover_images/158442557943729674.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/163903880150795679.gif,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/advices/cover_images/157115948557920859.JPG,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166433575537590494.gif'),
		4, 219);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#겨울간식헌터',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/169815217657586744.png,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169105172443026675.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/169932768771148467.gif,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170123605752208415.jpeg'),
		16, 281);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#집순이',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/160619901819507965.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/170123779326606588.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/170109282984201694.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170097008933452972.jpeg'),
		12, 1826);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values ('
		#홈카페족',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/169932768771148467.gif,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/169898979341293730.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170130258107718430.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/170126925181588549.jpeg'),
		17, 83874);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#감성캠퍼',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169797602677951692.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169820543327269225.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169777823111495386.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169779747224741155.jpeg'),
		7, 1919);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#내맘대로리폼',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/advices/cover_images/156868539426092153.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads%2Fadvices%2Fcover_images%2F1453688454520_ZXtnt3sMq.JPG,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/169771388446942573.gif,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/170053462885768145.gif'),
		11, 10106);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#귤백과사전',
		concat('https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/655f035db0d1083c29b4d66d/655f035db0d1083c29b4d66d.0000001.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170130258107718430.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/170116703643693446.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170106919350285401.jpeg'),
		8, 107);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values(
		'#그릇수집가',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/169859478350529451.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169036243162636323.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170105082194096493.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/170123779326606588.jpg'),
		17, 43728);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#소품샵추천',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/161484723729266612.png,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/167940874586898880.jpg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/169616902847727912.jpeg,',
			'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/169320494536321870.jpg'),
		17, 949);
insert into oh_channel (channel_title, channel_image, channel_member, channel_content)
	values (
		'#이사선물추천',
		concat('https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/168285677882503829.JPG,',
		'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/170123779326606588.jpg,',
		'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169968222462750895.jpeg,',
		'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169853761221290242.jpeg'),
		6, 757);
-- oh community insert
insert into oh_community (mid, house_img, house_title, house_content)
	values(
    'hong@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/169981262573686695.jpg',
    '침실 속 작은 식물원과 통창 그린뷰가 매력적인 25평',
    '당시 봄이었는데 단지 안은 벚꽃으로 가득했어요. 집을 보고 돌아가는 길에 날아오는 벚꽃을 잡고, 약간 운명을 느꼈던 것 같아요 그렇게 이곳이 저희의 첫 번째 보금자리가 되었습니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'jimae@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/169937846642731348.jpg' ,
    '곳곳에 미술 작품으로 갤러리처럼 꾸민 38년 된 구옥',
    '위 사진을 메인으로 인사드리는 이유는 팜플렛의 작가의 그림이 저희 집 인테리어의 전부이자 모티브가 되었기 때문입니다. 부족한 집이지만 관심으로 봐 주시면 감사하겠습니다. 그럼, 지금부터 집들이를 시작할게요!');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'woodong@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169840912230406133.jpg',
    '다이닝룸부터 콘텐츠룸까지, 무궁무진한 10평짜리 공간',
    '오랜 시간을 보내는 공간인 만큼 편안하고 따뜻한 느낌의 가구들로 구성했어요. 데스크와 테이블은 우드. 패브릭 제품들은 화이트 계열입니다. 또 조명과 기기들은 모던한 제품들로 구성하여 공간에 포인트가 될 수 있도록 했습니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'samsoon_kim@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/168981484562138165.jpg',
    '질리지 않는 화이트&우드의 매력! 53평 내추럴 하우스',
    '안녕하세요, 에이치디자인입니다 :) 오늘은 노원구 중계동에 위치한 53평 아파트 시공 현장을 소개해 드리려고 해요! 이번 현장은 포근하면서도 단정한 분위기의 화이트&우드 인테리어를 진행했어요.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'samsik@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170001429613134730.jpg',
    '코로나 블루를 극복한 엄마의 홈스타일링 비법 대방출',
    '사실 리모델링을 한지도 5년이 다 되어가는 지금, 온라인 집들이를 준비하면서 어떤 이야기를 해야할 지 고민이 많이 되었는데요!! 5년 전엔 리모델링으로 기본적인 틀을 잡아두었고 지금은 홈스타일링으로 집 꾸미기를 하고 있는 제 이야기를 해 볼까 해요!');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'chikook@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169911341583664219.jpg',
    '대학생 방 꾸미기 이렇게 해보세요! 용돈으로 꾸민 3평방',
    '올해 초 방을 꾸미기 시작하여 벌써 1년이 다 되어가네요. 올해가 가기 전에 온라인 집들이를 도전해 보고 싶었는데, 마침 제안을 해주셔서 올해 목표를 하나를 이룰 수 있게 되었어요.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'ahn@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169992912943763419.jpg',
    '은은한 조명으로 고즈넉한, 우드 감성이 묻어나는 3평 방',
    '제 방의 전반적인 색감은 따뜻하면서 깔끔한 느낌이 나는, 우드톤 계열의 원목 가구들을 배치하고 중간중간 베이지와 화이트 톤의 소품들과 초록색 오브제들도 포인트를 주었습니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'yeosa@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/169976288947813643.JPG',
    '하얀 도화지에 포인트 색으로 색칠하듯 채운 취향 일기',
    '방 구조를 자주 옮기는 편이라 이사 온 지 1년 반이 안됐는데 20번 이상은 바꾼 거 같네요 ^^; 아직은 확고한 취향보다 이리저리 꾸며보면서 제 취향을 알아가는 중이에요.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'samo@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/169845586585064205.jpg',
    '화이트와 스틸로 포인트를 준 ESFJ의 2.7평 방🤍',
    '제 방은 2,990mm X 2,910mm의 약 정사각형의 2.7방이에요. 제 방은 들어왔을 때 넓어 보이고 동선이 편해야 된다고 생각해서 오늘의집 3D인테리어로 돌려보면서 가구를 어떻게 배치할지 고민했어요.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'hyori_jung@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169879850784402127.jpg',
    '딱 이런 집! 어디 없나요? 공간부터 스타일링까지 따뜻한 신혼집',
    '저희 아파트는 10년 된 구축 아파트여서 샷시(새시) 시공과 뼈대만 남겨두고 올 리모델링을 하기로 했어요. 우리의 두 번째 신혼집은 따뜻하고 편안함으로 주는 집으로 컨셉을 정하고 진행하게 되었답니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'gamja@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169742199501709606.jpg',
    '부족한 채광, 다운라이트로 밝고 환하게! 아담한 19평 빌라',
    '중문을 통해 들어왔을 때, 복도 없이 바로 거실이 보이는 트인 구조인데요. 때문에 목공 작업으로 중문에서 이어지도록 300mm 너비 가벽을 신설해 공간이 분리된다는 느낌을 주고자 했어요!');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'ilkook@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169562276899139541.jpeg',
	'남산 뷰가 보이는 36평, 리모델링 없이 꾸미기',
    '저희 집은 거실에 TV를 두지 않고 소파와 책장, 교구장 등만 배치한 형태입니다. 큰 가구의 경우 아이보리톤으로 맞추었고 다행히 아트월도 아이보리톤이라 전체적으로 통일감을 주기가 쉬웠어요.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'hankook@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170005973091035704.png',
    '미니멀 세컨하우스, 우드의 따뜻함으로 채우기',
    '제가 집 매매 시 고려한 3가지 조건은 직장과의 거리, 채광(남형) 및 통풍, 1km 내 편의 및 문화시설(편의점, 음식점, 학교, 병원, 피트니스 센터 등)이었습니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'one@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169996482153634273.jpg',
    '아이와 함께 자연스럽게 변하는 세 가족의 보금자리',
    '저는 사실 미니멀리스트입니다. 필요하다고 느끼는 물건 외에는 웬만하면 사지 않으려고 하는 편이에요. 그렇기 때문에 오브제가 별로 없어 집이 심심해 보일 때도 있지만, 그 덕에 작은 집을 넒게 사용 및 유지하고 있는 것 같아요.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'chichi@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169958945399130947.jpg',
    '빈티지 가구 러버 집중! 클래식 스타일로 완성한 부부의 집',
    '저희 부부는 가구를 좋아해서 항상 좋아하는 브랜드의 가구로만 공간을 구성하고 싶다는 생각을 했었는데요. 이번에 신축 아파트로 이사를 하면서 시공 없이 가구로만 인테리어를 할 수 있게 되었습니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'love@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169940148950211768.jpg',
    '1.5룸 구옥 주택의 변신, 적은 비용으로도 예쁘고 아늑하게',
    '고향으로 내려가고 싶지만, 그럴 용기는 없어 서울에서 하루하루 살아가고 있습니다. 그렇기에 저 같은 타지 생활하시는 자취생들에게 조금이나마 이 글이 인사이트가 되었으면 합니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'yaya@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/169829508266123025.jpg',
    '소재의 고급스러움이 은은하게 감도는 39평 신혼집',
    '저희는 여행도 좋아하지만 평소에 집에서 함께 보내는 시간을 중요하게 생각하는데요. 우리의 라이프 스타일과 딱 맞는 아름다운 공간에서 살고 싶다는 니즈가 서로 맞아 리모델링을 계획하게 되었습니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'comeon@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169573767850158785.jpeg',
    '스틸&유리 무채색 그레이 하우스, 조명으로 포인트 주기',
    '10평 정도의 작은 집에서 살다가 신축 아파트라 처음엔 마냥 좋았지만 그레이 톤의 내부를 보고 많이 아쉬웠어요. 화이트로 바꾸고 싶은 마음이 굴뚝같았지만 아깝기도 하고 남편과 제 자신과 타협하여 욕심을 최대한 버리고 최소한의 부분 시공과 조명으로 완성된 저희의 그레이 하우스를 소개해 보려 합니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'give@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/169984250910555566.png',
    '오렌지빛 레드로 쨍한 포인트! 원색의 과감함이 담긴 집',
    '그리하여 대학 시절부터 함께 자취를 하던 친구와 의기투합해서 만든 13평 공간입니다. 다행히 제 룸메이트와 저는 미감이 똑 닮아서 인테리어할 때 큰 이견이 없었습니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'haha@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169880134468970373.jpg',
    '뉴욕에서 온 디자이너 부부의 취향이 그대로 녹여진 구축 아파트',
    '뵈르게 모겐슨의 크레덴자는 맘에 드는 걸 찾아다니다가 안방의 톨보이와 함께 브루클린의 한 빈티지 가구샵에서 운명처럼 만나 데려왔는데 집에 오는 모든 손님들이 칭찬하는 아이템 중 하나입니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'agikim@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169840336558855116.png',
    '예산과 로망을 조율해서 만든 부부의 두 번째 신혼집',
    '둘 다 회사 일로 바쁜 시기이기도 했고 입주까지의 시간도 그리 길지 않아서 공사는 인테리어 업체를 통해 진행했어요. 올리모델링 공사도 아니고, 저희 예산이 적은 편이라 업체를 고르는데 어려움이 있었지만 다행히 발품을 팔아 조건에 맞는 업체를 구할 수 있었어요.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'agoh@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169862866129159066.jpg',
    '자연과 가까이, 네 가족의 로망 실현 단독 주택',
    '모두 집순이 집돌이 들이라 다시 찾은 주택의 삶 안에서 매일을 여행하듯 살고 있습니다. 처음 땅을 계약하고 설계부터 인테리어 하나하나까지 제 손길이 닿지 않은 곳이 없는 완벽한 저만의 취향이 가득 담긴 집이라 더 그러한 듯합니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'aikim@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/169960752877169066.jpg',
    '확실한 공간 분리! 아이 용품, 잡다한 물건들은 쏙쏙 숨기기',
    '신축 아파트라 손 볼 게 없다고 생각해서 냉장고장, 탄성코트, 줄눈 시공 정도만 하고 들어왔던 거 같네요. 지금 생각해 보면 처음부터 하고 싶은 거 다 하고 들어올걸! 당시에는 잘 몰랐어요. 그게 조금 아쉽긴 합니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'angelchoi@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169872708409593427.jpg',
    '공간마다 다른 컨셉! 추천하는 아이템이 가득한 투룸 오피스텔',
    '오래된 집이 아니라서 별다른 시공 없이 이렇게 스타일링으로만 꾸며보았는데요. 좋은 기회를 통해 여러분께 소개할 수 있어서 기쁩니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'anidoor@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169866997188914699.jpg',
    '화이트 패브릭과 우드의 조화, 작은 계단이 있는 독특한 신혼집',
    '이 집이 마음에 들었던 점은 특이한 구조와 사방이 창으로 열려 있는 모습이 너무 좋았습니다. 저희가 안방으로 사용하는 큰 방에는 이렇게 사계절을 한 눈으로 볼 수 있는 큰 창이 있답니다. ');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'antapark@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169885541574329107.jpeg',
    '좁아도 다 넣을 수 있어! 무채색으로 가득 채운 7평 원룸🖤',
    '저의 집의 포인트는 저의 취향이 담긴 아기자기한 소품들이 될 거 같아요. 좁은 원룸의 특성상 큰 가구에 변화를 주는 건 어렵더라구요.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'arilee@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169778866714512242.jpg',
    '분위기 좋은 비스트로처럼, 안락함과 여유가 느껴지는 공간',
    '넓은 평수는 아니지만 우리가 추구하는 BISTRO🍷 테마에 맞춰 필수적 요소만 있기에 답답하지 않고 안락함과 여유가 느껴집니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'arlee@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/170105133962595551.jpg',
    '그레이와 우드의 고급스러운 조화! 하이엔드 감성 하우스',
    '이번 현장은 이러한 컬러의 활용이 돋보이는 곳입니다. 연한 그레이 톤을 베이스로, 우드 포인트를 가미해 차분하고 고급스러운 공간을 디자인하였습니다. 컬러와 어울리는 자재와 가구는 공간의 품격을 한층 높여주었답니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'backkim@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/169855393295189073.jpg',
    '구조바꿈러가 햇살이 예쁘게 드리우는 집을 꾸미는 방법',
    '전체적으로 화이트톤을 유지하면서 제가 좋아하는 내추럴한 무드를 유지하기 위해 우드톤과 따뜻한 색감의 가구와 오브제들이 잘 어우러질 수 있도록 배치하고 있어요! 중간중간 크고 작은 식물들이 집을 분위기를 더 멋지게 만들어 준답니다.');
insert into oh_community (mid, house_img, house_title, house_content)
	values (
    'basicchoi@d-friends.co.kr',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/169838188772822300.jpg',
    '우드와 컬러 패턴의 조화로 꾸며가는 빈티지 무드의 신혼집',
    '저는 최근에 제가 식물을 제법 잘 키우는 편이라는 뜻밖의 재능을 알게 됐어요. 사실 별로 해주는 건 없는데 무럭무럭 자라서 깜짝 깜짝 놀라요. 이 나비란도 자구가 너무 커져서 정리를 해줘야 하는데 아직 엄두를 내지 못하고 있어요.');insert into oh_community (mid, house_img, house_title, house_content)  values (     'samsoon_kim@d-friends.co.kr',     'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/168981484562138165.jpg',     '질리지 않는 화이트&우드의 매력! 53평 내추럴 하우스',     '안녕하세요, 에이치디자인입니다 :) 오늘은 노원구 중계동에 위치한 53평 아파트 시공 현장을 소개해 드리려고 해요! 이번 현장은 포근하면서도 단정한 분위기의 화이트&우드 인테리어를 진행했어요.')
