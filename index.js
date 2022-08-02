const inquirer = require("inquirer");
const { reject } = require("lodash");
const mysql = require("mysql2");
const { resolve } = require("path/posix");


// Start funtion of the main menu
const mainMenu = () => {
    inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add department",
            "Add roles",
            "Add employee",
            "Update employee role",
            "Update employee manager",
            "Delete department",
            "Delete role",
            "Delete employee"
        ],
        name: "menuOption",
    })

        .then(({ menuOption }) => {
            console.log(menuOption);

            switch (menuOption) {
                case "View all departments":
                    viewAllDepart().then((res) => {
                        console.table(res);
                        mainMenu();
                    });

                    break;

                case "View all roles":
                    viewAllRoles().then((res) => {
                        console.table(res);
                        mainMenu();
                    });

                    break;

                case "View all employees":
                    viewAllEmploy().then((res) => {
                        console.table(res);
                        mainMenu();
                    });

                    break;

                case "Add department":
                    addDep();

                    break;

                case "Add role":
                    addRole();

                    break;

                case "Add employee":
                    addEmp();

                    break;

                case "Update employee role":
                    chooseEmpRole().then((resId) => {
                        updateEmpRole(resId).then((response) => {
                            console.log(response);
                            mainMenu();
                        });
                    });

                    break;

                case "Update employee manager":
                    chooseEmp().then((resId) => {
                        updateEmpMan(resId).then((response) => {
                            console.log(response);
                            mainMenu();
                        });
                    });

                    break;

                case "Delete department":
                    chooseDep().then((resId) => {
                        deleteDep(redId).then((response) => {
                            mainMenu();
                        });
                    });

                    break;

                case "Delete role":
                    chooseRole().then((redId) => {
                        deleteRole(resId).then((response) => {
                            mainMenu();
                        });
                    });

                    break;

                case "Delete employee":
                    chooseEmp().then((redId) => {
                        deleteEmp(resId).then((response) => {
                            mainMenu();
                        });
                    });

                    break;

                default:
                    connection.end();
                    process.exit;
                    break;
            }
        });
}
// }

// view all departments funtion
const viewAllDepart = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM department", (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });

    }).then()
}

// view all roles funtion
const viewAllRoles = () => {
    return new Promise((resolve, reject) => {
        conection.query("SELECT * FROM role", (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });

    }).then()
}

// view all employee funtion
const viewAllEmploy = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee,role_id, employee.manager_id, role.title, role.salary, department.name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department_id=department_id", (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    })
}

// add department function
const departMenu = () => {
    inquirer.prompt({
        type: "prompt",
        name: "depart_name",
        message: "Add new department",
    })
        .then(({ depart_name }) => {
            console.log(depart_name);
            addDep(depart_name).then(() => {
                mainMenu();
            })
        })
}

const addDep = (addDepart) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO department SET ?",
            [{ department: addDepart }],
            (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ message: "Department was added" })
                }
            }
        )
    })
}

//  add role function
const roleMenu = () => {
    inquirer.prompt([{
        type: "prompt",
        name: "add_titile",
        message: "Add title",
    },
    {
        type: "prompt",
        name: "add_salary",
        message: "Add salary",
    },
    {
        type: "prompt",
        name: "add_deptID",
        message: "Add department ID",
    }
    ])
        .then(({ add_title, add_salary, add_departID }) => {
            addRole(add_title, add_salary, add_departID).then(() => {
                mainMenu();
            })
        })
}

const addRole = (add_title, add_salary, add_departID) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO role SET ?",
            [{ title: add_title, add_salary, add_departID }],
            (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ message: "Role was added" })
                }
            }
        )
    })
}


// add employee function
const employMenu = () => {
    inquirer.prompt([{
        type: "prompt",
        name: "add_firstN",
        message: "Add employees first name",
    },
    {
        type: "prompt",
        name: "add_lastN",
        message: "Add employees last name"
    },
    {
        type: "prompt",
        name: "add_roleID",
        message: "Add employees role ID"
    }, 
    {
        type: "prompt",
        name: "add_manID",
        message: "Add manager ID"
    }   
    ]
        .then(({add_firstN, add_lastN, add_roleID, add_manID}) => {

        })

)}; 