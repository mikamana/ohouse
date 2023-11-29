/*
create table student(
	sid char(4),
    sname varchar(20) not null,
    dept varchar(20),
    sub_id char(4), -- 컬럼명은 달라도 되지만 데이터타입은 같아야함, 보통 컬럼명은 참조할 컬럼과 같게 한다.
    email varchar(20),
    constraint student_sid_pk primary key(sid),
    constraint student_sub_id_fk foreign key(sub_id) references subject(sub_id) on update cascade on delete cascade -- on update cascade, on delete cascade : 참조컬럼에 종속되어 업데이트,삭제시 연동됨
);
*/
create table oh_cart(
	cid int auto_increment primary key,
    pid int,
    id varchar(50),
    qty int not null,
    cdate datetime,
    constraint car_pid_fk foreign key(pid) references oh_product(pid),
    constraint car_id_fk foreign key(id) references oh_member(id)
);

create table oh_order(
	oid int auto_increment primary key,
    cid int,
    pid int,
    id varchar(50),
    orderer_phone varchar(20),
    reciever_place varchar(50),
    reciever_name varchar(20),
    reciever_phone varchar(20),
    reciever_address varchar(100),
    reciever_request varchar(51),
    payment varchar(10),
    installment varchar(20),
    last_pay_price varchar(100),
	constraint car_pid_fk foreign key(pid) references oh_product(pid) on update cascade on delete cascade,
    constraint car_cid_fk foreign key(cid) references oh_cart(cid) on update cascade on delete cascade,
    constraint car_id_fk foreign key(id) references oh_member(id) on update cascade on delete cascade,
);