create database burgers_db;
use  burgers_db;

create table burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten boolean,
    date timestamp,
	PRIMARY KEY (id)
);