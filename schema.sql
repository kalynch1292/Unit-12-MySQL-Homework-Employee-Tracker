DROP DATABASE IF EXISTS homework;

CREATE DATABASE homework;

USE homework;

CREATE TABLE department (
   department_id int AUTO_INCREMENT,
   NAME VARCHAR (30) NOT NULL,
   PRIMARY KEY (department_id)
);

CREATE TABLE role (
 role_id int NOT NULL AUTO_INCREMENT,
 title VARCHAR (30),
 salary DECIMAL(10,4) NULL,
 department_id int NOT NULL,
 PRIMARY KEY (role_id)
);

CREATE TABLE employee (
    employee_id  int NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id int NOT NULL,
     manager_id int,
    PRIMARY KEY (employee_id)
);




