const inquirer = require("inquirer");
const mysql = require("mysql2");


// Start funtion of the main menu
const mainMenu = () => {
    inquirer.prompt ({
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

    .then(({menuOption}) => {
        console.log(menuOption);

        switch(menuOption) {
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
                
                default :
                    connection.end();
                    process.exit;
                    break;
            }    
        });
    }
}

// view all departments funtion


