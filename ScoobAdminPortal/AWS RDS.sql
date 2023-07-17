
drop database scoob;

create database scoob;
use scoob;

create table schools (
    appid int auto_increment,
    status varchar(10),
    name varchar(50),
    uen int unique,
    dismissal varchar(4),
    region varchar(10),
    size varchar(20), 
    PRIMARY KEY (appid)
    );

create table schooladmins (
    uen int,
    email varchar(50),
    password varchar(50), 
    PRIMARY KEY (uen),
    CONSTRAINT uen_fk FOREIGN KEY (uen) REFERENCES schools (uen)
    );

select * from schools join schooladmins on schools.uen = schooladmins.uen;

CREATE TABLE transports (
    appid int auto_increment,
    status varchar(10),
    name varchar(50),
    uen int unique,
    region varchar(10),
    size varchar(20), 
    PRIMARY KEY (appid)
    );

CREATE TABLE transportadmins (
    uen int,
    email varchar(50),
    password varchar(50), 
    PRIMARY KEY (uen),
    CONSTRAINT uen_fk FOREIGN KEY (uen) REFERENCES transports (uen)
    );


