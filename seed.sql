USE homework;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 2, null );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 3, null );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodreiguez", 1, null );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Tupik", 4, null );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Malie", "Brown", 5, null );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Lourd", 2, null );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Allen", 6, null );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Christian", "Eckenrode", 2, null );





INSERT INTO role (title, salary, department_id)
VALUES ("Legal", 1234.123, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 54312.123, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 1234.123, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 1234.123, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales", 876543.123, 5);





INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineer");
INSERT INTO department (name)
VALUES ("Lawyer");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Accountant");