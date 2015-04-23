-- create table task_list(task_id int not null auto_increment, task_name varchar(100) not null, task_description text,task_priority varchar(20),task_status varchar(20),task_start_time datetime not null default CURRENT_TIMESTAMP,task_end_time datetime not null default CURRENT_TIMESTAMP,task_archived bool default false,primary key(task_id));

-- create table task_list (task_id integer,task_name varchar(100),task_description varchar(200),task_priority varchar(20),task_status varchar(20),task_start_time datetime,task_end_time datetime,task_archived bool,primary key(task_id));


--(task_id,,task_name,task_description,task_priority,task_status,task_start_time,task_end_time,task_archived)



--insert into task_list 
--(task_id,task_name,task_description,task_priority,task_status,task_start_time,task_end_time,task_archived)
--values
--(1,'Gathering Requirement','Requirement Gathering','MEDIUM','ACTIVE',curtime(),curtime() + INTERVAL 3 HOUR,0);


insert into task_list 
(task_id,task_name,task_description,task_priority,task_status,task_archived)
values
(1,'Gathering Requirement','Requirement Gathering','MEDIUM','ACTIVE',0);



insert into task_list 
(task_id,task_name,task_description,task_priority,task_status,task_archived)
values
(2,'Application Designing','Application Designing','MEDIUM','ACTIVE',0);

insert into task_list 
(task_id,task_name,task_description,task_priority,task_status,task_archived)
values
(3,'Implementation','Implementation','MEDIUM','ACTIVE',0);

insert into task_list
(task_id,task_name,task_description,task_priority,task_status,task_archived)
values
(4,'Unit Testing','Unit Testing','LOW','ACTIVE',0);

insert into task_list 
(task_id,task_name,task_description,task_priority,task_status,task_archived)
values
(5,'Maintanence','Maintanence','LOW','ACTIVE',0);

select * from task_list;