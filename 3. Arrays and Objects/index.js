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

const coursesThisTerm = [
  {
      courseCode: "CS120",
      courseName: "DATA COMMUNICATIONS AND INTRODUCTION TO NETWORKING TECHNOLOGIES",
      units: 3,
  },
  {
    courseCode: "CS120L",
    courseName: "DATA COMMUNICATIONS AND INTRODUCTION TO NETWORKING TECHNOLOGIES",
    units: 3,
  },
  {
    courseCode: "CS120",
    courseName: "DATA COMMUNICATIONS AND INTRODUCTION TO NETWORKING TECHNOLOGIES",
    units: 3,
  },
  {
      courseCode: "CS107",
      courseName: "INFORMATION MANAGEMENT",
      units: 2,
  },
  {
      courseCode: "CS107L",
      courseName: "INFORMATION MANAGEMENT (LABORATORY)",
      units: 1,
  },
  {
      courseCode: "HUM039",
      courseName: "ETHICS",
      units: 3,
  },
  {
      courseCode: "IT114",
      courseName: "WEB SYSTEMS AND TECHNOLOGIES",
      units: 2,
  },
  {
      courseCode: "IT114L",
      courseName: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
      units: 1,
  },
  {
      courseCode: "IT132",
      courseName: "LOGIC DESIGN AND SWITCHING THEORY",
      units: 2,
  },  
  {
      courseCode: "IT133",
      courseName: "TECHNOPRENEURSHIP",
      units: 3,
  }
];



// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
const totalunits = coursesThisTerm.reduce(function(accumulator, course) {return accumulator + course.units;}, 0);
  
  console.log("Total units for this term:", totalunits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
// The equivalent of objects in Python is classes, and you can compare them using identity (is) for checking if they reference the same object or using the equality operator (==) to compare their attributes.


// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
additional_numbers = 69;
const newNumber = [...numbers, additional_numbers];

console.log(newNumber)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
// Extract course code and units using the spread operator
const { courseCode, units, ...restInfo } = IT114L;

console.log('Course Code:', courseCode);
console.log('Units:', units);


console.log('Remaining Info:', restInfo);
