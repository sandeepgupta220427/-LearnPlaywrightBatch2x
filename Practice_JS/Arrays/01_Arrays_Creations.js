// Array

let fruits = []; // Empty []

let fruits01 = ["apple", "banana", "cherry"];
// 3 => Index => 0,1,2

let array01 = [10, 20, 30, 40, 50]; // Index => 0,1,2,3,4
console.log(array01.length); // length is a property
//console.log(array01.length()); // () => function
console.log("****************************************");

let array02 = ["pass", "fail", "pass", "skip"]; // Array can have a duplicate items

let mixArray01 = [1, "hello", true, null]; // JS array can hold anu value
console.log(mixArray01[0]);
console.log(mixArray01[1]);
console.log(mixArray01[2]);
console.log(mixArray01[3]);
console.log(mixArray01[4]);
console.log("****************************************");

// Creation Arrays

// Array literals (preferred)
let browser = ["chrome", "edge", "firefox", "safari"];
console.log(browser.length)
console.log(browser[0]);
console.log(browser[1]);
console.log(browser[2]);
console.log(browser[3]);
console.log(browser[4]);
console.log("****************************************");

//Array constructor

let scores01 = new Array(3); // create [empty x 3]
let scores02 = new Array(1, 2, 3); // creates [1,2,3]
console.log("****************************************");

let num01 = new Array(100, 200, 300, 400, 500); // 0 to 4 => 5
console.log(num01);
console.log("****************************************");

let num02 = Array.of(200, 400, 600, 800, 1000); // 0 to 4 => 5
console.log(num02);
console.log(num02[0]);
console.log("****************************************");

// Array.from()
let chars = Array.from("hello"); // ["h","e","l","l","o"]

// Accessing and modifying


