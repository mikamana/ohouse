/*

		ohouse 데이터테이블
    
*/


select * from information_schema.tables;


select * from category;
select * from sub_category;
select * from product;
select * from customer;
select * from order_header;

drop table category;
drop table sub_category;

CREATE TABLE IF NOT EXISTS `category` (
  `category_id` CHAR(2) NOT NULL,
  `category_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`category_id`)
  
  );
  
CREATE TABLE IF NOT EXISTS `sub_category` (
  `sub_category_id` INT NOT NULL AUTO_INCREMENT COMMENT 'sub_category_id',
  `category_id` CHAR(2) NOT NULL COMMENT 'category_id',
  PRIMARY KEY (`sub_category_id`));
  
alter table sub_category 
	add constraint sub_category_category_id_fk foreign key (category_id) references category(category_id);
    
select * from information_schema.table_constraints where table_name = 'sub_category';

  