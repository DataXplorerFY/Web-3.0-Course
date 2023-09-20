
import inquirer from 'inquirer';

var userInput = await inquirer.prompt([
    {
        type: "input",
        name: " userName",
        message: "what is your name",
        validate: (ans)=>{
            if (!ans) {
                return "Enter your name please"
            }
            return true
        }

    },
    {
        type: "number",
        name: "userAge",
        message: "what is your age"

    },
    {
        type:"checkbox",
        name: "colors",
        message: "What is your favourite color?",
        choices: ["Mehroon","Brown","Sky blue"],
    },
]);




console.log(userInput)

