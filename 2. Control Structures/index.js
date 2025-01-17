/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here

const statement1="more than fifty";
const statement2="less than fifty";
if (randomNumber >= 50) {
    console.log(statement1);
  } else {
    console.log(statement2);
  }


// TODO 2.2 Display whether the random number is odd or even
// Your code here
const oddOrEven = randomNumber % 2 === 0 ? "even" : "odd";
console.log(oddOrEven);



if (randomNumber % 2) {
    console.log("even");
  } else {
    console.log("odd");
  }



// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

if (randomNumber % 3 ===0 && randomNumber % 5===0) {
    console.log("fizz");
} else if (randomNumber % 5 ===0) {
    console.log("buzz");
} else if (randomNumber % 3 ===0){
    console.log("fizzbuzz");
} else{
    console.log(randomNumber)
}

let toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here

console.log(toDisplay);





// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: 
//you would use switch statements like an if else substitute. Wherein you would evaluate an expression's value to a series of clauses and 
//executes statements involving them.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code herelet str = '';

let str = '';
for (let i = 0; i < 10; i++) {
    str = str + i;
  }
  
  console.log(str + n);

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here

let i = 0;

while (i < list.length) {
    console.log(list[i]);
    i++;
}


// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: 
//while: The condition is checked before executing any statements.
//do-while: Statement is ran once and then checks the condition for further iterations.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("--------Separate content--------")

for (const element of list) {
  console.log(element);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here

console.log("--------Separate content--------")

let txt = "";
for (let x in list) {
  txt += list[x] + " ";
  console.log(txt);
}


// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here

list.forEach((value) => {
  console.log(value);
});


// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
//for of - You want to iterate over the values of an iterable object, like an array or a string.
//for in - You want to iterate over the enumerable properties of an object (commonly used with objects, not arrays).
//for each - You are working specifically with arrays and want a concise way to iterate over each element.


const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if (denominator === 0) {
        throw new Error("Division by zero error");
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleaning up resources");
}




