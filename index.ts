#! /usr/bin/env node
import inqurirer from "inquirer";
const answer = await inqurirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second mumber", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
//conditional statment
if (answer.operator === "Addition")
  console.log(answer.firstnumber + answer.secondnumber);
else if (answer.operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select the the valid operator");
}
