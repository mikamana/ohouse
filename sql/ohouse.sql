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
    product_name varchar(100),
    brand_name varchar(20),
    price_origin int,
    price_sale int,
    rating_avg char(5),
    rating_review int,
    tag_free boolean,
    tag_hotprice boolean,
    coupon_sale boolean,
    coupon_percent int,
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
    channel_image varchar(300),
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

desc oh_member;
desc oh_category;
desc oh_product;
desc oh_review;
desc oh_community;
desc oh_channel;
desc oh_cart;
desc oh_order;

drop table oh_member;

select * from oh_member;
delete from oh_member;

create table review(

		rid int auto_increment primary key,
        asfasdasasas varchar(500)

);







create table review(

		rid int auto_increment primary key,
        dlskflsjh varchar(500)

);



insert into oh_member (mid, pass, nickname, userimg, mdate) values("hong@d-friends.co.kr","1234","홍길동","https://images.unsplash.com/photo-1589734004790-885767bec2ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("jimae@d-friends.co.kr","1234","일지매","https://images.unsplash.com/photo-1622898809226-eefe24316347?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("woodong@d-friends.co.kr","1234","강우동","https://images.unsplash.com/photo-1594094808932-389a7932df10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("samsoon.kim@d-friends.co.kr","1234","김삼순","https://images.unsplash.com/photo-1594188459847-b845413f6882?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("samsik@d-friends.co.kr","1234","오삼식","https://images.unsplash.com/photo-1603560723083-ef52b8597e2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("chikook@d-friends.co.kr","1234","김치국","https://images.unsplash.com/photo-1548426934-4e8582aceb26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("ahn@d-friends.co.kr","1234","안경태","https://images.unsplash.com/photo-1701244450186-cf76378d4c65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("yeosa@d-friends.co.kr","1234","박여사","https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("samo@d-friends.co.kr","1234","최사모","https://plus.unsplash.com/premium_photo-1701108112570-4413a5ae7090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
insert into oh_member (mid, pass, nickname, userimg, mdate) values("hyori.jung@d-friends.co.kr","1234","정효리","https://plus.unsplash.com/premium_photo-1698046366805-244eb4ca7913?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",sysdate());
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

