import inquirer from "inquirer";
const questions = [{
        name: "num1",
        type: "number",
        message: "Enter First Number"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Second Number"
    },
    {
        name: "Operations",
        type: "list",
        message: "Select an options that you want to perform ",
        choices: ["+", "-", "*", "/", "**"]
    }
];
var answers = inquirer.prompt(questions);
answers.then((answers) => {
    if (answers.Operations == "+") {
        console.log("num1 + num2 =", answers.num1 + answers.num2);
    }
    else if (answers.Operations == "-") {
        console.log("num1 - num2 =", answers.num1 - answers.num2);
    }
    else if (answers.Operations == "*") {
        console.log("num1 * num2 =", answers.num1 * answers.num2);
    }
    else if (answers.Operations == "/") {
        console.log("num1 / num2 =", answers.num1 / answers.num2);
    }
    else if (answers.Operations == "**") {
        console.log("num1 ** num2 =", answers.num1 ** answers.num2);
    }
})
    .catch((err) => {
    console.log("err", err);
});
