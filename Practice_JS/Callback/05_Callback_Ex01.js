function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();
}

greetTester("Pankaj", function () {
    console.log("Lets start testing!");

});
console.log("*********************************************");

// Callback with parameters
function runTest(testName, callback) {
    let status = "PASS";
    callback(testName, status);
}

runTest("Login Test", function (name, result) {
    console.log(name + " => " + result);
})
console.log("*********************************************");

// Sync Callback - forEach
let bugs = ["UI glitch", "API timeout", "wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + ": " + bug);
})

console.log("Total bugs: " + bugs.length);


