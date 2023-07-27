
-- drop database scoob;

-- create database scoob;

use scoob;

create table systemadmins (
    email varchar(50),
    password varchar(50), 
    PRIMARY KEY (email)
    );
    
insert into systemadmins(email, password) values 
	("lawson@scoob", "lawson123"),
    ("joe@scoob", "joe123");

create table schools (
    appid int auto_increment,
    status varchar(10),
    name varchar(50),
    uen int unique,
    dismissal varchar(4),
    region varchar(10),
    size varchar(20),
    timestamp varchar(30),
    PRIMARY KEY (appid)
    );

create table schooladmins (
    uen int,
    email varchar(50),
    password varchar(50), 
    PRIMARY KEY (uen),
    CONSTRAINT schooladmin_uen_fk FOREIGN KEY (uen) REFERENCES schools (uen)
    );

select * from schools join schooladmins on schools.uen = schooladmins.uen;

CREATE TABLE transports (
    appid int auto_increment,
    status varchar(10),
    name varchar(50),
    uen int unique,
    region varchar(10),
    size varchar(20), 
    timestamp varchar(30),
    PRIMARY KEY (appid)
    );

CREATE TABLE transportadmins (
    uen int,
    email varchar(50),
    password varchar(50), 
    PRIMARY KEY (uen),
    CONSTRAINT trabsportadmin_uen_fk FOREIGN KEY (uen) REFERENCES transports (uen)
    );

CREATE TABLE parentguardians (
    fname varchar(30),
    lname varchar(30),
    parentid varchar(50),
    email varchar(50),
    password varchar(50),
    PRIMARY KEY (parentid)
    );

CREATE TABLE class (
    class varchar(10),
    uen int,
    PRIMARY KEY (class),
    CONSTRAINT classuen_fk FOREIGN KEY (uen) REFERENCES schools (uen)
    );

CREATE TABLE teacher (
    email varchar(50),
    password varchar(50),
    fname varchar(30),
    lname varchar(30),
    uen int,
    class varchar(10),
    PRIMARY KEY (email),
    CONSTRAINT teacher_uen_fk FOREIGN KEY (uen) REFERENCES schools (uen),
    CONSTRAINT teacher_class_fk FOREIGN KEY (class) REFERENCES class (class)
    );

CREATE TABLE student (
    studentid int,
    parentid varchar(50),
    fname varchar(30),
    lname varchar(30),
    class varchar(10),
    uen int,
    subscription varchar(10) DEFAULT 'No',
    PRIMARY KEY (studentid),
    CONSTRAINT student_class_fk FOREIGN KEY (class) REFERENCES class (class),
    CONSTRAINT student_uen_fk FOREIGN KEY (uen) REFERENCES schools (uen)
    );

CREATE TABLE 3pp (
    parentid varchar(50),
    fname varchar(30),
    lname varchar(30),
    phone varchar(20),
    parentid varchar(50),
    PRIMARY KEY (parentid),
    CONSTRAINT 3pp_parentid_fk FOREIGN KEY (parentid) REFERENCES parentguardians (parentid)
    );
    
    CREATE TABLE driver (
    driverid int,
    uen int,
    fname varchar(30),
    lname varchar(30),
    phone varchar(20),
    email varchar(50),
    password varchar(50),
    PRIMARY KEY (driverid),
    CONSTRAINT driver_uen_fk FOREIGN KEY (uen) REFERENCES transports (uen)
    );

CREATE TABLE bus (
    busid int,
    PRIMARY KEY (busid)
    );

CREATE TABLE bus_used (
    busid int,
    driverid int,
    timestamp varchar(30),
    PRIMARY KEY (busid, driverid, timestamp),
    CONSTRAINT bus_used_busid_fk FOREIGN KEY (busid) REFERENCES bus (busid),
    CONSTRAINT bus_used_driverid_fk FOREIGN KEY (driverid) REFERENCES driver (driverid)
    );