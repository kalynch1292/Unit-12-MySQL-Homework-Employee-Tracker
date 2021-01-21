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
    promptOne();
});

function promptOne() {
    inquirer
        .prompt({
            type: "list",
            name: "starter",
            message: "what would you like to do?",
            choices: [
                "View All Employees",
                "View All Departments",
                "View Roles",
                "Add Employees",
                "Remove Employees"

            ]

        })
        .then(function (answer) {
            switch (answer.starter) {
                case "View All Employees":
                    viewEmployee();
                    break;
                case "View All Departments":
                    viewDepartment();
                    break;
                case "View Roles":
                    viewRoles();
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
    const selection = "SELECT * FROM employee";
    connection.query(selection, function (err, res) {
        if (err) throw err;
        console.table(res);
        promptOne();
    });
}


function viewRoles() {
    connection.query("SELECT * FROM role", function (err, data) {
        console.table(data)
        promptOne();
        if (err) throw err;
    })
}
function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data, "here");
        promptOne();
        if (err) throw err;
    })
}

const addEmployee = async () => {
    connection.query('SELECT * FROM role', (err, data)=>{
        const roleList = data.map(department=>{return{name:department.title, value:department.role_id}})
        connection.query('SELECT * FROM employee', (err, data)=> {
            const employeeList = data.map(employee=> {return {name : `${employee.first_name} ${employee.last_name}`, value: employee.employee_id}})
            inquirer
                .prompt([{
                    type: "input",
                    name: "first_name",
                    message: "What is the employees first name?"
                },
                {
                    type: "input",
                    name: "last_name",
                    message: "What is the employees last name?"
                },
                {
                    type: "list",
                    name: "role_id",
                    message: "What is the employees role",
                    choices: roleList
                    
                },
                {
                    type: "list",
                    name: "manager_id",
                    message: "What is the employees manager's ID?",
                    choices: employeeList
                }
                ])
        
                .then(function (answers) {
                    connection.query("INSERT INTO employee SET ?", answers, function (err, data) {
                        console.log('Added employee');
                        promptOne();
        
        
                    })
                })
        } ) 
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