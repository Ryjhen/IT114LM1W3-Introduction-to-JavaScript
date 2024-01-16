/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(function(number) {return number * number;});

console.log(squares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(function(number) {return number % 2 === 0;});
  
console.log("Even numbers: " + evenNumbers)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce(function(accumulator, number) {return accumulator + number;}, 0);
  
console.log("The Sum of the numbers: " + sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const uppercaseWords = words.map(function(word) {return word.toUpperCase();});
  
console.log(uppercaseWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const new_Words = ["Hi", "I'm", "Angelo", "Ebrada"];

const longerWords = new_Words.filter(function(new_Words) {return new_Words.length > 4;});
  
console.log(longerWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = new_Words.reduce(function(accumulator, word) {return accumulator + word;}, '');

console.log(concatenatedString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer:
// map is a JavaScript method that generates a new array by applying a specified function to each element of an existing array, transforming the elements based on the provided logic.
// filter is a method that produces a new array by selectively including only the elements of an existing array that meet a specified condition, effectively excluding elements that do not satisfy the criteria.
// reduce is a method that iterates through the elements of an array, accumulating a single result by applying a specified function to each element. It is often employed for operations such as summing, averaging, or concatenating.