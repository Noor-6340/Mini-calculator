#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nWelcome to our Mini Calculator\n");
let myLoop = true;
while (myLoop) {
    let userInput = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter your first number!"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your second number!"
        },
        { type: "list",
            name: "operator",
            message: "Choose your operator",
            choices: ["+", "-", "*", "/"]
        }
    ]);
    let { num1, num2, operator } = userInput;
    if (operator === "+")
        add();
    if (operator === "-")
        Sub();
    if (operator === "*")
        multiply();
    if (operator === "/")
        divide();
    function add() {
        console.log(`\n${num1} + ${num2} = ${num1 + num2}`);
    }
    function Sub() {
        console.log(`\n${num1} - ${num2} = ${num1 - num2}`);
    }
    function multiply() {
        console.log(`\n${num1} *  ${num2} = ${num1 * num2}`);
    }
    function divide() {
        console.log(`\n${num1} / ${num2} = ${num1 / num2}`);
    }
    // for more calculations
    let calculateAgain = await inquirer.prompt({
        type: "confirm",
        name: "more",
        message: "Do yo want more calulations?",
        default: false
    });
    if (!calculateAgain.more) {
        myLoop = false;
        console.log("\nThank you for using Mini Calculator!");
    }
}
