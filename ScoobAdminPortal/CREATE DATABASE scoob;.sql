DROP DATABASE scoob;

CREATE DATABASE scoob;

USE scoob;

CREATE TABLE systemAdmins (
    systemAdminID INT UNIQUE,
    password VARCHAR(45), 
    PRIMARY KEY (systemAdminID)
);

INSERT INTO systemAdmins VALUES 
    ("7222257", "admin123"),
    ("1111111", "admin1"),
    ("2222222", "admin2");



-- FOR SCHOOL APPLICATIONS -> THEN ADD ADMIN ACCOUNT AS WELL
CREATE TABLE schools(
    appID INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45),
    uen VARCHAR(45) UNIQUE,
    status VARCHAR(10) DEFAULT "Pending", 
    PRIMARY KEY (appID)
);

INSERT INTO schools(name, uen) VALUES
    ("Clementi Primary School", "1111111111"),
    ("SIM University", "2222222222");

CREATE TABLE schoolAdmin(
    uen VARCHAR(45),
    email VARCHAR(45) UNIQUE, 
    password VARCHAR(45),
    PRIMARY KEY (uen, email), 
    FOREIGN KEY (uen) REFERENCES schools(uen)
);

INSERT INTO schoolAdmin(uen, email, password) VALUES
    ("1111111111", "cps_admin@gmail.com", "cps_admin"),
    ("2222222222", "sim_admin@gmail.com", "sim_admin");



-- FOR TRANSPORT APPLICATIONS -> THEN ADD ADMIN ACCOUNT AS WELL
CREATE TABLE transportCompanies(
    appID INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45),
    uen VARCHAR(45) UNIQUE,
    status VARCHAR(10) DEFAULT "Pending", 
    PRIMARY KEY (appID)
);

INSERT INTO transportCompanies(name, uen) VALUES
    ("Bus Services Clementi", "1231231231"),
    ("Bus Services SEMBAWANG", "234212351");

CREATE TABLE transportAdmin(
    uen VARCHAR(45),
    email VARCHAR(45) UNIQUE, 
    password VARCHAR(45),
    PRIMARY KEY (uen, email), 
    FOREIGN KEY (uen) REFERENCES transportCompanies(uen)
);

INSERT INTO transportAdmin(uen, email, password) VALUES
    ("1231231231", "bus_admin@gmail.com", "bus_admin"),
    ("234212351", "bus_admin2@gmail.com", "bus_admin");



-- FOR PARENT ACCOUNT CREATION
CREATE TABLE parents (
    fname VARCHAR(45),
    lname VARCHAR(45),
    parentID VARCHAR(10),
    phone INT UNIQUE,
    email VARCHAR(45) UNIQUE,
    password VARCHAR(45),
    PRIMARY KEY (parentID)
);



-- FOR CLASSES
CREATE TABLE class(
    uen VARCHAR(45), 
    classID VARCHAR(45),
    PRIMARY KEY (uen, classID),
    FOREIGN KEY (uen) REFERENCES schools(uen)
);



-- FOR SCHOOL TEACHERS
CREATE TABLE teachers(
    uen VARCHAR(45),
    classID VARCHAR(45),
    fname VARCHAR(45),
    lname VARCHAR(45),
    email VARCHAR(45) UNIQUE,
    password VARCHAR(45),
    PRIMARY KEY (uen, email),
    FOREIGN KEY (uen, classID) REFERENCES class(uen, classID)
);


-- FOR STUDENTS
CREATE TABLE students(
    uen VARCHAR(45),
    studentID VARCHAR(45),
    classID VARCHAR(45),
    parentID VARCHAR(45) UNIQUE,
    fname VARCHAR(45),
    lname VARCHAR(45),
    subscription VARCHAR(45),
    PRIMARY KEY (uen, studentID),
    FOREIGN KEY (uen, classID) REFERENCES class(uen, classID)
);


-- 3RD PARTY PERSONNEL
CREATE TABLE thirdPartyPersonnel(
    personnelID VARCHAR(45),
    fname VARCHAR(45),
    lname VARCHAR(45),
    phone INT UNIQUE,
    email VARCHAR(45) UNIQUE,
    password VARCHAR(45),
    parentID VARCHAR(45),
    PRIMARY KEY (personnelID), 
    FOREIGN KEY (parentID) REFERENCES parents(parentID)
);

