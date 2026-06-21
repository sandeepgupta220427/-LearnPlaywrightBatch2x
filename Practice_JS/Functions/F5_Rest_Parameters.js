// Rest Parametres
function logResults(suiteName, ...results) {
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results.join(",")}`);
}

logResults("Auth Suite", "pass", "fail", "pass", "skip");
console.log("*******************************");

function add(a, b, c) {
    return a + b + c;
}

let nums = [1, 2, 3];
console.log(add(...nums));
console.log("*******************************");

// We can call afunction before defining the function
greet01("Pankaj");

function greet01(name) {
    console.log(`Hello, ${name}`);
}
console.log("************************************");

// Expression - NOT hoisted
greet02("Pankaj");

const greet02 = function (name) {
    console.log(`Hello, ${name}`);
}
console.log("************************************");








