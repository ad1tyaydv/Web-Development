// let firstName = "Aditya";
// const age = 18;
// var isStudent = true;


// console.log(firstName);
// console.log(age);
// console.log(isStudent);


// var isStudent = "Avanish";
// isStudent = "Aditya";
// console.log(isStudent);

// let users = ["Aditya", "Avanish"];

// console.log(users[0]);

// function greet(name) {
//   return "Hello, " + name;
// }
// let ans = greet("Aditya");
// let ans1 = greet("Avanish");

// console.log(ans);
// console.log(ans1);



// function sum(a, b) {
//   let totalSum = a + b;
//   return totalSum;
// }

// let ans = sum(1, 2);
// let ans1 = sum(3, 4);

// console.log(ans);
// console.log(ans1);


// function canVote(age) {
//   if (age >= 18) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// let ans = canVote(18);
// let ans1 = canVote(15);

// console.log(ans);
// console.log(ans1);

// let users = ["Aditya", "Avanish", "Ayush"];

// for(let i=0;i<3;i++) {
//   console.log(users[i]);
// }

// let user1 = {
//   name: "Aditya",
//   age: 18,
//   gender: "male"
// }

// console.log(user1.name);
// console.log(user1.age);
// console.log(user1["age"]);
// console.log(user1["gender"]);



// function greet(user) {
//   console.log("Hii " + user["name"] + " your age is " + user["age"]);
// }

// let user = {
//   name: "Aditya",
//   age: 18
// }

// greet(user);


// function greet(user) {
//   if(user["gender"] == "male") {
//     console.log("Hii Mr.Aditya your age is " + user["age"]);
//   }
//   else if(user.gender == "female") {
//     console.log("Hii Mrs.Aditi your age is ") + user.age;
//   }
//   else {
//     console.log("others");
//   }
// }

// let user = {
//   name: "Aditya",
//   age: "19",
//   gender: "male"
// }



// greet(user);

// let arr = ["Aditya", 21, {
//   name: "Aditya",
//   age: 18,
//   cities: ["delhi", "chandigarh", "jharsuguda", {
//   country: "malaysia",
//   city: "sambalpur"
//   }]
// }];

// const val1 = arr[2];

// const val2 = {
//   val2:  "Aditya",
//   age: 18
// }

// console.log(val1);
// console.log(val2);




// Concatination
// function sum(a, b) {
//   return  a + b;
// }

// let ans = sum("7", 3);
// console.log(ans);


// function totalsum(n) {

//   return n * (n + 1) / 2;
// }

// let ans = totalsum(10);
// console.log(ans);


// const fs = require("fs");

// const contents = fs.readFile("a.txt", "utf-8");  // Asynchronously
// console.log(contents);

// const contents1 = fs.readFileSync("b.txt", "utf-8");  // Synchronously
// console.log(contents1);



// Functional Arguments -- Passing a function to another funtion as an argument

// function sum(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// function divide(a, b) {
//   return a / b;
// }

// function doOperation(a, b, op) {
//   return op(a, b);
// }

// console.log(doOperation(1, 2, sum));




// Asynchornous Code

// const fs = require("fs");

// function print(err, data) {
//   console.log(data);
// }

// fs.readFile("a.txt", "utf-8", print); // asynchornously

// fs.readFile("b.txt", "utf-8", print); // asynchornously

// console.log("Done!!");

// const fs = require("fs");

// function print(err, data) {
//   if(err) {
//     console.log("File not found");
//   }
//   else {
//     console.log(data);
//   }
// }

// fs.readFile("a.txt", "utf-8", print); // asynchornously

// fs.readFile("b.txt", "utf-8", print); // asynchornously



// function timeout() {
//   console.log("Click the button!");
// }

// console.log("Hii");

// setTimeout(timeout, 1000);

// console.log("You are welcome!");

// let c = 0;
// for(let i=0;i<100000000;i++) {
//   c = c + 1;
// }

// console.log("Expensive operation done");





// // CLASSES IN JAVASCRIPT

// class Rectangle {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }

//   area() {
//     const area = this.width * this.height;
//     console.log(this);  // Prints Rectangle { width: 2, height: 5, color: 'red'}
//     return area;
//   }

//   paint() {
//     console.log(`Painting with color ${this.color}`);
//   }
// }

// const rect = new Rectangle(2, 5, "red");
// const area = rect.area();
// rect.paint();
// console.log(area);



// DATE FUNCTIONS PREDEFINED
// const date = new Date();
// console.log(date);
// console.log(date.getFullYear())
// console.log(date.getTime());
// console.log(date.getDate());
// console.log(date.getMonth());  // 0-based index

// // MAPS
// const map = new Map();
// map.set('name', 'Aditya');
// map.set('age', 18);
// console.log(map.get('name', 'age'));

// let name = "aditya";




// PROMISE

//const { resolve } = require("dns");

// Promise class give you a promise, that I will return you something in the future.

// defining a promise is hard, but using a promise is easy

// A promise in javascrpit is an object that represents the eventual completion or failure on an asynchronous opertaion and its resulting value.

// function main() {
//   console.log("HII THERE!")
// }

// setTimeout(main, 3000);    // syntactically cleaner
// setTimeoutPromisified(3000).then(main)



// function setTimeoutPromisified(ms) {
//   let p = new Promise(resolve => setTimeout(resolve, ms));
//   return p;
// }

// function callback() {
//   console.log("3 second have passed");
// }

// setTimeoutPromisified(3000,).then(callback)


// let a = setTimeoutPromisified(5000);
// console.log(a);


// function waitfor3S(resolve) {  // resolve = main
//   setTimeout(resolve, 3000)
// }

// function setTimeoutPromisified() {
//   return new Promise(waitfor3S);
// }

// function main() {
//   console.log("main is called");
// }

// setTimeoutPromisified().then(main);  // Promise based approach




// function random(resolve) {  // resolve is also a function
//   setTimeout(resolve, 3000);
// }

// let p = new Promise(random);  // supposed to return you something eventually


// // using the eventual value returned by the promise
// function callback() {
//   console.log("promise succeded");
// }
// p.then(callback)



// class Promise2 {
//   constructor(fn) {
//     function afterDone() {
//       this.resolve();
//     }
//     fn(afterDone)

//   then(callback) {
//     this.resolve = callback();
//   }
// }


// function readTheFile(Resolve) {
//   setTimeout(function) {
//     console.log("callback based settimeout completed");
//     resolve();
//   }, 3000;
// }

// function setTimeoutPromisified() {
//   return new Promise2(readTheFile)
// }
  
// let p = setTimeoutPromisified();
// function callback() {
//   console.log("callback has been called");
// }
// p.then(callback);


// // CREATING A PROMISE

// function doAsyncOp(resolve) {
//   setTimeout(resolve, 3000);
// }

// const p = new Promise(doAsyncOp);

// function callback() {
//   console.log("3 seconds have passed");
// }
// p.then(callback)
