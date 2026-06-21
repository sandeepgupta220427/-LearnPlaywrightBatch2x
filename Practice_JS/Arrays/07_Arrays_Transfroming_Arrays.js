let scores = [45, 82, 91, 60, 73, 70, 77];

// map => transforms every element, return New array

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);
console.log("*****************************************");

// filter => keeps the element that pass a test
let passing = scores.filter(x => x >= 70);
console.log(passing);
console.log("*****************************************");

// reduce => accumulates to a single value
let total = scores.reduce((sum, s) => sum + s, 0);
console.log(total);
console.log("*****************************************");

//flat => flattens nested arrays
let nested = [[1, 2], [3, 4], 5];
nested.flat();
console.log(nested.flat());




