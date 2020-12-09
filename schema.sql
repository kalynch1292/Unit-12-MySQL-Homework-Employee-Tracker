DROP DATABASE IF EXISTS seed;
CREATE DATABASE seed;

USE seed;



CREATE TABLE department (
   department_id int NOT NULL,
   NAME varchar(30) NOT NULL,
   PRIMARY KEY (department_id),
)

CREATE TABLE role (
 role_id int NOT NULL,
 title varchar(30),
 salary DECIMAL(P,10),
 PRIMARY KEY (role_id),
 FOREIGN KEY (department_id) REFERENCES department (department_id)


)

CREATE TABLE employee (
    employee_id int NOT NULL,
    first_name varchar(30),
    last_name varchar(30),
    PRIMARY KEY (employee_id),
    FOREIGN KEY (role_id) REFERENCES role (role_id)
    manager_id int,

)


