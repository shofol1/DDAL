/* 
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMIs = markWeight / (markHeight * markHeight);
const johnBMIs = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBMIs > johnBMIs;
if (markHigherBMI) {
  console.log("john BMIs is less than mark BMIs");
} else {
  console.log("john BMIs is greater than mark BMIs");
}
