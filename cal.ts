import inquirer from "inquirer";


var userInput = inquirer.prompt([
    {
        type: "input",
        name: "firstNum",
        message: "Enter your First Number",
        validate: (ans) => {
            if (!ans) {
                return "Enter your Number please"
            }
            return true

        }
    },
    {
        type: "input",
        name: "secondNum",
        message: "Enter Your Second Number",
        validate: (ans) => {
            if (!ans) {
                return "Enter your Number please"
            }
            return true
        }
    },
    {
        type: "list",
        name: "operations",
        message: "Select the operation you want to perform",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulos", "Exponent"],
        validate: (ans) => {
            if (!ans) {
                return "Enter your Number please"
            }
            return true
        }

    }
])


