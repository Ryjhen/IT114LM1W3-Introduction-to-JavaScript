/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

var x = 10;
console.log(x) 

// TODO 1.2 Use the let keyword to define a variable.
// Your code here

let y = 20;
console.log(y) 

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const z = 30;
console.log(z) 

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 

//  var: variables can be assigned function-scoped or globally and can be initialized each.
//  let: variables are reassignable
//  const: declares  blocked scoped variable, value cannot be changed throughout reassignment. 

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const V = z + y;
const V1 = z - x + y;
console.log(V + " Answer for const V")
console.log(V1 + " Answer for const V1")


// Checkpoint 1.2 What operators did you use?
// Answer:  Addition and subtraction
// Your code here
const V2 = z * y + 5;
console.log(V2 + " Answer for const V2")

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let string1 = "Hello";
let string2 = "World!";

console.log(string1 +" " + string2)

let mystring3 = "re";
mystring3 += "phrase";
console.log(mystring3)




// Checkpoint 1.3 What operators did you use?
// Answer: 

//shorthand operator, '+' operator, '*' operator


// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const rank = 2;
const status = rank >= 7 ? "radiant" : "not radiant";

console.log(status)

const number = 5;
typeof number;
console.log(typeof number)

const a1 =  true && true;
const a2 = false && true;

const o1 = true || true;
const o2 = false || true;

console.log("value for o1: ", o1)
console.log("value for o2: ", o2)
// Checkpoint 1.4 What operators did you use?
// Answer: conditional(ternary), typeof


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
const diff1 = 3 in trees; 
const diff2 = 7 in trees;
const diff3 = "rock" in trees; 
const diff4 = "redwood" in trees; 
console.log(diff1)
console.log(diff2)
console.log(diff3)
console.log(diff4)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: it does not check type 
// Your code here

const a_1 = 15;
const b_1 = 25;
const c_1 = 75;

a_1 + (b_1 - c_1)