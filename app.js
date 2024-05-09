console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

/* The Array Object in JavaScript has a built-in reduce method that iterates over each value in an array and returns a value. It is very useful when calculating sums.
Write a function that takes an array of numbers as a parameter and returns the sum value of each number in the array. (i.e. write a custom Array.prototype.reduce() function)
You can use the following array: const numbers = [2, 22, 12, 17, 18, 39, 129];
Declare a function arraySum that takes numbers as a parameter
Declare a variable sum and initialize sum as 0
Inside the arraySum function body, iterate over each number (value) in the numbers array using the array's forEach method
The array forEach method takes a callback (function) as a parameter, where you can pass in the value and index of the current array position
numbers.forEach((number, index) => {...});
Inside the body of the forEach callback function, write code so that each number in the numbers array is added to the value of sum
Below the forEach method, then return sum;
Call the arraySum(numbers) method inside console.log to print out the returned sum.
*/

// declare function arraySum
//parameters (numbers)
// sum = 0
//forEach call back function - we add each number to sum variable - return final sum
// call the function in the console.log

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
  let sum = 0;
  // easier way (kind of)
  //for( let i = 0; i < nums.length; i++){
  //  sum += nums[i];
  //}
  //-----------
  //harder way
  numbers.forEach(function (element) {
    sum += element;
  });
  return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// Favorite Book
// using dot notation

//this creates  an object
const book = {};

book.title = "Catcher in the Rye";
book.author = "J.D. Salinger";
book.pages = 234;
book.readCount = 3;

book.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
};

console.log(book.info());

//exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(" ");
console.log(words);

//iterate - repeat a process

for (let i = 0; i < words.length; i++) {
  const letters = words[i].split("");
  //reverse
  letters.reverse();
  //update each word to be the newly revsersed one
  words[i] = letters.join("");
}
const results = words.join(" ");
console.log(results);

// exercise 4

//strings can .split()
// arrays can .join()

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

const lines = csvData.split("\n");
console.log(lines);
const headers = lines[0].split(",");
console.log(headers);

//create an array to use later
const resultArray = [];
for (let i = 1; i < lines.length; i++) {
  //split the line into individual data elements
  //use each individual index to split - [i]
  const data = lines[i].split(",");
  console.log(data);
  const tempObj = {
    name: data[0],
    age: data[1],
  };
  resultArray.push(tempObj);
}

console.log(resultArray);

const http = require("http");

http
  .createServer((request, response) => {
    response.end("Find the Lazy Dog");
  })
  .listen(5888, () => {
    console.log("Get to the SERVER");
  });
