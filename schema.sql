DROP DATABASE IF EXISTS homework;
CREATE DATABASE homework;

USE homework;



CREATE TABLE department (
   department_id int NOT NULL,
   NAME VARCHAR (30) NOT NULL,
   PRIMARY KEY (department_id),
)

CREATE TABLE role (
 role_id int NOT NULL,
 title VARCHAR (30),
 salary DECIMAL(10,4) NULL,
 PRIMARY KEY (role_id),
 FOREIGN KEY (department_id) REFERENCES department (department_id)


)

CREATE TABLE employee (
    employee_id int NOT NULL,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    PRIMARY KEY (employee_id),
    FOREIGN KEY (role_id) REFERENCES role (role_id)
    manager_id int,

)




