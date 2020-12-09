var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "schema"
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
                "Remove Employees",
                "Update Employee Role",
                "Update Employee Manager",

            ]

        })
        .then(function (answer) {
            switch (answer.starter) {
                case "View Employees":
                    viewEmployee();
                    break;
                case "View Employees by Department":
                    viewEmployeeByDepartment();
                    break;
                // case "View Employees by Manager":
                //   viewEmployeeByManager();
                //   break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Remove Employees":
                    removeEmployees();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Add Role":
                    addRole();
                    break;
            }
        })
}

function viewEmployee(){
   var query = "SELECT *"

}