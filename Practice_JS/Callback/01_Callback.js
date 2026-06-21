// Callback

function placeOrder(items, callback) {
    console.log("Place order");
    callback();// Function call
}

// Define
function print() {
    console.log("Callback - Done with the order");
}

placeOrder("Burger", print);
console.log("****************************************");

function placeOrder01(items, anyName) {
    console.log("Place this order");
    anyName();// Function call
}

// Define
function print01() {
    console.log("Callback - Done with the order");
}

placeOrder01("Pizza", print01);
console.log("****************************************");

function placeOrder02(items, anyName01, anyName02) {
    console.log("Place both the orders");
    anyName01();// Function call
    anyName02();// Function call
}

// Define
function print01() {
    console.log("Callback 01 - Done with the order");
}

function print02() {
    console.log("Callback 02 - Done with the order");
}

placeOrder02("Burger & Pizza", print01, print02)
console.log("****************************************");

function placeOrder03(items, callback03) {
    console.log("Place order");
    callback03();// Function call
}

// Define
function print() {
    console.log("Normal function - Done with the order");
}

//First way for callback function
// placeOrder("Burger", print);

//Second way for callback function => by using ananomus functions
placeOrder03("Burger", function () {
    console.log("Ananomus function, I am also a function without name!");
});

//Third way for callback function => by using Arrow functions
placeOrder03("Burger", () => {
    console.log("Arrow function, I am also a function without name!");
});
console.log("*******************************************************");

// Practice Examples
console.log("Example 01")
/*
1. Simulating Network Delay (Timeout Callback)
Problem Statement: Write a function fetchDataWithDelay that accepts a URL (string) and a callback function.
Use setTimeout to simulate a network delay of 1.5 seconds. Once the timer completes, invoke the callback function,
passing an object representing a successful response: { status: 200, data: 'Page Content Loaded' }.
*/
function fetchDataWithDelay(url, callback) {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        const response = { status: 200, data: 'Page Content Loaded' };
        callback(response);
    }, 1500);
}

// Usage:
fetchDataWithDelay('https://example.com', (response) => {
    console.log('Callback received:', response);
});
console.log("*******************************************************");

