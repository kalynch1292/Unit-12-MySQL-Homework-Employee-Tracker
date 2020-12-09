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
            switch (answer.starter) {
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
            }
        })
}

function viewEmployee() {
    connection.query = ("SELECT *FROM employee", function (err, data) {
        console.table(data);
        promptOne();
    })

}
function viewEmployeeByManager() {
    connection.query("SELECT * FROM manager", function (err, data) {
        console.table(data)
        promptOne();
    })
}
function viewEmployeeByDepartment() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        promptOne();
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
    }).then(function (result) {
        connection.query(sqlqueries.removeEmployee(employeeIdToRemove), function (err, results) {
            if (err) throw err;
            console.log("Employee removed")
            init();
        });
    });
}