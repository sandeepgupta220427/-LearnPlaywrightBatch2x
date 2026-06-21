// Promise Chaining — The Solution to Callback Hell
// Compare this to the callback hell version -> completely FLAT, easy to read, ONE `.catch()` handles all errors.
// Promise Chaining => Rarely used

console.log("Example 01");

function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!");
    });
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded!");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Creadentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in Sucessfully");
    });
}

openBrowser().then(function (msg) {
    console.log("Step 1: ", msg);
    return goToLogin();
}).then(function (msg) {
    console.log("Step 2: ", msg);
    return enterCredentials();
}).then(function (msg) {
    console.log("Step 3: ", msg);
    return clickLogin();
}).then(function (msg) {
    console.log("Step 4: ", msg);
}).catch(function (error) {
    console.log("Error: ", error);
});
console.log("****************************************");

console.log("Example 02");

function testStart() {
    return new Promise(function (resolve) {
        resolve("Test start here!");
    });
}

function testStep01() {
    return new Promise(function (resolve) {
        resolve("Login page.");
    });
}

function testStep02() {
    return new Promise(function (resolve) {
        resolve("User Details");
    });
}

function testStep03() {
    return new Promise(function (resolve) {
        resolve("Front page");
    });
}

function testStep04() {
    return new Promise(function (resolve) {
        resolve("This is Admin page!");
    });
}

testStart().then(function (msg) {
    console.log("Step 01: ", msg);
    return testStep01();
}).then(function (msg) {
    console.log("Step 02: ", msg);
    return testStep02();
}).then(function (msg) {
    console.log("Step 03: ", msg);
    return testStep03();
}).then(function (msg) {
    console.log("Step 04: ", msg);
    return testStep04();
}).then(function (msg) {
    console.log("Step 05:", msg);
}).catch(function (error) {
    console.log("Error: ", error);
}).finally(function () {
    console.log("Done execution!");
});

