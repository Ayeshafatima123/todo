#!/usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let addTask = await inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: "What do you want to add in your todo"
    },
    {
        name: "addMore",
        type: "confirm",
        message: "Do you want to add more Todo?",
        default: "false"
    }
]);
todo.push(addTask.todo);
console.log(todo);
