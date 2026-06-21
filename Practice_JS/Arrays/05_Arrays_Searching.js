// Searching

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf => returns the 1st index, or -1 if not found
console.log(results.indexOf("fail")); // 1
console.log(results.indexOf("skip")); // -1

//lastIndexOf => serch from the end
console.log(results.lastIndexOf("fail")); // 4

// includes => returns the boolean
console.log(results.includes("error"));// true
console.log(results.includes("skip"));// false
console.log("***********************************************");

// finds => return first matching element
let num = [10, 25, 30, 45];
console.log(num.find(x => x > 20)); //25,30,45 =>25

//findIndex
console.log(num.findIndex(n => n > 20)); // 1

console.log(num.findLast(n => n > 20)); // 45
console.log(num.findLastIndex(n => n > 20)); // 3

