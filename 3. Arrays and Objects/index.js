/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
const [firstItem, ...rest] = numbers;
const lastItem = rest.pop();


console.log('First item:', firstItem);
console.log(numbers[4]);
console.log('Last item:', lastItem);


// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here


 
    let minValue = Math.min(...numbers);
    let maxValue = Math.max(...numbers);
     
    console.log("Minimum element is:" + minValue);
    console.log("Maximum Element is:" + maxValue);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 

//python: you would compare lists in python by using the sort method or the sorted function.
//in other words, python already has a built in script for sorting.
//javascript: you would compare lists in java by reference of their variables and would have to 
// create your own custom script in doing so.



// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
const IT114L = {
    courseCode: "IT114L",
    name: "Christopher Kyle V. Santos",
    units: 2,
    numberOfStudents: 39,
    profName: "Job Lipat"
  };

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
console.log(IT114L.profName);


// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

const courses = [ IT114L = {
    courseCode: "IT114L",
    name: "Christopher Kyle V. Santos",
    units: 2,
    numberOfStudents: 39,
    profName: "Job Lipat"
  },

  CS107L = {
    courseCode: "CS107L",
    name: "Christopher Kyle V. Santos",
    units: 2,
    numberOfStudents: 39,
    profName: "Sir Adomar Ilao"
  },


]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
