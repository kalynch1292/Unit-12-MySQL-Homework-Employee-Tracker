var mysql = require("mysql");
var inquirer = require('inquirer');
const { CONNREFUSED } = require("dns");
const { inherits } = require("util");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "homework"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //   connection.end();
    PromptOne();
});

function PromptOne() {
    inquirer
        .prompt({
            type: "list",
            name: "starter",
            message: "what would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employees",
                "Remove Employees"

            ]

        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployee();
                    break;
                case "View All Employees by Department":
                    viewEmployeeByDepartment();
                    break;
                case "View Employees by Manager":
                    viewEmployeeByManager();
                    break;
                case "Add Employees":
                    addEmployee();
                    break;
                case "Remove Employees":
                    removeEmployees();
                    break;
                case "End":
                    connection.end();
                    break;
            }
        })
}

function viewEmployee() {
    const query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      init();
    });
  }


function viewEmployeeByManager() {
    connection.query("SELECT * FROM manager", function (err, data) {
        console.table(data)
        promptOne();
        if (err) throw err;
    })
}
function viewEmployeeByDepartment() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        promptOne();
        if (err) throw err;
    })
}

function addEmployee() {
    inquirer
        .prompt([{
            type: "input",
            name: "firstName",
            message: "What is the employees first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employees role-ID"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employees manager's ID?"
        }
        ])

        .then(function () {
            connection.query("INSERT INTO employee"(first_name, last_name, employee_id, role_id), function (err, data) {
                console.table(data);
                promptOne();


            })
        })
}

function removeEmployees() {
    inquirer.prompt({
        message: "Which employee do you want to remove?",
        name: "employeeName",
        type: "list",
        choices: employeeList
    }).then(function (res) {
        connection.query(sqlqueries.removeEmployee(employeeIdToRemove), function (err, res) {
            if (err) throw err;
            console.log("Employee removed")
            init();
        });
    });
}
function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "deptartmentName",
                message: "What Department would you like to add?"
            }
        ])
        .then(function (res) {
            console.log(res);
            const query = connection.query(
                "INSERT INTO departments SET ?",
                {
                    name: res.deptartmentName
                },
                function (err, res) {
                    connection.query("SELECT * FROM departments", function (err, res) {
                        console.table(res);
                        start();
                    })
                }
            )
        })
}
